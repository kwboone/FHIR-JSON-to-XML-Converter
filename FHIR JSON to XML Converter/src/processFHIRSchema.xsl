<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:fhir="http://hl7.org/fhir" version="1.0">
  
  <xsl:output method="text"/>

  <!-- Creates the variabe FHIRdefs[] which is a JavaScript object containing
    a representation of the FHIR Schemas
    -->
  <xsl:template match="/">
    <xsl:text>&#xA;function FHIRConverter(indent) {
        this.indent = indent;
        this.xml = "";
        /* For output */
        this.out = function(str) {
          xml += str;
        }
        this.reset = function() { xml = ""; }
        this.getResult = function() { return xml; }
        /* For diagnostics */
        this.msg = function(str) {
          alert(str);
        }
    </xsl:text>
    <xsl:text>&#xA;  this.FHIRdefs = {</xsl:text>
    <!-- Create an entry for each complex or simple type
      At present, only complexTypes are actually used 
      -->
    <xsl:apply-templates select="xs:schema/xs:complexType"/><!-- |xs:schema/xs:simpleType -->
    <xsl:text>&#xA;  };</xsl:text>
    <xsl:text>
<![CDATA[      
/*
 *  Convert a JSON based FHIR object to an XML version of the same 
 */

this.toXML = function (
  obj // The JavaScript object to convert to an XML string
)
{
  if (typeof obj == "string")
    obj = JSON.parse(obj);
    
  this.reset();
  this.out("<?xml version='1.0' encoding='UTF-8'?>\n");
  this.processChildren(obj, 0, null, this.getDef(obj.resourceType), obj.resourceType);
  return this.getResult();
};

/* Escape values for & < ' > */ 
this.escapeAttr = function (
  value  // The value to escape
)
{
  if (typeof value == "string") {
    return value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/,"&quot;");
  }
  return value;
};

/* Get a definition for a FHIR type or throw an exception if not found */
this.getDef = function (
  name // The type to get the definition for
)
{
  /* Check that it has a valid type
   */

  if (name in this.FHIRdefs)
    return this.FHIRdefs[name];
    
  /* NOTE: This error represents an internal inconsistency in
   * generation of FHIRdefs, not an error in use of this tool.       
   */ 
  throw name + " is not a FHIR type.";
};

/* Do stuff with extensions */
this.processExtra = function (obj, def, name, depth)
{
  /* TBD: Process Extensions */
  var needsClose = false;
  if ("id" in obj)
    this.out(" id=\"" + this.escapeAttr(obj.id) + "\"");
  
  if (needsClose)
    this.out(this.pad(depth) + "</" + name + ">\n");
  else
    this.out("/>\n");
};

this.findElement = function(elemArray, theObj, theExtra)
{
  for (elemIndex in elemArray)
  {
    var elem = elemArray[elemIndex];
    
    /* Find the element if present in properties */
    if (elem.name in theObj || (theExtra != null && elem.name in theExtra))
      return elem;
  }
  return null;
};


/* Process the children of the object */
this.processChildren = function (
  theObj,   // The object whose children are to be processed
  depth,    // The depth to use for pretty printing
  theExtra, // The extra gunge associated with the object 
  def,      // The definition for the element
  name
)
{
  /* Creates a new array of elements that contains the elements
   * of the defined type and its base types in the correct order
   * so as to generate the XML in the right order.   
   */
  var elems = [];
  for (var theDef = def; theDef != null; theDef = "base" in theDef ? this.getDef(theDef.base) : null)
    elems = theDef.elems.concat(elems);

  if ("fhir_comments" in theObj)
    this.out(this.pad(depth-1) + "<!--" + theObj.fhir_comments + "-->\n");
  else if (theExtra != null && "fhir_comments" in theExtra)
    this.out(this.pad(depth-1) + "<!--" + theObj.fhir_comments + "-->\n");
    
  this.out(this.pad(depth++) + "<" + name +">\n");
  
  /* For each element in this object */
  for (var index in elems)
  {
    var elem = elems[index];
    var theChild = null;
    var theChildExtra = null;
    
    if (elem instanceof Array)
    { elem = this.findElement(elem, theObj, theExtra);
      if (elem == null) 
        continue;
    }
    
    if (elem.name in theObj)
    { theChild = theObj[elem.name];
      theChildExtra = "_" + elem.name in theObj ? theObj["_" + elem.name] : null;
    }
    /* Or in the extra bits of stuff stored in _property */
    else if (theExtra != null && elem.name in theExtra)
    { theChild = theExtra[elem.name];
      theChildExtra = "_" + elemName in theExtra ? theExtra["_" + elem.name] : null;
    }
    else if (elem.name == "xhtml:div" && "div" in theObj)
    { theChild = theObj.div;
      theChildExtra = null;
    }
    
    if (theChild == null)
      continue;
    
    /* Turn obj (and extra) into an array if it isn't already
       * This is done to unify the process of handling 
       * forms with cardinality of 1 and > 1
       * e.g., "entry": [], and "entry": "foo"
       */
    if (!(theChild instanceof Array))
    { theChild = [ theChild ];
      theChildExtra = [ theChildExtra ];
    }
    else if (theChildExtra == null)
      theChildExtra = [];
  
    /* Ensure extra stuff is of same length as obj */
    if (theChildExtra.length != theChild.length)
      theChildExtra.length = theChild.length;

    /* output the element name */
    if ("isPrimitive" in elem && elem.isPrimitive)
    { 
      for (var k in theChild)
      {
        if (theChildExtra[k] && "fhir_comments" in theChildExtra[k])
          this.out(this.pad(depth) + "<!--" + theChildExtra[k].fhir_comments + "-->\n");
        this.out(this.pad(depth) + "<" + elem.name);
        if (theObj != null)
        {
          this.out(" value=\"" + this.escapeAttr(theChild[k]) + "\"");
        }
        if (theChildExtra[k] == null)
          this.out("/>\n");
        else 
          this.processExtra(theChildExtra[k], newDef, elem.name);
      }
    }
    else if (elem.name == "xhtml:div")
    { var div = theChild[0];
      var start = div.indexOf(">");
      var end = div.lastIndexOf("<");
      this.out(this.pad(depth) +"<div xmlns=\"http://www.w3.org/1999/xhtml\">" +
        div.substring(start+1,end) + "</div>\n");
    }    
    else
    { /* Convert the element */
      var newDef = this.getDef(elem.type); 
      
      /* Each element of the array is output */
      for(var i in theChild) 
      {
        if (newDef.name == "ResourceContainer")
        { var resourceName = theChild[i].resourceType;
          var resourceDef = this.getDef(resourceName);
          this.out(this.pad(depth) + "<"+elem.name+">\n")
          this.processChildren(theChild[i], depth+1, theChildExtra[i], resourceDef, resourceName);
          this.out(this.pad(depth) + "</"+elem.name+">\n")
        }
        else
          this.processChildren(theChild[i], depth, theChildExtra[i], newDef, elem.name);
      }
    }
  }
  this.out(this.pad(--depth) + "</" + name +">\n");
};

// Generate white space of the specified length
this.pad = function (length)
{
  if (length < 0) length = 0;
  return "                                                                                      ".substring(0,length*indent);
};

this.toJSON = function(obj) {
  if (typeof obj == "string")
  {
    parser=new DOMParser();
    obj = parser.parseFromString(obj, "text/xml").documentElement;
  }
  else if (!(obj instanceof Node))
    throw "Argument is neither an XML node nor a string";
  
  this.reset();
  var def = this.getDef(obj.localName);
  this.out("{\n");
  this.processXML(obj, "", 0, def, false);
  this.out("}\n");
  return this.getResult();
};

this.processXML = function(elem, context, depth, def, isMultiple)
{
  if (def == null)
    throw elem.localName + " is not defined in FHIR.";
  
  var isResource = ("base" in def && (def.base == "DomainResource" || def.base == "Resource"));
  var elemName = elem.localName;
  
  if (!isResource)
  {
    this.out(this.pad(depth) + "\"" + elem.localName + "\": ");
  }
  
  if (isMultiple)
  { this.out("[ \n");
    ++ depth;
  }
  do
  {
    var comments = this.getPrecedingComments(elem);

    if (this.isEmptyElem(elem))
    { if (isMultiple)
        this.out(this.pad(depth));
      this.out("\"" + elem.getAttribute("value") + "\", \n");
      
      if (comments != null)
      { this.out(this.pad(depth++) + "\"_" + elemName + "\": {\n");
        this.out(this.pad(depth++) + "\"fhir_comments\": [\n");
        for (var k in comments)
          this.out(this.pad(depth) + JSON.stringify(comments[k]) + ", \n");
        this.out(this.pad(--depth) + "],\n");
        // TBD: Handle id here, and exensions?
        this.out(this.pad(--depth) + "},\n");
      }
    }
    else
    { if (!isResource)
      { if (isMultiple)
          this.out(this.pad(depth));
        this.out("{ \n");
        depth++;
      }
      
      if (comments != null)
      { this.out(this.pad(depth++) + "\"fhir_comments\": [\n");
        for (var k in comments)
          this.out(this.pad(depth) + JSON.stringify(comments[k]) + ", \n");
        this.out(this.pad(--depth) + "],\n");
      }

      var url = elem.getAttribute("url")
      if (url != null)
        this.out(this.pad(depth) + "\"url\":\"" + url + "\", \n");
        
      if (isResource)
        this.out(this.pad(depth+1) + "\"resourceType\":\"" + elemName + "\", \n");
        
      var elem2 = elem.firstChild; 
      while (elem2 != null)
      { 
        
        if (elem2.nodeType == Node.ELEMENT_NODE)
        { if (elem2.localName == "div")
          { var serializer = new XMLSerializer();
            var div = serializer.serializeToString(elem2);
            this.out(this.pad(depth) + "\"div\":" + JSON.stringify(div) + ", \n");
            elem2 = this.getNextElement(elem2);
          }
          else
          { var elemDef = this.getXMLDef(def, elem2.localName);
            elem2 = this.processXML(elem2, context + "." + elem2.localName, depth + 1, this.getDef(elemDef.type), elemDef.max != "1");
          }
        }
        else
          elem2 = this.getNextElement(elem2);        
      }
      
      if (!isResource)
        this.out(this.pad(--depth) + "}, \n");
    }
    elem = this.getNextElement(elem);
  } while (isMultiple && elem != null && elemName == elem.localName);
  
  if (isMultiple)
    this.out(this.pad(--depth) + "], \n");
    
  return elem;
};


this.getXMLDef = function(def, name)
{
  var xmlDef = null;
  if ("base" in def)
  {
    xmlDef = this.getXMLDef(this.getDef(def.base), name);
    /* If we find it in the base, return it */
    if (xmlDef != null)
      return xmlDef;
  }
  /* Either there is no base definition, or we didn't find 
   * this element name in the base definition, so look for
   * it in the definition.
   */
  for (var index in def.elems)
  {  var elems = def.elems[index];
     if (!(elems instanceof Array))
       elems = [ elems ];
     for (var index2 in elems)
     {  elem = elems[index2];
        if (elem.name == name)
          return elem;
     }
  }
  /* We didn't find it, just return null */
  return null;
}

this.getNextElement = function(elem) {
  while (elem != null)
  { var next = elem.nextSibling; 
    if (next == null || next.nodeType == elem.ELEMENT_NODE)
      return next;
    elem = next;
  }
  return null;
};

this.getPrecedingComments = function(elem) {
  var out = [];
  while (elem != null)
  {
    var prev = elem.previousSibling;
    if (prev == null)
      break;
    if (prev.nodeType == Node.COMMENT_NODE)
      out.push(prev.data);
    else if (prev.nodeType == Node.ELEMENT_NODE)
      break;
    elem = prev;
  }
  return out.length == 0 ? null : out.reverse();
}

this.isEmptyElem = function(elem) {
  return elem.firstChild == null ||                   // Has no children OR 
    (elem.firstChild.nodeType != elem.ELEMENT_NODE && // first is not an element AND
     this.getNextElement(elem.firstChild) == null);   // neither are any of its sibs
};

this.isSingleton = function(elem, def)
{
  var s = elem.localName.substring(1,1);
  /* Resources are always singletons */
  if (s.toLowerCase() != s)
    return true;
  if (this.getPreviousElementName(elem) == elem.localName)
    return false;
  if (this.getNextElementName(elem) == elem.localName)
    return false;
  return true;  // Should actually be looking at types   
};
}
]]>
    </xsl:text>
  </xsl:template>

  <!-- Create a JavaScript object representing a complexType 
    The general form is
    "ElementName": {
      /* Comment describing it */
      "name": "TypeName", // For diagnostics
      "base": "BaseType", // For recursion into base types [see template: xs:complexContent/xs:extension mode="base" 
      "attrs": [  // List of child attributes, see template xs:attribute
      ],
      "elems": [  // List of child elements, see template xs:element
      ],
    }
  -->
  <xsl:template match="xs:complexType">
    <xsl:text>&#xA;"</xsl:text>
    <xsl:value-of select="@name"/>
    <xsl:text>": {</xsl:text>
    <xsl:apply-templates select="xs:annotation" mode="doc"/>
    <xsl:text>&#xA;  "name": "</xsl:text>
    <xsl:value-of select="@name"/>
    <xsl:text>",</xsl:text>
    <xsl:apply-templates select="xs:complexContent/xs:extension" mode="base"/>
    <xsl:text>&#xA;  "attrs": [</xsl:text>
    <xsl:apply-templates select=".//xs:attribute"/>
    <xsl:text>&#xA;  ],</xsl:text>
    <xsl:text>&#xA;  "elems": [</xsl:text>
    <xsl:apply-templates select="xs:sequence|xs:choice|xs:complexContent/xs:extension|xs:complexContent/xs:restriction"/>
    <xsl:text>&#xA;  ]</xsl:text>
    <xsl:text>&#xA;},</xsl:text>
  </xsl:template>

  <!--
    Process child sequences, choices or elements of extensions, 
    but not attributes, as these are handled in a separate pass    
  -->
  <xsl:template match="xs:complexContent/xs:extension|xs:complexContent/xs:restriction">
    <xsl:apply-templates select="xs:sequence/*|xs:choice|xs:element"/>
  </xsl:template>

  <!--
    Process a simpleType
    The general form is:
    "typeName": {
      "name": "typeName", // Again for diagnostics
      "base": "baseTypeName", // The base type  
      "minLength": "value",   // minLength if present
      "maxLength": "value",   // maxLength if present
      "minLength": "value",   // minLength if present
      "patterns": [ // Patterns if present
        "pattern1",
        ...
        "patternn",
      ]
      "values": [ // Enumeration values if present
        "value1",
          ...
        "valuen",
      ]
    },    
  -->
  <xsl:template match="xs:simpleType">
    <xsl:text>&#xA;"</xsl:text>
    <xsl:value-of select="@name"/>
    <xsl:text>": {</xsl:text>
    <xsl:apply-templates select="xs:annotation" mode="doc"/>
    <xsl:text>&#xA;  "name": "</xsl:text>
    <xsl:value-of select="@name"/>
    <xsl:text>",</xsl:text>
    <xsl:apply-templates select="xs:restriction" mode="base"/>
    <xsl:if test=".//xs:minLength">
      <xsl:text>&#xA;  "minLength": "</xsl:text>
      <xsl:value-of select=".//xs:minLength/@value"/>
      <xsl:text>", </xsl:text>
    </xsl:if>
    <xsl:if test=".//xs:maxLength">
      <xsl:text>&#xA;  "maxLength": "</xsl:text>
      <xsl:value-of select=".//xs:maxLength/@value"/>
      <xsl:text>", </xsl:text>
    </xsl:if>
    <xsl:if test=".//xs:pattern">
      <xsl:text>&#xA;  "patterns": [</xsl:text>
      <xsl:for-each select=".//xs:pattern">
        <xsl:text>&#xA;    "</xsl:text>
        <xsl:value-of select="@value"/>
        <xsl:text>",</xsl:text>
      </xsl:for-each>
      <xsl:text>&#xA;  ],</xsl:text>
    </xsl:if>
    <xsl:if test=".//xs:enumeration">
      <xsl:text>&#xA;  "values": [</xsl:text>
      <xsl:for-each select=".//xs:enumeration">
        <xsl:text>&#xA;    "</xsl:text>
        <xsl:value-of select="@value"/>
        <xsl:text>",</xsl:text>
      </xsl:for-each>
      <xsl:text>&#xA;  ]</xsl:text>
    </xsl:if>
    <xsl:text>&#xA;},</xsl:text>
  </xsl:template>

  <!-- Stop default rule -->
  <xsl:template match="text()"/>

  <!-- Generate "base": "baseTypeName" or
                "union": [ "type1", ... "typen" ]
       from the model 
  -->
  <xsl:template match="xs:extension|xs:restriction" mode="base">
    <xsl:choose>
      <xsl:when test="@base">
        <xsl:text>&#xA;  "base": "</xsl:text>
        <xsl:value-of select="@base"/>
        <xsl:text>", </xsl:text>
      </xsl:when>
      <xsl:when test=".//xs:union">
        <xsl:text>&#xA;  "union": [</xsl:text>
        <xsl:text>&#xA;     </xsl:text>
        <xsl:apply-templates select=".//xs:union"/>
        <xsl:text>], </xsl:text>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <!-- recursively process @memberTypes space separated list 
       into comma separate array of strings
    -->
  <xsl:template match="xs:union" name="union">
    <xsl:param name="values" select="normalize-space(./@memberTypes)"/>
    <xsl:variable name="left" select="substring-before(concat($values,' '),' ')"/>
    <xsl:variable name="right" select="substring-after($values,' ')"/>
    <xsl:text>"</xsl:text>
    <xsl:value-of select="$left"/>
    <xsl:text>", </xsl:text>
    <xsl:if test="$right != ''">
      <xsl:call-template name="union">
        <xsl:with-param name="values" select="$right"/>
      </xsl:call-template>
    </xsl:if>
  </xsl:template>

  <!-- Within a seqence, process its child choices, sequences or elements -->
  <xsl:template match="xs:sequence">
    <xsl:apply-templates select="xs:annotation" mode="doc"/>
    <xsl:apply-templates select="xs:choice|xs:sequence|xs:element"/>
  </xsl:template>

  <!-- A choice is expressed as an array of possible elements --> 
  <xsl:template match="xs:choice">
    <xsl:text>&#xA;    [ /* Choice */ </xsl:text>
    <xsl:apply-templates select="xs:annotation" mode="doc"/>
    <xsl:apply-templates select="xs:element">
      <xsl:with-param name="choice" select="true()"/>
    </xsl:apply-templates>
    <xsl:text>&#xA;    ], </xsl:text>
  </xsl:template>

  <!-- represent an attribute, the general form is 
    { "name": "attributeName",
      "type": "attributeType"\
    }
  -->
  <xsl:template match="xs:attribute">
    <xsl:text>&#xA;    { </xsl:text>
    <xsl:apply-templates select="xs:annotation" mode="doc"/>
    <xsl:text>&#xA;      "name": "</xsl:text>
    <xsl:value-of select="@name"/>
    <xsl:text>", </xsl:text>
    <xsl:text>&#xA;      "type": "</xsl:text>
    <xsl:value-of select="@type"/>
    <xsl:text>" }, </xsl:text>
  </xsl:template>

  <!-- represent an element, the geneeral form is 
    { "name": "elementName",
      "min": "minCardinalityValue",
      "max": "maxCardinalityValue",
      "type": "elementType",
      "isPrimitive": booleanValue // Based on whether this element is a FHIR Primitive type 
    }
  -->
  <xsl:template match="xs:element">
    <xsl:param name="choice" select="false()"/>
    <xsl:variable name="lead">
      <xsl:text>&#xA;    </xsl:text>
      <xsl:if test="$choice">
        <xsl:text>    </xsl:text>
      </xsl:if>
    </xsl:variable>
    <xsl:value-of select="$lead"/>
    <xsl:text>{ </xsl:text>
    <xsl:apply-templates select="xs:annotation" mode="doc"/>
    <xsl:text>  "name": "</xsl:text>
    <xsl:value-of select="@name|@ref"/>
    <xsl:text>", </xsl:text>
    <xsl:value-of select="$lead"/>
    <xsl:choose>
      <xsl:when test="@minOccurs">
        <xsl:value-of select="$lead"/>
        <xsl:text>  "min": "</xsl:text>
        <xsl:value-of select="@minOccurs"/>
        <xsl:text>", </xsl:text>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="$lead"/><xsl:text>  "min": "</xsl:text>1<xsl:text>", </xsl:text>
      </xsl:otherwise>
    </xsl:choose>
    <xsl:choose>
      <xsl:when test="@maxOccurs">
        <xsl:value-of select="$lead"/>
        <xsl:text>  "max": "</xsl:text>
        <xsl:value-of select="@maxOccurs"/>
        <xsl:text>", </xsl:text>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="$lead"/><xsl:text>  "max": "</xsl:text>1<xsl:text>", </xsl:text>
      </xsl:otherwise>
    </xsl:choose>
    <xsl:value-of select="$lead"/>
    <xsl:text>  "type": "</xsl:text>
    <xsl:value-of select="@type"/>
    <xsl:if test="not(@type)"><xsl:value-of select='@ref'/></xsl:if>
    <xsl:text>",</xsl:text>
    <xsl:value-of select="$lead"/>
    <xsl:text>  "isPrimitive": </xsl:text>
    <xsl:variable name='def' select="//xs:complexType[@name = current()/@type]"/>
    <xsl:value-of select="$def//xs:extension/@base = 'Element' and count($def//xs:element)=0"/>
    <xsl:text> }, </xsl:text>
  </xsl:template>

  <!-- Generate a comment based on the FHIR documentation -->
  <xsl:template match="xs:annotation" mode="doc">
    <xsl:text>&#xA;    /*</xsl:text>
    <xsl:for-each select="xs:documentation">
      <xsl:value-of select="."/>
    </xsl:for-each>
    <xsl:text>&#xA;     */</xsl:text>
  </xsl:template>

</xsl:stylesheet>
