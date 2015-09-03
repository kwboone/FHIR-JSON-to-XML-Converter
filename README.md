# FHIR-JSON-to-XML-Converter
A JSON->XML converter for HL7 FHIR

This project contains a FHIR® JSON->XML converter written in JavaScript and a 
test harness to demonstrate its use.  It is built from the XML Schemas found 
in the FHIR® DSTU 2 QA Build at http://www.hl7.org/fhir/2015Sep/index.html

Usage is fairly straight-foward.

1.  First you create a new converter:
    var FHIR_JSONtoXML = new FHIRConverter(2);
2.  Then you convert the FHIR JavaScript object
    var xml = FHIR_JSONtoXML.toXML(object);
    
The toXML member function will convert the object to an XML representation.
It assumes that the object itself complies with the FHIR specification, and does
not (yet) attempt to handle input implementation errors or validation.
