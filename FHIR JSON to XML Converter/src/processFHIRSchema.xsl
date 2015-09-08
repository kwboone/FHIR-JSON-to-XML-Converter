<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE stylesheet [
<!ENTITY converterBody SYSTEM "FHIRConverterBody.js">
]>

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
    <!--  Insert the body of the converter from FHIRConverterBody.js here -->
    &converterBody;
    <xsl:text>&#xA;}</xsl:text>
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
