//<![CDATA[
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
  var needsSep = false;
  if ("id" in obj)
    this.out(" id=\"" + this.escapeAttr(obj.id) + "\"");
  
  if (needsSep)
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

	this.resetJSONState();
  if (typeof obj == "string")
  {
    parser=new DOMParser();
    obj = parser.parseFromString(obj, "text/xml").documentElement;
  }
  else if (!(obj instanceof Node))
    throw "Argument is neither an XML node nor a string";
  
  this.reset();
  this.resetJSONState();
  var def = this.getDef(obj.localName);
  this.startObject();
  this.processXML(obj, "", 0, def, false);
  this.endObject();
  return this.getResult();
};

this.STATE_VALUE = "value";
this.STATE_PROP = "property";

this.resetJSONState = function()
{
  this.stack = [];
  this.state = {
  		"type": "Array",
  		"waiting": this.STATE_VALUE, // Waiting for a property
  		"needsSep": false,
  		"needsIndent": false
  };
  this.depth = 0;
};

this.doStart = function(name, type, lead, newWaiting)
{
	
	if (name != null) 
	 	this.setProperty(name);
	else if (this.state.needsSep)
		this.out(",");

	// If we are waiting for a property, this is a problem
	if (this.state.waiting == this.STATE_PROP)
		throw "Cannot start " + type + " while waiting for a property.";
	
	if (this.state.needsIndent)
		this.out("\n" + this.pad(this.depth));
	else
		this.state.needsIndent = true;
	
	this.out(lead);
	this.state.needsSep = true;
	this.stack.push(this.state);
	this.state = { "type": type, "waiting": newWaiting, "needsSep": false, "needsIndent": true};
	this.depth++;
}

// JSON Output Functions
this.startArray = function(name)
{
	this.doStart(name, "Array", "[ ", this.STATE_VALUE);
};

this.startObject = function(name)
{
	this.doStart(name, "Object", "{ ", this.STATE_PROP);
};

this.doEnd = function(type, trail)
{
	// if the top of the stack doesn't indicate we have an open array, this is a problem
	if (this.state.type != type)
		throw type + " not started";

	this.out("\n" + this.pad(--this.depth) + trail);
  this.state = this.stack.pop();	
  this.state.waiting = (this.state.type == "Object") ? this.STATE_PROP : this.STATE_VALUE;
	this.state.needsSep = true;
  this.state.needsIndent = true;
};

this.endArray = function() {
	this.doEnd("Array","]");
};

this.endObject = function() {
	this.doEnd("Object","}");
};

this.setProperty = function(name, value)
{
	// If we are waiting for a value, then this is an error
	if (this.state.waiting == this.STATE_VALUE)
		throw "Cannot set property inside a property or array";
	
	if (this.state.needsSep)
	  this.out(",");

	this.out("\n" + this.pad(this.depth) + "\"" + name + "\": ");
	this.state.waiting = this.STATE_VALUE;
	this.state.needsIndent = false;
	this.state.needsSep = false;
	
	if (value != undefined)
		this.setValue(value);
};

this.setValue = function(value)
{
	// if we are waiting for a property, this is a problem
	if (this.state.waiting == this.STATE_PROP)
		throw "A property value is expected";
	
	if (this.state.needsSep)
		this.out(",");
	if (this.state.needsIndent)
		this.out("\n" + this.pad(this.depth));
	
	this.out(JSON.stringify(value));
  this.state.waiting = (this.state.type == "Object") ? this.STATE_PROP : this.STATE_VALUE;
	this.state.needsSep = true;
  this.state.needsIndent = true;
};

this.processXML = function(elem, context, depth, def, isMultiple)
{
  if (def == null)
    throw elem.localName + " is not defined in FHIR.";
  
  var isResource = ("base" in def && (def.base == "DomainResource" || def.base == "Resource"));
  var elemName = elem.localName;
  
  if (!isResource)
  	this.setProperty(elem.localName);
  
  if (isMultiple)
    this.startArray();

  do
  {
    var comments = this.getPrecedingComments(elem);

    if (this.isEmptyElem(elem))
    { if (isMultiple)
        this.out(this.pad(depth));
      this.setValue(elem.getAttribute("value"));
      
      if (comments != null)
      { this.startObject("_" + elemName);
        this.startArray("fhir_comments");
        
        for (var k in comments)
        	this.setValue(comments[k]);
        
        this.endArray();
        // TBD: Handle id here, and exensions?
        this.endObject();
      }
    }
    else
    { if (!isResource)
        this.startObject();
      
      if (comments != null)
      { 
      	this.startArray("fhir_comments");
      	
        for (var k in comments)
          this.setValue(comments[k]);
        
        this.endArray();
      }

      var url = elem.getAttribute("url")
      if (url != null)
    		this.setProperty("url", url);
        
      if (isResource)
        this.setProperty("resourceType", elemName);
        
      var elem2 = elem.firstChild; 
      while (elem2 != null)
      { 
        
        if (elem2.nodeType == Node.ELEMENT_NODE)
        { if (elem2.localName == "div")
          { var serializer = new XMLSerializer();
            var div = serializer.serializeToString(elem2);
            this.setProperty("div",div);
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
        this.endObject();
    }
    elem = this.getNextElement(elem);
  } while (isMultiple && elem != null && elemName == elem.localName);
  
  if (isMultiple)
    this.endArray();
    
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
//]]>
