// mcarifio from fhir-convert.js

function FHIRConverter(indent) {
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
    
  this.FHIRdefs = {
"date": {
    /*A date, or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.                 Dates SHALL be valid dates.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "date",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "date-primitive" }, 
  ],
  "elems": [
  ]
},
"dateTime": {
    /*A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "dateTime",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "dateTime-primitive" }, 
  ],
  "elems": [
  ]
},
"code": {
    /*A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contentsIf the element is present, it must have either a @value, an @id referenced from the Narrative, or extensions
     */
  "name": "code",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "code-primitive" }, 
  ],
  "elems": [
  ]
},
"string": {
    /*A sequence of Unicode charactersNote that FHIR strings may not exceed 1MB in sizeIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "string",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "string-primitive" }, 
  ],
  "elems": [
  ]
},
"integer": {
    /*A whole number32 bit number; for values larger than this, use decimalIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "integer",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "integer-primitive" }, 
  ],
  "elems": [
  ]
},
"oid": {
    /*An oid represented as a URIRFC 3001. See also ISO/IEC 8824:1990 €If the element is present, it must have either a @value, an @id referenced from the Narrative, or extensions
     */
  "name": "oid",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "oid-primitive" }, 
  ],
  "elems": [
  ]
},
"uri": {
    /*String of characters used to identify a name or a resourcesee http://en.wikipedia.org/wiki/Uniform_resource_identifierIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "uri",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "uri-primitive" }, 
  ],
  "elems": [
  ]
},
"uuid": {
    /*A UUID, represented as a URISee The Open Group, CDE 1.1 Remote Procedure Call specification, Appendix A.If the element is present, it must have either a @value, an @id referenced from the Narrative, or extensions
     */
  "name": "uuid",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "uuid-primitive" }, 
  ],
  "elems": [
  ]
},
"instant": {
    /*An instant in time - known at least to the secondNote: This is intended for precisely observed times, typically system logs etc, and not human-reported times - for them, see date and dateTime below. Time zone is always requiredIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "instant",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "instant-primitive" }, 
  ],
  "elems": [
  ]
},
"boolean": {
    /*Value of "true" or "false"If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "boolean",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "boolean-primitive" }, 
  ],
  "elems": [
  ]
},
"base64Binary": {
    /*A stream of bytesA stream of bytes, base64 encodedIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "base64Binary",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "base64Binary-primitive" }, 
  ],
  "elems": [
  ]
},
"unsignedInt": {
    /*An integer with a value that is not negative (e.g. >= 0)If the element is present, it must have either a @value, an @id referenced from the Narrative, or extensions
     */
  "name": "unsignedInt",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "unsignedInt-primitive" }, 
  ],
  "elems": [
  ]
},
"markdown": {
    /*A string that may contain markdown syntax for optional processing by a mark down presentation engineSystems are not required to have markdown support, and there is considerable variation in markdown syntax, so the text should be readable without markdown processing. The preferred markdown syntax is described here: http://daringfireball.net/projects/markdown/syntax (and tests here: http://daringfireball.net/projects/downloads/MarkdownTest_1.0.zip)If the element is present, it must have either a @value, an @id referenced from the Narrative, or extensions
     */
  "name": "markdown",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "markdown-primitive" }, 
  ],
  "elems": [
  ]
},
"time": {
    /*A time during the day, with no date specifiedIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "time",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "time-primitive" }, 
  ],
  "elems": [
  ]
},
"id": {
    /*Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive.RFC 4122If the element is present, it must have either a @value, an @id referenced from the Narrative, or extensions
     */
  "name": "id",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "id-primitive" }, 
  ],
  "elems": [
  ]
},
"positiveInt": {
    /*An integer with a value that is positive (e.g. >0)If the element is present, it must have either a @value, an @id referenced from the Narrative, or extensions
     */
  "name": "positiveInt",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "positiveInt-primitive" }, 
  ],
  "elems": [
  ]
},
"decimal": {
    /*A rational number with implicit precisionDo not use a IEEE type floating point type, instead use something that works like a true decimal, with inbuilt precision (e.g. Java BigInteger)If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "decimal",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "decimal-primitive" }, 
  ],
  "elems": [
  ]
},
"ResourceContainer": {
  "name": "ResourceContainer",
  "attrs": [
  ],
  "elems": [
    [ /* Choice */ 
        {   "name": "Account", 
        
          "min": "1", 
          "max": "1", 
          "type": "Account",
          "isPrimitive": false }, 
        {   "name": "AllergyIntolerance", 
        
          "min": "1", 
          "max": "1", 
          "type": "AllergyIntolerance",
          "isPrimitive": false }, 
        {   "name": "Appointment", 
        
          "min": "1", 
          "max": "1", 
          "type": "Appointment",
          "isPrimitive": false }, 
        {   "name": "AppointmentResponse", 
        
          "min": "1", 
          "max": "1", 
          "type": "AppointmentResponse",
          "isPrimitive": false }, 
        {   "name": "AuditEvent", 
        
          "min": "1", 
          "max": "1", 
          "type": "AuditEvent",
          "isPrimitive": false }, 
        {   "name": "Basic", 
        
          "min": "1", 
          "max": "1", 
          "type": "Basic",
          "isPrimitive": false }, 
        {   "name": "Binary", 
        
          "min": "1", 
          "max": "1", 
          "type": "Binary",
          "isPrimitive": false }, 
        {   "name": "BodySite", 
        
          "min": "1", 
          "max": "1", 
          "type": "BodySite",
          "isPrimitive": false }, 
        {   "name": "Bundle", 
        
          "min": "1", 
          "max": "1", 
          "type": "Bundle",
          "isPrimitive": false }, 
        {   "name": "CarePlan", 
        
          "min": "1", 
          "max": "1", 
          "type": "CarePlan",
          "isPrimitive": false }, 
        {   "name": "Claim", 
        
          "min": "1", 
          "max": "1", 
          "type": "Claim",
          "isPrimitive": false }, 
        {   "name": "ClaimResponse", 
        
          "min": "1", 
          "max": "1", 
          "type": "ClaimResponse",
          "isPrimitive": false }, 
        {   "name": "ClinicalImpression", 
        
          "min": "1", 
          "max": "1", 
          "type": "ClinicalImpression",
          "isPrimitive": false }, 
        {   "name": "Communication", 
        
          "min": "1", 
          "max": "1", 
          "type": "Communication",
          "isPrimitive": false }, 
        {   "name": "CommunicationRequest", 
        
          "min": "1", 
          "max": "1", 
          "type": "CommunicationRequest",
          "isPrimitive": false }, 
        {   "name": "Composition", 
        
          "min": "1", 
          "max": "1", 
          "type": "Composition",
          "isPrimitive": false }, 
        {   "name": "ConceptMap", 
        
          "min": "1", 
          "max": "1", 
          "type": "ConceptMap",
          "isPrimitive": false }, 
        {   "name": "Condition", 
        
          "min": "1", 
          "max": "1", 
          "type": "Condition",
          "isPrimitive": false }, 
        {   "name": "Conformance", 
        
          "min": "1", 
          "max": "1", 
          "type": "Conformance",
          "isPrimitive": false }, 
        {   "name": "Contract", 
        
          "min": "1", 
          "max": "1", 
          "type": "Contract",
          "isPrimitive": false }, 
        {   "name": "Coverage", 
        
          "min": "1", 
          "max": "1", 
          "type": "Coverage",
          "isPrimitive": false }, 
        {   "name": "DataElement", 
        
          "min": "1", 
          "max": "1", 
          "type": "DataElement",
          "isPrimitive": false }, 
        {   "name": "DetectedIssue", 
        
          "min": "1", 
          "max": "1", 
          "type": "DetectedIssue",
          "isPrimitive": false }, 
        {   "name": "Device", 
        
          "min": "1", 
          "max": "1", 
          "type": "Device",
          "isPrimitive": false }, 
        {   "name": "DeviceComponent", 
        
          "min": "1", 
          "max": "1", 
          "type": "DeviceComponent",
          "isPrimitive": false }, 
        {   "name": "DeviceMetric", 
        
          "min": "1", 
          "max": "1", 
          "type": "DeviceMetric",
          "isPrimitive": false }, 
        {   "name": "DeviceUseRequest", 
        
          "min": "1", 
          "max": "1", 
          "type": "DeviceUseRequest",
          "isPrimitive": false }, 
        {   "name": "DeviceUseStatement", 
        
          "min": "1", 
          "max": "1", 
          "type": "DeviceUseStatement",
          "isPrimitive": false }, 
        {   "name": "DiagnosticOrder", 
        
          "min": "1", 
          "max": "1", 
          "type": "DiagnosticOrder",
          "isPrimitive": false }, 
        {   "name": "DiagnosticReport", 
        
          "min": "1", 
          "max": "1", 
          "type": "DiagnosticReport",
          "isPrimitive": false }, 
        {   "name": "DocumentManifest", 
        
          "min": "1", 
          "max": "1", 
          "type": "DocumentManifest",
          "isPrimitive": false }, 
        {   "name": "DocumentReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "DocumentReference",
          "isPrimitive": false }, 
        {   "name": "EligibilityRequest", 
        
          "min": "1", 
          "max": "1", 
          "type": "EligibilityRequest",
          "isPrimitive": false }, 
        {   "name": "EligibilityResponse", 
        
          "min": "1", 
          "max": "1", 
          "type": "EligibilityResponse",
          "isPrimitive": false }, 
        {   "name": "Encounter", 
        
          "min": "1", 
          "max": "1", 
          "type": "Encounter",
          "isPrimitive": false }, 
        {   "name": "EnrollmentRequest", 
        
          "min": "1", 
          "max": "1", 
          "type": "EnrollmentRequest",
          "isPrimitive": false }, 
        {   "name": "EnrollmentResponse", 
        
          "min": "1", 
          "max": "1", 
          "type": "EnrollmentResponse",
          "isPrimitive": false }, 
        {   "name": "EpisodeOfCare", 
        
          "min": "1", 
          "max": "1", 
          "type": "EpisodeOfCare",
          "isPrimitive": false }, 
        {   "name": "ExplanationOfBenefit", 
        
          "min": "1", 
          "max": "1", 
          "type": "ExplanationOfBenefit",
          "isPrimitive": false }, 
        {   "name": "FamilyMemberHistory", 
        
          "min": "1", 
          "max": "1", 
          "type": "FamilyMemberHistory",
          "isPrimitive": false }, 
        {   "name": "Flag", 
        
          "min": "1", 
          "max": "1", 
          "type": "Flag",
          "isPrimitive": false }, 
        {   "name": "Goal", 
        
          "min": "1", 
          "max": "1", 
          "type": "Goal",
          "isPrimitive": false }, 
        {   "name": "Group", 
        
          "min": "1", 
          "max": "1", 
          "type": "Group",
          "isPrimitive": false }, 
        {   "name": "HealthcareService", 
        
          "min": "1", 
          "max": "1", 
          "type": "HealthcareService",
          "isPrimitive": false }, 
        {   "name": "ImagingObjectSelection", 
        
          "min": "1", 
          "max": "1", 
          "type": "ImagingObjectSelection",
          "isPrimitive": false }, 
        {   "name": "ImagingStudy", 
        
          "min": "1", 
          "max": "1", 
          "type": "ImagingStudy",
          "isPrimitive": false }, 
        {   "name": "Immunization", 
        
          "min": "1", 
          "max": "1", 
          "type": "Immunization",
          "isPrimitive": false }, 
        {   "name": "ImmunizationRecommendation", 
        
          "min": "1", 
          "max": "1", 
          "type": "ImmunizationRecommendation",
          "isPrimitive": false }, 
        {   "name": "ImplementationGuide", 
        
          "min": "1", 
          "max": "1", 
          "type": "ImplementationGuide",
          "isPrimitive": false }, 
        {   "name": "List", 
        
          "min": "1", 
          "max": "1", 
          "type": "List",
          "isPrimitive": false }, 
        {   "name": "Location", 
        
          "min": "1", 
          "max": "1", 
          "type": "Location",
          "isPrimitive": false }, 
        {   "name": "Media", 
        
          "min": "1", 
          "max": "1", 
          "type": "Media",
          "isPrimitive": false }, 
        {   "name": "Medication", 
        
          "min": "1", 
          "max": "1", 
          "type": "Medication",
          "isPrimitive": false }, 
        {   "name": "MedicationAdministration", 
        
          "min": "1", 
          "max": "1", 
          "type": "MedicationAdministration",
          "isPrimitive": false }, 
        {   "name": "MedicationDispense", 
        
          "min": "1", 
          "max": "1", 
          "type": "MedicationDispense",
          "isPrimitive": false }, 
        {   "name": "MedicationOrder", 
        
          "min": "1", 
          "max": "1", 
          "type": "MedicationOrder",
          "isPrimitive": false }, 
        {   "name": "MedicationStatement", 
        
          "min": "1", 
          "max": "1", 
          "type": "MedicationStatement",
          "isPrimitive": false }, 
        {   "name": "MessageHeader", 
        
          "min": "1", 
          "max": "1", 
          "type": "MessageHeader",
          "isPrimitive": false }, 
        {   "name": "NamingSystem", 
        
          "min": "1", 
          "max": "1", 
          "type": "NamingSystem",
          "isPrimitive": false }, 
        {   "name": "NutritionOrder", 
        
          "min": "1", 
          "max": "1", 
          "type": "NutritionOrder",
          "isPrimitive": false }, 
        {   "name": "Observation", 
        
          "min": "1", 
          "max": "1", 
          "type": "Observation",
          "isPrimitive": false }, 
        {   "name": "OperationDefinition", 
        
          "min": "1", 
          "max": "1", 
          "type": "OperationDefinition",
          "isPrimitive": false }, 
        {   "name": "OperationOutcome", 
        
          "min": "1", 
          "max": "1", 
          "type": "OperationOutcome",
          "isPrimitive": false }, 
        {   "name": "Order", 
        
          "min": "1", 
          "max": "1", 
          "type": "Order",
          "isPrimitive": false }, 
        {   "name": "OrderResponse", 
        
          "min": "1", 
          "max": "1", 
          "type": "OrderResponse",
          "isPrimitive": false }, 
        {   "name": "Organization", 
        
          "min": "1", 
          "max": "1", 
          "type": "Organization",
          "isPrimitive": false }, 
        {   "name": "Patient", 
        
          "min": "1", 
          "max": "1", 
          "type": "Patient",
          "isPrimitive": false }, 
        {   "name": "PaymentNotice", 
        
          "min": "1", 
          "max": "1", 
          "type": "PaymentNotice",
          "isPrimitive": false }, 
        {   "name": "PaymentReconciliation", 
        
          "min": "1", 
          "max": "1", 
          "type": "PaymentReconciliation",
          "isPrimitive": false }, 
        {   "name": "Person", 
        
          "min": "1", 
          "max": "1", 
          "type": "Person",
          "isPrimitive": false }, 
        {   "name": "Practitioner", 
        
          "min": "1", 
          "max": "1", 
          "type": "Practitioner",
          "isPrimitive": false }, 
        {   "name": "Procedure", 
        
          "min": "1", 
          "max": "1", 
          "type": "Procedure",
          "isPrimitive": false }, 
        {   "name": "ProcedureRequest", 
        
          "min": "1", 
          "max": "1", 
          "type": "ProcedureRequest",
          "isPrimitive": false }, 
        {   "name": "ProcessRequest", 
        
          "min": "1", 
          "max": "1", 
          "type": "ProcessRequest",
          "isPrimitive": false }, 
        {   "name": "ProcessResponse", 
        
          "min": "1", 
          "max": "1", 
          "type": "ProcessResponse",
          "isPrimitive": false }, 
        {   "name": "Provenance", 
        
          "min": "1", 
          "max": "1", 
          "type": "Provenance",
          "isPrimitive": false }, 
        {   "name": "Questionnaire", 
        
          "min": "1", 
          "max": "1", 
          "type": "Questionnaire",
          "isPrimitive": false }, 
        {   "name": "QuestionnaireResponse", 
        
          "min": "1", 
          "max": "1", 
          "type": "QuestionnaireResponse",
          "isPrimitive": false }, 
        {   "name": "ReferralRequest", 
        
          "min": "1", 
          "max": "1", 
          "type": "ReferralRequest",
          "isPrimitive": false }, 
        {   "name": "RelatedPerson", 
        
          "min": "1", 
          "max": "1", 
          "type": "RelatedPerson",
          "isPrimitive": false }, 
        {   "name": "RiskAssessment", 
        
          "min": "1", 
          "max": "1", 
          "type": "RiskAssessment",
          "isPrimitive": false }, 
        {   "name": "Schedule", 
        
          "min": "1", 
          "max": "1", 
          "type": "Schedule",
          "isPrimitive": false }, 
        {   "name": "SearchParameter", 
        
          "min": "1", 
          "max": "1", 
          "type": "SearchParameter",
          "isPrimitive": false }, 
        {   "name": "Slot", 
        
          "min": "1", 
          "max": "1", 
          "type": "Slot",
          "isPrimitive": false }, 
        {   "name": "Specimen", 
        
          "min": "1", 
          "max": "1", 
          "type": "Specimen",
          "isPrimitive": false }, 
        {   "name": "StructureDefinition", 
        
          "min": "1", 
          "max": "1", 
          "type": "StructureDefinition",
          "isPrimitive": false }, 
        {   "name": "Subscription", 
        
          "min": "1", 
          "max": "1", 
          "type": "Subscription",
          "isPrimitive": false }, 
        {   "name": "Substance", 
        
          "min": "1", 
          "max": "1", 
          "type": "Substance",
          "isPrimitive": false }, 
        {   "name": "SupplyDelivery", 
        
          "min": "1", 
          "max": "1", 
          "type": "SupplyDelivery",
          "isPrimitive": false }, 
        {   "name": "SupplyRequest", 
        
          "min": "1", 
          "max": "1", 
          "type": "SupplyRequest",
          "isPrimitive": false }, 
        {   "name": "TestScript", 
        
          "min": "1", 
          "max": "1", 
          "type": "TestScript",
          "isPrimitive": false }, 
        {   "name": "ValueSet", 
        
          "min": "1", 
          "max": "1", 
          "type": "ValueSet",
          "isPrimitive": false }, 
        {   "name": "VisionPrescription", 
        
          "min": "1", 
          "max": "1", 
          "type": "VisionPrescription",
          "isPrimitive": false }, 
        {   "name": "Parameters", 
        
          "min": "1", 
          "max": "1", 
          "type": "Parameters",
          "isPrimitive": false }, 
    ], 
  ]
},
"Extension": {
    /*Optional Extensions Element - found in all resources.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "Extension",
  "base": "Element", 
  "attrs": [
    { 
      "name": "url", 
      "type": "uri-primitive" }, 
  ],
  "elems": [
    [ /* Choice */ 
    /*Value of extension - may be a resource or one of a constrained set of the data types (see Extensibility in the spec for list).
     */
        {   "name": "valueBoolean", 
        
          "min": "1", 
          "max": "1", 
          "type": "boolean",
          "isPrimitive": true }, 
        {   "name": "valueInteger", 
        
          "min": "1", 
          "max": "1", 
          "type": "integer",
          "isPrimitive": true }, 
        {   "name": "valueDecimal", 
        
          "min": "1", 
          "max": "1", 
          "type": "decimal",
          "isPrimitive": true }, 
        {   "name": "valueBase64Binary", 
        
          "min": "1", 
          "max": "1", 
          "type": "base64Binary",
          "isPrimitive": true }, 
        {   "name": "valueInstant", 
        
          "min": "1", 
          "max": "1", 
          "type": "instant",
          "isPrimitive": true }, 
        {   "name": "valueString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
        {   "name": "valueUri", 
        
          "min": "1", 
          "max": "1", 
          "type": "uri",
          "isPrimitive": true }, 
        {   "name": "valueDate", 
        
          "min": "1", 
          "max": "1", 
          "type": "date",
          "isPrimitive": true }, 
        {   "name": "valueDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "valueTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "time",
          "isPrimitive": true }, 
        {   "name": "valueCode", 
        
          "min": "1", 
          "max": "1", 
          "type": "code",
          "isPrimitive": true }, 
        {   "name": "valueOid", 
        
          "min": "1", 
          "max": "1", 
          "type": "oid",
          "isPrimitive": true }, 
        {   "name": "valueUuid", 
        
          "min": "1", 
          "max": "1", 
          "type": "uuid",
          "isPrimitive": true }, 
        {   "name": "valueId", 
        
          "min": "1", 
          "max": "1", 
          "type": "id",
          "isPrimitive": true }, 
        {   "name": "valueUnsignedInt", 
        
          "min": "1", 
          "max": "1", 
          "type": "unsignedInt",
          "isPrimitive": true }, 
        {   "name": "valuePositiveInt", 
        
          "min": "1", 
          "max": "1", 
          "type": "positiveInt",
          "isPrimitive": true }, 
        {   "name": "valueMarkdown", 
        
          "min": "1", 
          "max": "1", 
          "type": "markdown",
          "isPrimitive": true }, 
        {   "name": "valueAnnotation", 
        
          "min": "1", 
          "max": "1", 
          "type": "Annotation",
          "isPrimitive": false }, 
        {   "name": "valueAttachment", 
        
          "min": "1", 
          "max": "1", 
          "type": "Attachment",
          "isPrimitive": false }, 
        {   "name": "valueIdentifier", 
        
          "min": "1", 
          "max": "1", 
          "type": "Identifier",
          "isPrimitive": false }, 
        {   "name": "valueCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "valueCoding", 
        
          "min": "1", 
          "max": "1", 
          "type": "Coding",
          "isPrimitive": false }, 
        {   "name": "valueQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "Quantity",
          "isPrimitive": false }, 
        {   "name": "valueRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
        {   "name": "valuePeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
        {   "name": "valueRatio", 
        
          "min": "1", 
          "max": "1", 
          "type": "Ratio",
          "isPrimitive": false }, 
        {   "name": "valueReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
        {   "name": "valueSampledData", 
        
          "min": "1", 
          "max": "1", 
          "type": "SampledData",
          "isPrimitive": false }, 
        {   "name": "valueSignature", 
        
          "min": "1", 
          "max": "1", 
          "type": "Signature",
          "isPrimitive": false }, 
        {   "name": "valueHumanName", 
        
          "min": "1", 
          "max": "1", 
          "type": "HumanName",
          "isPrimitive": false }, 
        {   "name": "valueAddress", 
        
          "min": "1", 
          "max": "1", 
          "type": "Address",
          "isPrimitive": false }, 
        {   "name": "valueContactPoint", 
        
          "min": "1", 
          "max": "1", 
          "type": "ContactPoint",
          "isPrimitive": false }, 
        {   "name": "valueTiming", 
        
          "min": "1", 
          "max": "1", 
          "type": "Timing",
          "isPrimitive": false }, 
        {   "name": "valueMeta", 
        
          "min": "1", 
          "max": "1", 
          "type": "Meta",
          "isPrimitive": false }, 
    ], 
  ]
},
"BackboneElement": {
    /*Base definition for all elements that are defined inside a resource - but not those in a data type.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "BackboneElement",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
     */  "name": "modifierExtension", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Extension",
      "isPrimitive": false }, 
  ]
},
"Narrative": {
    /*A human-readable formatted text, including images.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "Narrative",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "NarrativeStatus",
      "isPrimitive": true }, 
    { 
    /*The actual narrative content, a stripped down version of XHTML.
     */  "name": "xhtml:div", 
    
      "min": "1", 
      "max": "1", 
      "type": "xhtml:div",
      "isPrimitive": false }, 
  ]
},
"NarrativeStatus": {
    /*The status of a resource narrativeIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "NarrativeStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "NarrativeStatus-list" }, 
  ],
  "elems": [
  ]
},
"Element": {
    /*Base definition for all elements in a resource.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "Element",
  "attrs": [
    { 
      "name": "id", 
      "type": "id-primitive" }, 
  ],
  "elems": [
    { 
    /*May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */  "name": "extension", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Extension",
      "isPrimitive": false }, 
  ]
},
"Identifier": {
    /*A technical identifier - identifies some entity uniquely and unambiguously.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "Identifier",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The purpose of this identifier.
     */  "name": "use", 
    
      "min": "0", 
      "max": "1", 
      "type": "IdentifierUse",
      "isPrimitive": true }, 
    { 
    /*A coded type for the identifier that can be used to determine which identifier to use for a specific purpose.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Establishes the namespace in which set of possible id values is unique.
     */  "name": "system", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*The portion of the identifier typically displayed to the user and which is unique within the context of the system.
     */  "name": "value", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Time period during which identifier is/was valid for use.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*Organization that issued/manages the identifier.
     */  "name": "assigner", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"IdentifierUse": {
    /*Identifies the purpose for this identifier, if knownIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "IdentifierUse",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "IdentifierUse-list" }, 
  ],
  "elems": [
  ]
},
"Coding": {
    /*A reference to a code defined by a terminology system.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "Coding",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The identification of the code system that defines the meaning of the symbol in the code.
     */  "name": "system", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured. and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.
     */  "name": "version", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*A representation of the meaning of the code in the system, following the rules of the system.
     */  "name": "display", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Indicates that this coding was chosen by a user directly - i.e. off a pick list of available items (codes or displays).
     */  "name": "userSelected", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
  ]
},
"Reference": {
    /*A reference from one resource to another.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "Reference",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with '#') refer to contained resources.
     */  "name": "reference", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Plain text narrative that identifies the resource in addition to the resource reference.
     */  "name": "display", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"Signature": {
    /*A digital signature along with supporting context. The signature may be electronic/cryptographic in nature, or a graphical image representing a hand-written signature, or a signature process. Different Signature approaches have different utilities.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "Signature",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document.
     */  "name": "type", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*When the digital signature was signed.
     */  "name": "when", 
    
      "min": "1", 
      "max": "1", 
      "type": "instant",
      "isPrimitive": true }, 
    [ /* Choice */ 
    /*A reference to an application-usable description of the person that signed the certificate (e.g. the signature used their private key).
     */
        {   "name": "whoUri", 
        
          "min": "1", 
          "max": "1", 
          "type": "uri",
          "isPrimitive": true }, 
        {   "name": "whoReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jwt for JWT, and image/* for a graphical image of a signature.
     */  "name": "contentType", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*The base64 encoding of the Signature content.
     */  "name": "blob", 
    
      "min": "1", 
      "max": "1", 
      "type": "base64Binary",
      "isPrimitive": true }, 
  ]
},
"SampledData": {
    /*A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "SampledData",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.
     */  "name": "origin", 
    
      "min": "1", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*The length of time between sampling times, measured in milliseconds.
     */  "name": "period", 
    
      "min": "1", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*A correction factor that is applied to the sampled data points before they are added to the origin.
     */  "name": "factor", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).
     */  "name": "lowerLimit", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).
     */  "name": "upperLimit", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.
     */  "name": "dimensions", 
    
      "min": "1", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*A series of data points which are decimal values separated by a single space (character u20). The special values "E" (error), "L" (below detection limit) and "U" (above detection limit) can also be used in place of a decimal value.
     */  "name": "data", 
    
      "min": "1", 
      "max": "1", 
      "type": "SampledDataDataType",
      "isPrimitive": true }, 
  ]
},
"SampledDataDataType": {
  "name": "SampledDataDataType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "SampledDataDataType-primitive" }, 
  ],
  "elems": [
  ]
},
"Quantity": {
    /*A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "Quantity",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The value of the measured amount. The value includes an implicit precision in the presentation of the value.
     */  "name": "value", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues. E.g. if the comparator is "<" , then the real value is < stated value.
     */  "name": "comparator", 
    
      "min": "0", 
      "max": "1", 
      "type": "QuantityComparator",
      "isPrimitive": true }, 
    { 
    /*A human-readable form of the unit.
     */  "name": "unit", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The identification of the system that provides the coded form of the unit.
     */  "name": "system", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*A computer processable form of the unit in some unit representation system.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
  ]
},
"QuantityComparator": {
    /*How the Quantity should be understood and representedIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "QuantityComparator",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "QuantityComparator-list" }, 
  ],
  "elems": [
  ]
},
"Period": {
    /*A time period defined by a start and end date and optionally time.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "Period",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The start of the period. The boundary is inclusive.
     */  "name": "start", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The end of the period. If the end of the period is missing, it means that the period is ongoing. The start mey be in the past, and the end date in the future, which means that period is expected/planned to end at that time.
     */  "name": "end", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
  ]
},
"Attachment": {
    /*For referring to data content defined in other formats.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "Attachment",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.
     */  "name": "contentType", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*The human language of the content. The value can be any valid value according to BCP 47.
     */  "name": "language", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*The actual data of the attachment - a sequence of bytes. In XML, represented using base64.
     */  "name": "data", 
    
      "min": "0", 
      "max": "1", 
      "type": "base64Binary",
      "isPrimitive": true }, 
    { 
    /*An alternative location where the data can be accessed.
     */  "name": "url", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*The number of bytes of data that make up this attachment.
     */  "name": "size", 
    
      "min": "0", 
      "max": "1", 
      "type": "unsignedInt",
      "isPrimitive": true }, 
    { 
    /*The calculated hash of the data using SHA-1. Represented using base64.
     */  "name": "hash", 
    
      "min": "0", 
      "max": "1", 
      "type": "base64Binary",
      "isPrimitive": true }, 
    { 
    /*A label or set of text to display in place of the data.
     */  "name": "title", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The date that the attachment was first created.
     */  "name": "creation", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
  ]
},
"Ratio": {
    /*A relationship of two Quantity values - expressed as a numerator and a denominator.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "Ratio",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The value of the numerator.
     */  "name": "numerator", 
    
      "min": "0", 
      "max": "1", 
      "type": "Quantity",
      "isPrimitive": false }, 
    { 
    /*The value of the denominator.
     */  "name": "denominator", 
    
      "min": "0", 
      "max": "1", 
      "type": "Quantity",
      "isPrimitive": false }, 
  ]
},
"Range": {
    /*A set of ordered Quantities defined by a low and high limit.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "Range",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The low limit. The boundary is inclusive.
     */  "name": "low", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*The high limit. The boundary is inclusive.
     */  "name": "high", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
  ]
},
"Annotation": {
    /*A  text note which also  contains information about who made the statement and when.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "Annotation",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    [ /* Choice */ 
    /*The individual responsible for making the annotation.
     */
        {   "name": "authorReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
        {   "name": "authorString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
    ], 
    { 
    /*Indicates when this particular annotation was made.
     */  "name": "time", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The text of the annotation.
     */  "name": "text", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"CodeableConcept": {
    /*A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "CodeableConcept",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A reference to a code defined by a terminology system.
     */  "name": "coding", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.
     */  "name": "text", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"Money": {
  "name": "Money",
  "attrs": [
    { 
      "name": "id", 
      "type": "id-primitive" }, 
  ],
  "elems": [
    { 
    /*Exception as inherited from Element
     */  "name": "extension", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Extension",
      "isPrimitive": false }, 
    { 
    /*The value of the measured amount. The value includes an implicit precision in the presentation of the value.
     */  "name": "value", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues. E.g. if the comparator is "<" , then the real value is < stated value.
     */  "name": "comparator", 
    
      "min": "0", 
      "max": "1", 
      "type": "QuantityComparator",
      "isPrimitive": true }, 
    { 
    /*A human-readable form of the unit.
     */  "name": "unit", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The identification of the system that provides the coded form of the unit.
     */  "name": "system", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*A computer processable form of the unit in some unit representation system.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
  ]
},
"SimpleQuantity": {
  "name": "SimpleQuantity",
  "attrs": [
    { 
      "name": "id", 
      "type": "id-primitive" }, 
  ],
  "elems": [
    { 
    /*Exception as inherited from Element
     */  "name": "extension", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Extension",
      "isPrimitive": false }, 
    { 
    /*The value of the measured amount. The value includes an implicit precision in the presentation of the value.
     */  "name": "value", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*Not allowed to be used in this context
     */  "name": "comparator", 
    
      "min": "0", 
      "max": "0", 
      "type": "QuantityComparator",
      "isPrimitive": true }, 
    { 
    /*A human-readable form of the unit.
     */  "name": "unit", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The identification of the system that provides the coded form of the unit.
     */  "name": "system", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*A computer processable form of the unit in some unit representation system.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
  ]
},
"Duration": {
  "name": "Duration",
  "attrs": [
    { 
      "name": "id", 
      "type": "id-primitive" }, 
  ],
  "elems": [
    { 
    /*Exception as inherited from Element
     */  "name": "extension", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Extension",
      "isPrimitive": false }, 
    { 
    /*The value of the measured amount. The value includes an implicit precision in the presentation of the value.
     */  "name": "value", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues. E.g. if the comparator is "<" , then the real value is < stated value.
     */  "name": "comparator", 
    
      "min": "0", 
      "max": "1", 
      "type": "QuantityComparator",
      "isPrimitive": true }, 
    { 
    /*A human-readable form of the unit.
     */  "name": "unit", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The identification of the system that provides the coded form of the unit.
     */  "name": "system", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*A computer processable form of the unit in some unit representation system.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
  ]
},
"Count": {
  "name": "Count",
  "attrs": [
    { 
      "name": "id", 
      "type": "id-primitive" }, 
  ],
  "elems": [
    { 
    /*Exception as inherited from Element
     */  "name": "extension", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Extension",
      "isPrimitive": false }, 
    { 
    /*The value of the measured amount. The value includes an implicit precision in the presentation of the value.
     */  "name": "value", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues. E.g. if the comparator is "<" , then the real value is < stated value.
     */  "name": "comparator", 
    
      "min": "0", 
      "max": "1", 
      "type": "QuantityComparator",
      "isPrimitive": true }, 
    { 
    /*A human-readable form of the unit.
     */  "name": "unit", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The identification of the system that provides the coded form of the unit.
     */  "name": "system", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*A computer processable form of the unit in some unit representation system.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
  ]
},
"Distance": {
  "name": "Distance",
  "attrs": [
    { 
      "name": "id", 
      "type": "id-primitive" }, 
  ],
  "elems": [
    { 
    /*Exception as inherited from Element
     */  "name": "extension", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Extension",
      "isPrimitive": false }, 
    { 
    /*The value of the measured amount. The value includes an implicit precision in the presentation of the value.
     */  "name": "value", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues. E.g. if the comparator is "<" , then the real value is < stated value.
     */  "name": "comparator", 
    
      "min": "0", 
      "max": "1", 
      "type": "QuantityComparator",
      "isPrimitive": true }, 
    { 
    /*A human-readable form of the unit.
     */  "name": "unit", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The identification of the system that provides the coded form of the unit.
     */  "name": "system", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*A computer processable form of the unit in some unit representation system.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
  ]
},
"Age": {
  "name": "Age",
  "attrs": [
    { 
      "name": "id", 
      "type": "id-primitive" }, 
  ],
  "elems": [
    { 
    /*Exception as inherited from Element
     */  "name": "extension", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Extension",
      "isPrimitive": false }, 
    { 
    /*The value of the measured amount. The value includes an implicit precision in the presentation of the value.
     */  "name": "value", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues. E.g. if the comparator is "<" , then the real value is < stated value.
     */  "name": "comparator", 
    
      "min": "0", 
      "max": "1", 
      "type": "QuantityComparator",
      "isPrimitive": true }, 
    { 
    /*A human-readable form of the unit.
     */  "name": "unit", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The identification of the system that provides the coded form of the unit.
     */  "name": "system", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*A computer processable form of the unit in some unit representation system.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
  ]
},
"HumanName": {
    /*A human's name with the ability to identify parts and usage.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "HumanName",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifies the purpose for this name.
     */  "name": "use", 
    
      "min": "0", 
      "max": "1", 
      "type": "NameUse",
      "isPrimitive": true }, 
    { 
    /*A full text representation of the name.
     */  "name": "text", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.
     */  "name": "family", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Given name.
     */  "name": "given", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
     */  "name": "prefix", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
     */  "name": "suffix", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Indicates the period of time when this name was valid for the named person.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
  ]
},
"NameUse": {
    /*The use of a human nameIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "NameUse",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "NameUse-list" }, 
  ],
  "elems": [
  ]
},
"ContactPoint": {
    /*Details for All kinds of technology mediated contact points for a person or organization, including telephone, email, etc.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "ContactPoint",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Telecommunications form for contact point - what communications system is required to make use of the contact.
     */  "name": "system", 
    
      "min": "0", 
      "max": "1", 
      "type": "ContactPointSystem",
      "isPrimitive": true }, 
    { 
    /*The actual contact point details, in a form that is meaningful to the designated communication system (i.e. phone number or email address).
     */  "name": "value", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Identifies the purpose for the contact point.
     */  "name": "use", 
    
      "min": "0", 
      "max": "1", 
      "type": "ContactPointUse",
      "isPrimitive": true }, 
    { 
    /*Specifies a preferred order in which to use a set of contacts. Contacts are ranked with lower values coming before higher values.
     */  "name": "rank", 
    
      "min": "0", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*Time period when the contact point was/is in use.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
  ]
},
"ContactPointSystem": {
    /*Telecommunications form for contact pointIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ContactPointSystem",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ContactPointSystem-list" }, 
  ],
  "elems": [
  ]
},
"ContactPointUse": {
    /*Use of contact pointIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ContactPointUse",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ContactPointUse-list" }, 
  ],
  "elems": [
  ]
},
"Meta": {
    /*The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "Meta",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The version specific identifier, as it appears in the version portion of the url. This values changes when the resource is created, updated, or deleted.
     */  "name": "versionId", 
    
      "min": "0", 
      "max": "1", 
      "type": "id",
      "isPrimitive": true }, 
    { 
    /*When the resource last changed - e.g. when the version changed.
     */  "name": "lastUpdated", 
    
      "min": "0", 
      "max": "1", 
      "type": "instant",
      "isPrimitive": true }, 
    { 
    /*A list of profiles [[[StructureDefinition]]]s that this resource claims to conform to. The URL is a reference to [[[StructureDefinition.url]]].
     */  "name": "profile", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure.
     */  "name": "security", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Tags applied to this resource. Tags are intended to to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.
     */  "name": "tag", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
  ]
},
"Address": {
    /*There is a variety of postal address formats defined around the world. This format defines a superset that is the basis for all addresses around the world.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "Address",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The purpose of this address.
     */  "name": "use", 
    
      "min": "0", 
      "max": "1", 
      "type": "AddressUse",
      "isPrimitive": true }, 
    { 
    /*Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "AddressType",
      "isPrimitive": true }, 
    { 
    /*A full text representation of the address.
     */  "name": "text", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
     */  "name": "line", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The name of the city, town, village or other community or delivery center.
     */  "name": "city", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The name of the administrative area (county).
     */  "name": "district", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (i.e. US 2 letter state codes).
     */  "name": "state", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A postal code designating a region defined by the postal service.
     */  "name": "postalCode", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Country - a nation as commonly understood or generally accepted.
     */  "name": "country", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Time period when address was/is in use.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
  ]
},
"AddressUse": {
    /*The use of an addressIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AddressUse",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "AddressUse-list" }, 
  ],
  "elems": [
  ]
},
"AddressType": {
    /*The type of an address (physical / postal)If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AddressType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "AddressType-list" }, 
  ],
  "elems": [
  ]
},
"Timing": {
    /*Specifies an event that may occur multiple times. Timing schedules are used to record when things are expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "Timing",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifies specific times when the event occurs.
     */  "name": "event", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*A set of rules that describe when the event should occur.
     */  "name": "repeat", 
    
      "min": "0", 
      "max": "1", 
      "type": "Timing.Repeat",
      "isPrimitive": false }, 
    { 
    /*A code for the timing pattern. Some codes such as BID are uniquitious, but many institutions define their own additional codes.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
  ]
},
"Timing.Repeat": {
    /*Specifies an event that may occur multiple times. Timing schedules are used to record when things are expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "Timing.Repeat",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    [ /* Choice */ 
    /*Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
        {   "name": "boundsQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "Duration",
          "isPrimitive": false }, 
        {   "name": "boundsRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
        {   "name": "boundsPeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
    ], 
    { 
    /*A total count of the desired number of repetitions.
     */  "name": "count", 
    
      "min": "0", 
      "max": "1", 
      "type": "integer",
      "isPrimitive": true }, 
    { 
    /*How long this thing happens for when it happens.
     */  "name": "duration", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*The upper limit of how long this thing happens for when it happens.
     */  "name": "durationMax", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*The units of time for the duration, in UCUM units.
     */  "name": "durationUnits", 
    
      "min": "0", 
      "max": "1", 
      "type": "UnitsOfTime",
      "isPrimitive": true }, 
    { 
    /*The number of times to repeat the action within the specified period / period range (i.e. both period and periodMax provided).
     */  "name": "frequency", 
    
      "min": "0", 
      "max": "1", 
      "type": "integer",
      "isPrimitive": true }, 
    { 
    /*If present, indicates that the frequency is a range - so repeat between [frequency] and [frequencyMax] times within the period or period range.
     */  "name": "frequencyMax", 
    
      "min": "0", 
      "max": "1", 
      "type": "integer",
      "isPrimitive": true }, 
    { 
    /*Indicates the duration of time over which repetitions are to occur.  E.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days.
     */  "name": "periodMax", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*The units of time for the period in UCUM units.
     */  "name": "periodUnits", 
    
      "min": "0", 
      "max": "1", 
      "type": "UnitsOfTime",
      "isPrimitive": true }, 
    { 
    /*A real world event that the occurrence of the event should be tied to.
     */  "name": "when", 
    
      "min": "0", 
      "max": "1", 
      "type": "EventTiming",
      "isPrimitive": true }, 
  ]
},
"UnitsOfTime": {
    /*A unit of time (units from UCUM)If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "UnitsOfTime",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "UnitsOfTime-list" }, 
  ],
  "elems": [
  ]
},
"EventTiming": {
    /*Real world event that the schedule relates toIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "EventTiming",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "EventTiming-list" }, 
  ],
  "elems": [
  ]
},
"ElementDefinition": {
    /*Captures constraints on each element within the resource, profile, or extension.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "ElementDefinition",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The path identifies the element and is expressed as a "."-separated list of ancestor elements, beginning with the name of the resource or extension.
     */  "name": "path", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Codes that define how this element is represented in instances, when the deviation varies from the normal case.
     */  "name": "representation", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "PropertyRepresentation",
      "isPrimitive": true }, 
    { 
    /*The name of this element definition (to refer to it from other element definitions using ElementDefinition.nameReference). This is a unique name referring to a specific set of constraints applied to this element. One use of this is to provide a name to different slices of the same element.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The text to display beside the element indicating its meaning or to use to prompt for the element in a user display or form.
     */  "name": "label", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A code that provides the meaning for the element according to a particular terminology.
     */  "name": "code", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Indicates that the element is sliced into a set of alternative definitions (i.e. in a structure definition, there are multiple different constraints on a single element in the base resource). Slicing can be used in any resource that has cardinality ..* on the base resource, or any resource with a choice of types. The set of slices is any elements that come after this in the element sequence that have the same path, until a shorter path occurs (the shorter path terminates the set).
     */  "name": "slicing", 
    
      "min": "0", 
      "max": "1", 
      "type": "ElementDefinition.Slicing",
      "isPrimitive": false }, 
    { 
    /*A concise description of what this element means (e.g. for use in auto-generated summaries).
     */  "name": "short", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Provides a complete explanation of the meaning of the data element for human readability.  For the case of elements derived from existing elements (e.g. constraints), the definition SHALL be consistent with the base definition, but convey the meaning of the element in the particular context of use of the resource.
     */  "name": "definition", 
    
      "min": "0", 
      "max": "1", 
      "type": "markdown",
      "isPrimitive": true }, 
    { 
    /*Explanatory notes and implementation guidance about the data element, including notes about how to use the data properly, exceptions to proper use, etc.
     */  "name": "comments", 
    
      "min": "0", 
      "max": "1", 
      "type": "markdown",
      "isPrimitive": true }, 
    { 
    /*This element is for traceability of why the element was created and why the constraints exist as they do. This may be used to point to source materials or specifications that drove the structure of this element.
     */  "name": "requirements", 
    
      "min": "0", 
      "max": "1", 
      "type": "markdown",
      "isPrimitive": true }, 
    { 
    /*Identifies additional names by which this element might also be known.
     */  "name": "alias", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The minimum number of times this element SHALL appear in the instance.
     */  "name": "min", 
    
      "min": "0", 
      "max": "1", 
      "type": "integer",
      "isPrimitive": true }, 
    { 
    /*The maximum number of times this element is permitted to appear in the instance.
     */  "name": "max", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Information about the base definition of the element, provided to make it unncessary for tools to trace the derviation of the element through the derived and related profiles. This information is only provided where the element definition represents a constraint on another element definition, and must be present if there is a base element definition.
     */  "name": "base", 
    
      "min": "0", 
      "max": "1", 
      "type": "ElementDefinition.Base",
      "isPrimitive": false }, 
    { 
    /*The data type or resource that the value of this element is permitted to be.
     */  "name": "type", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ElementDefinition.Type",
      "isPrimitive": false }, 
    { 
    /*Identifies the name of a slice defined elsewhere in the profile whose constraints should be applied to the current element.
     */  "name": "nameReference", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    [ /* Choice */ 
    /*The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
        {   "name": "defaultValueBoolean", 
        
          "min": "1", 
          "max": "1", 
          "type": "boolean",
          "isPrimitive": true }, 
        {   "name": "defaultValueInteger", 
        
          "min": "1", 
          "max": "1", 
          "type": "integer",
          "isPrimitive": true }, 
        {   "name": "defaultValueDecimal", 
        
          "min": "1", 
          "max": "1", 
          "type": "decimal",
          "isPrimitive": true }, 
        {   "name": "defaultValueBase64Binary", 
        
          "min": "1", 
          "max": "1", 
          "type": "base64Binary",
          "isPrimitive": true }, 
        {   "name": "defaultValueInstant", 
        
          "min": "1", 
          "max": "1", 
          "type": "instant",
          "isPrimitive": true }, 
        {   "name": "defaultValueString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
        {   "name": "defaultValueUri", 
        
          "min": "1", 
          "max": "1", 
          "type": "uri",
          "isPrimitive": true }, 
        {   "name": "defaultValueDate", 
        
          "min": "1", 
          "max": "1", 
          "type": "date",
          "isPrimitive": true }, 
        {   "name": "defaultValueDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "defaultValueTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "time",
          "isPrimitive": true }, 
        {   "name": "defaultValueCode", 
        
          "min": "1", 
          "max": "1", 
          "type": "code",
          "isPrimitive": true }, 
        {   "name": "defaultValueOid", 
        
          "min": "1", 
          "max": "1", 
          "type": "oid",
          "isPrimitive": true }, 
        {   "name": "defaultValueUuid", 
        
          "min": "1", 
          "max": "1", 
          "type": "uuid",
          "isPrimitive": true }, 
        {   "name": "defaultValueId", 
        
          "min": "1", 
          "max": "1", 
          "type": "id",
          "isPrimitive": true }, 
        {   "name": "defaultValueUnsignedInt", 
        
          "min": "1", 
          "max": "1", 
          "type": "unsignedInt",
          "isPrimitive": true }, 
        {   "name": "defaultValuePositiveInt", 
        
          "min": "1", 
          "max": "1", 
          "type": "positiveInt",
          "isPrimitive": true }, 
        {   "name": "defaultValueMarkdown", 
        
          "min": "1", 
          "max": "1", 
          "type": "markdown",
          "isPrimitive": true }, 
        {   "name": "defaultValueAnnotation", 
        
          "min": "1", 
          "max": "1", 
          "type": "Annotation",
          "isPrimitive": false }, 
        {   "name": "defaultValueAttachment", 
        
          "min": "1", 
          "max": "1", 
          "type": "Attachment",
          "isPrimitive": false }, 
        {   "name": "defaultValueIdentifier", 
        
          "min": "1", 
          "max": "1", 
          "type": "Identifier",
          "isPrimitive": false }, 
        {   "name": "defaultValueCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "defaultValueCoding", 
        
          "min": "1", 
          "max": "1", 
          "type": "Coding",
          "isPrimitive": false }, 
        {   "name": "defaultValueQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "Quantity",
          "isPrimitive": false }, 
        {   "name": "defaultValueRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
        {   "name": "defaultValuePeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
        {   "name": "defaultValueRatio", 
        
          "min": "1", 
          "max": "1", 
          "type": "Ratio",
          "isPrimitive": false }, 
        {   "name": "defaultValueReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
        {   "name": "defaultValueSampledData", 
        
          "min": "1", 
          "max": "1", 
          "type": "SampledData",
          "isPrimitive": false }, 
        {   "name": "defaultValueSignature", 
        
          "min": "1", 
          "max": "1", 
          "type": "Signature",
          "isPrimitive": false }, 
        {   "name": "defaultValueHumanName", 
        
          "min": "1", 
          "max": "1", 
          "type": "HumanName",
          "isPrimitive": false }, 
        {   "name": "defaultValueAddress", 
        
          "min": "1", 
          "max": "1", 
          "type": "Address",
          "isPrimitive": false }, 
        {   "name": "defaultValueContactPoint", 
        
          "min": "1", 
          "max": "1", 
          "type": "ContactPoint",
          "isPrimitive": false }, 
        {   "name": "defaultValueTiming", 
        
          "min": "1", 
          "max": "1", 
          "type": "Timing",
          "isPrimitive": false }, 
        {   "name": "defaultValueMeta", 
        
          "min": "1", 
          "max": "1", 
          "type": "Meta",
          "isPrimitive": false }, 
    ], 
    { 
    /*The Implicit meaning that is to be understood when this element is missing (e.g. 'when this element is missing, the period is ongoing'.
     */  "name": "meaningWhenMissing", 
    
      "min": "0", 
      "max": "1", 
      "type": "markdown",
      "isPrimitive": true }, 
    [ /* Choice */ 
    /*Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-signficant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
        {   "name": "fixedBoolean", 
        
          "min": "1", 
          "max": "1", 
          "type": "boolean",
          "isPrimitive": true }, 
        {   "name": "fixedInteger", 
        
          "min": "1", 
          "max": "1", 
          "type": "integer",
          "isPrimitive": true }, 
        {   "name": "fixedDecimal", 
        
          "min": "1", 
          "max": "1", 
          "type": "decimal",
          "isPrimitive": true }, 
        {   "name": "fixedBase64Binary", 
        
          "min": "1", 
          "max": "1", 
          "type": "base64Binary",
          "isPrimitive": true }, 
        {   "name": "fixedInstant", 
        
          "min": "1", 
          "max": "1", 
          "type": "instant",
          "isPrimitive": true }, 
        {   "name": "fixedString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
        {   "name": "fixedUri", 
        
          "min": "1", 
          "max": "1", 
          "type": "uri",
          "isPrimitive": true }, 
        {   "name": "fixedDate", 
        
          "min": "1", 
          "max": "1", 
          "type": "date",
          "isPrimitive": true }, 
        {   "name": "fixedDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "fixedTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "time",
          "isPrimitive": true }, 
        {   "name": "fixedCode", 
        
          "min": "1", 
          "max": "1", 
          "type": "code",
          "isPrimitive": true }, 
        {   "name": "fixedOid", 
        
          "min": "1", 
          "max": "1", 
          "type": "oid",
          "isPrimitive": true }, 
        {   "name": "fixedUuid", 
        
          "min": "1", 
          "max": "1", 
          "type": "uuid",
          "isPrimitive": true }, 
        {   "name": "fixedId", 
        
          "min": "1", 
          "max": "1", 
          "type": "id",
          "isPrimitive": true }, 
        {   "name": "fixedUnsignedInt", 
        
          "min": "1", 
          "max": "1", 
          "type": "unsignedInt",
          "isPrimitive": true }, 
        {   "name": "fixedPositiveInt", 
        
          "min": "1", 
          "max": "1", 
          "type": "positiveInt",
          "isPrimitive": true }, 
        {   "name": "fixedMarkdown", 
        
          "min": "1", 
          "max": "1", 
          "type": "markdown",
          "isPrimitive": true }, 
        {   "name": "fixedAnnotation", 
        
          "min": "1", 
          "max": "1", 
          "type": "Annotation",
          "isPrimitive": false }, 
        {   "name": "fixedAttachment", 
        
          "min": "1", 
          "max": "1", 
          "type": "Attachment",
          "isPrimitive": false }, 
        {   "name": "fixedIdentifier", 
        
          "min": "1", 
          "max": "1", 
          "type": "Identifier",
          "isPrimitive": false }, 
        {   "name": "fixedCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "fixedCoding", 
        
          "min": "1", 
          "max": "1", 
          "type": "Coding",
          "isPrimitive": false }, 
        {   "name": "fixedQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "Quantity",
          "isPrimitive": false }, 
        {   "name": "fixedRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
        {   "name": "fixedPeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
        {   "name": "fixedRatio", 
        
          "min": "1", 
          "max": "1", 
          "type": "Ratio",
          "isPrimitive": false }, 
        {   "name": "fixedReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
        {   "name": "fixedSampledData", 
        
          "min": "1", 
          "max": "1", 
          "type": "SampledData",
          "isPrimitive": false }, 
        {   "name": "fixedSignature", 
        
          "min": "1", 
          "max": "1", 
          "type": "Signature",
          "isPrimitive": false }, 
        {   "name": "fixedHumanName", 
        
          "min": "1", 
          "max": "1", 
          "type": "HumanName",
          "isPrimitive": false }, 
        {   "name": "fixedAddress", 
        
          "min": "1", 
          "max": "1", 
          "type": "Address",
          "isPrimitive": false }, 
        {   "name": "fixedContactPoint", 
        
          "min": "1", 
          "max": "1", 
          "type": "ContactPoint",
          "isPrimitive": false }, 
        {   "name": "fixedTiming", 
        
          "min": "1", 
          "max": "1", 
          "type": "Timing",
          "isPrimitive": false }, 
        {   "name": "fixedMeta", 
        
          "min": "1", 
          "max": "1", 
          "type": "Meta",
          "isPrimitive": false }, 
    ], 
    [ /* Choice */ 
    /*Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-senstive, accent-sensitive, etc.).
     */
        {   "name": "patternBoolean", 
        
          "min": "1", 
          "max": "1", 
          "type": "boolean",
          "isPrimitive": true }, 
        {   "name": "patternInteger", 
        
          "min": "1", 
          "max": "1", 
          "type": "integer",
          "isPrimitive": true }, 
        {   "name": "patternDecimal", 
        
          "min": "1", 
          "max": "1", 
          "type": "decimal",
          "isPrimitive": true }, 
        {   "name": "patternBase64Binary", 
        
          "min": "1", 
          "max": "1", 
          "type": "base64Binary",
          "isPrimitive": true }, 
        {   "name": "patternInstant", 
        
          "min": "1", 
          "max": "1", 
          "type": "instant",
          "isPrimitive": true }, 
        {   "name": "patternString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
        {   "name": "patternUri", 
        
          "min": "1", 
          "max": "1", 
          "type": "uri",
          "isPrimitive": true }, 
        {   "name": "patternDate", 
        
          "min": "1", 
          "max": "1", 
          "type": "date",
          "isPrimitive": true }, 
        {   "name": "patternDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "patternTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "time",
          "isPrimitive": true }, 
        {   "name": "patternCode", 
        
          "min": "1", 
          "max": "1", 
          "type": "code",
          "isPrimitive": true }, 
        {   "name": "patternOid", 
        
          "min": "1", 
          "max": "1", 
          "type": "oid",
          "isPrimitive": true }, 
        {   "name": "patternUuid", 
        
          "min": "1", 
          "max": "1", 
          "type": "uuid",
          "isPrimitive": true }, 
        {   "name": "patternId", 
        
          "min": "1", 
          "max": "1", 
          "type": "id",
          "isPrimitive": true }, 
        {   "name": "patternUnsignedInt", 
        
          "min": "1", 
          "max": "1", 
          "type": "unsignedInt",
          "isPrimitive": true }, 
        {   "name": "patternPositiveInt", 
        
          "min": "1", 
          "max": "1", 
          "type": "positiveInt",
          "isPrimitive": true }, 
        {   "name": "patternMarkdown", 
        
          "min": "1", 
          "max": "1", 
          "type": "markdown",
          "isPrimitive": true }, 
        {   "name": "patternAnnotation", 
        
          "min": "1", 
          "max": "1", 
          "type": "Annotation",
          "isPrimitive": false }, 
        {   "name": "patternAttachment", 
        
          "min": "1", 
          "max": "1", 
          "type": "Attachment",
          "isPrimitive": false }, 
        {   "name": "patternIdentifier", 
        
          "min": "1", 
          "max": "1", 
          "type": "Identifier",
          "isPrimitive": false }, 
        {   "name": "patternCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "patternCoding", 
        
          "min": "1", 
          "max": "1", 
          "type": "Coding",
          "isPrimitive": false }, 
        {   "name": "patternQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "Quantity",
          "isPrimitive": false }, 
        {   "name": "patternRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
        {   "name": "patternPeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
        {   "name": "patternRatio", 
        
          "min": "1", 
          "max": "1", 
          "type": "Ratio",
          "isPrimitive": false }, 
        {   "name": "patternReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
        {   "name": "patternSampledData", 
        
          "min": "1", 
          "max": "1", 
          "type": "SampledData",
          "isPrimitive": false }, 
        {   "name": "patternSignature", 
        
          "min": "1", 
          "max": "1", 
          "type": "Signature",
          "isPrimitive": false }, 
        {   "name": "patternHumanName", 
        
          "min": "1", 
          "max": "1", 
          "type": "HumanName",
          "isPrimitive": false }, 
        {   "name": "patternAddress", 
        
          "min": "1", 
          "max": "1", 
          "type": "Address",
          "isPrimitive": false }, 
        {   "name": "patternContactPoint", 
        
          "min": "1", 
          "max": "1", 
          "type": "ContactPoint",
          "isPrimitive": false }, 
        {   "name": "patternTiming", 
        
          "min": "1", 
          "max": "1", 
          "type": "Timing",
          "isPrimitive": false }, 
        {   "name": "patternMeta", 
        
          "min": "1", 
          "max": "1", 
          "type": "Meta",
          "isPrimitive": false }, 
    ], 
    [ /* Choice */ 
    /*A sample value for this element demonstrating the type of information that would typically be captured.
     */
        {   "name": "exampleBoolean", 
        
          "min": "1", 
          "max": "1", 
          "type": "boolean",
          "isPrimitive": true }, 
        {   "name": "exampleInteger", 
        
          "min": "1", 
          "max": "1", 
          "type": "integer",
          "isPrimitive": true }, 
        {   "name": "exampleDecimal", 
        
          "min": "1", 
          "max": "1", 
          "type": "decimal",
          "isPrimitive": true }, 
        {   "name": "exampleBase64Binary", 
        
          "min": "1", 
          "max": "1", 
          "type": "base64Binary",
          "isPrimitive": true }, 
        {   "name": "exampleInstant", 
        
          "min": "1", 
          "max": "1", 
          "type": "instant",
          "isPrimitive": true }, 
        {   "name": "exampleString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
        {   "name": "exampleUri", 
        
          "min": "1", 
          "max": "1", 
          "type": "uri",
          "isPrimitive": true }, 
        {   "name": "exampleDate", 
        
          "min": "1", 
          "max": "1", 
          "type": "date",
          "isPrimitive": true }, 
        {   "name": "exampleDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "exampleTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "time",
          "isPrimitive": true }, 
        {   "name": "exampleCode", 
        
          "min": "1", 
          "max": "1", 
          "type": "code",
          "isPrimitive": true }, 
        {   "name": "exampleOid", 
        
          "min": "1", 
          "max": "1", 
          "type": "oid",
          "isPrimitive": true }, 
        {   "name": "exampleUuid", 
        
          "min": "1", 
          "max": "1", 
          "type": "uuid",
          "isPrimitive": true }, 
        {   "name": "exampleId", 
        
          "min": "1", 
          "max": "1", 
          "type": "id",
          "isPrimitive": true }, 
        {   "name": "exampleUnsignedInt", 
        
          "min": "1", 
          "max": "1", 
          "type": "unsignedInt",
          "isPrimitive": true }, 
        {   "name": "examplePositiveInt", 
        
          "min": "1", 
          "max": "1", 
          "type": "positiveInt",
          "isPrimitive": true }, 
        {   "name": "exampleMarkdown", 
        
          "min": "1", 
          "max": "1", 
          "type": "markdown",
          "isPrimitive": true }, 
        {   "name": "exampleAnnotation", 
        
          "min": "1", 
          "max": "1", 
          "type": "Annotation",
          "isPrimitive": false }, 
        {   "name": "exampleAttachment", 
        
          "min": "1", 
          "max": "1", 
          "type": "Attachment",
          "isPrimitive": false }, 
        {   "name": "exampleIdentifier", 
        
          "min": "1", 
          "max": "1", 
          "type": "Identifier",
          "isPrimitive": false }, 
        {   "name": "exampleCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "exampleCoding", 
        
          "min": "1", 
          "max": "1", 
          "type": "Coding",
          "isPrimitive": false }, 
        {   "name": "exampleQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "Quantity",
          "isPrimitive": false }, 
        {   "name": "exampleRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
        {   "name": "examplePeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
        {   "name": "exampleRatio", 
        
          "min": "1", 
          "max": "1", 
          "type": "Ratio",
          "isPrimitive": false }, 
        {   "name": "exampleReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
        {   "name": "exampleSampledData", 
        
          "min": "1", 
          "max": "1", 
          "type": "SampledData",
          "isPrimitive": false }, 
        {   "name": "exampleSignature", 
        
          "min": "1", 
          "max": "1", 
          "type": "Signature",
          "isPrimitive": false }, 
        {   "name": "exampleHumanName", 
        
          "min": "1", 
          "max": "1", 
          "type": "HumanName",
          "isPrimitive": false }, 
        {   "name": "exampleAddress", 
        
          "min": "1", 
          "max": "1", 
          "type": "Address",
          "isPrimitive": false }, 
        {   "name": "exampleContactPoint", 
        
          "min": "1", 
          "max": "1", 
          "type": "ContactPoint",
          "isPrimitive": false }, 
        {   "name": "exampleTiming", 
        
          "min": "1", 
          "max": "1", 
          "type": "Timing",
          "isPrimitive": false }, 
        {   "name": "exampleMeta", 
        
          "min": "1", 
          "max": "1", 
          "type": "Meta",
          "isPrimitive": false }, 
    ], 
    [ /* Choice */ 
    /*The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
        {   "name": "minValueBoolean", 
        
          "min": "1", 
          "max": "1", 
          "type": "boolean",
          "isPrimitive": true }, 
        {   "name": "minValueInteger", 
        
          "min": "1", 
          "max": "1", 
          "type": "integer",
          "isPrimitive": true }, 
        {   "name": "minValueDecimal", 
        
          "min": "1", 
          "max": "1", 
          "type": "decimal",
          "isPrimitive": true }, 
        {   "name": "minValueBase64Binary", 
        
          "min": "1", 
          "max": "1", 
          "type": "base64Binary",
          "isPrimitive": true }, 
        {   "name": "minValueInstant", 
        
          "min": "1", 
          "max": "1", 
          "type": "instant",
          "isPrimitive": true }, 
        {   "name": "minValueString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
        {   "name": "minValueUri", 
        
          "min": "1", 
          "max": "1", 
          "type": "uri",
          "isPrimitive": true }, 
        {   "name": "minValueDate", 
        
          "min": "1", 
          "max": "1", 
          "type": "date",
          "isPrimitive": true }, 
        {   "name": "minValueDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "minValueTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "time",
          "isPrimitive": true }, 
        {   "name": "minValueCode", 
        
          "min": "1", 
          "max": "1", 
          "type": "code",
          "isPrimitive": true }, 
        {   "name": "minValueOid", 
        
          "min": "1", 
          "max": "1", 
          "type": "oid",
          "isPrimitive": true }, 
        {   "name": "minValueUuid", 
        
          "min": "1", 
          "max": "1", 
          "type": "uuid",
          "isPrimitive": true }, 
        {   "name": "minValueId", 
        
          "min": "1", 
          "max": "1", 
          "type": "id",
          "isPrimitive": true }, 
        {   "name": "minValueUnsignedInt", 
        
          "min": "1", 
          "max": "1", 
          "type": "unsignedInt",
          "isPrimitive": true }, 
        {   "name": "minValuePositiveInt", 
        
          "min": "1", 
          "max": "1", 
          "type": "positiveInt",
          "isPrimitive": true }, 
        {   "name": "minValueMarkdown", 
        
          "min": "1", 
          "max": "1", 
          "type": "markdown",
          "isPrimitive": true }, 
        {   "name": "minValueAnnotation", 
        
          "min": "1", 
          "max": "1", 
          "type": "Annotation",
          "isPrimitive": false }, 
        {   "name": "minValueAttachment", 
        
          "min": "1", 
          "max": "1", 
          "type": "Attachment",
          "isPrimitive": false }, 
        {   "name": "minValueIdentifier", 
        
          "min": "1", 
          "max": "1", 
          "type": "Identifier",
          "isPrimitive": false }, 
        {   "name": "minValueCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "minValueCoding", 
        
          "min": "1", 
          "max": "1", 
          "type": "Coding",
          "isPrimitive": false }, 
        {   "name": "minValueQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "Quantity",
          "isPrimitive": false }, 
        {   "name": "minValueRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
        {   "name": "minValuePeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
        {   "name": "minValueRatio", 
        
          "min": "1", 
          "max": "1", 
          "type": "Ratio",
          "isPrimitive": false }, 
        {   "name": "minValueReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
        {   "name": "minValueSampledData", 
        
          "min": "1", 
          "max": "1", 
          "type": "SampledData",
          "isPrimitive": false }, 
        {   "name": "minValueSignature", 
        
          "min": "1", 
          "max": "1", 
          "type": "Signature",
          "isPrimitive": false }, 
        {   "name": "minValueHumanName", 
        
          "min": "1", 
          "max": "1", 
          "type": "HumanName",
          "isPrimitive": false }, 
        {   "name": "minValueAddress", 
        
          "min": "1", 
          "max": "1", 
          "type": "Address",
          "isPrimitive": false }, 
        {   "name": "minValueContactPoint", 
        
          "min": "1", 
          "max": "1", 
          "type": "ContactPoint",
          "isPrimitive": false }, 
        {   "name": "minValueTiming", 
        
          "min": "1", 
          "max": "1", 
          "type": "Timing",
          "isPrimitive": false }, 
        {   "name": "minValueMeta", 
        
          "min": "1", 
          "max": "1", 
          "type": "Meta",
          "isPrimitive": false }, 
    ], 
    [ /* Choice */ 
    /*The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
        {   "name": "maxValueBoolean", 
        
          "min": "1", 
          "max": "1", 
          "type": "boolean",
          "isPrimitive": true }, 
        {   "name": "maxValueInteger", 
        
          "min": "1", 
          "max": "1", 
          "type": "integer",
          "isPrimitive": true }, 
        {   "name": "maxValueDecimal", 
        
          "min": "1", 
          "max": "1", 
          "type": "decimal",
          "isPrimitive": true }, 
        {   "name": "maxValueBase64Binary", 
        
          "min": "1", 
          "max": "1", 
          "type": "base64Binary",
          "isPrimitive": true }, 
        {   "name": "maxValueInstant", 
        
          "min": "1", 
          "max": "1", 
          "type": "instant",
          "isPrimitive": true }, 
        {   "name": "maxValueString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
        {   "name": "maxValueUri", 
        
          "min": "1", 
          "max": "1", 
          "type": "uri",
          "isPrimitive": true }, 
        {   "name": "maxValueDate", 
        
          "min": "1", 
          "max": "1", 
          "type": "date",
          "isPrimitive": true }, 
        {   "name": "maxValueDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "maxValueTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "time",
          "isPrimitive": true }, 
        {   "name": "maxValueCode", 
        
          "min": "1", 
          "max": "1", 
          "type": "code",
          "isPrimitive": true }, 
        {   "name": "maxValueOid", 
        
          "min": "1", 
          "max": "1", 
          "type": "oid",
          "isPrimitive": true }, 
        {   "name": "maxValueUuid", 
        
          "min": "1", 
          "max": "1", 
          "type": "uuid",
          "isPrimitive": true }, 
        {   "name": "maxValueId", 
        
          "min": "1", 
          "max": "1", 
          "type": "id",
          "isPrimitive": true }, 
        {   "name": "maxValueUnsignedInt", 
        
          "min": "1", 
          "max": "1", 
          "type": "unsignedInt",
          "isPrimitive": true }, 
        {   "name": "maxValuePositiveInt", 
        
          "min": "1", 
          "max": "1", 
          "type": "positiveInt",
          "isPrimitive": true }, 
        {   "name": "maxValueMarkdown", 
        
          "min": "1", 
          "max": "1", 
          "type": "markdown",
          "isPrimitive": true }, 
        {   "name": "maxValueAnnotation", 
        
          "min": "1", 
          "max": "1", 
          "type": "Annotation",
          "isPrimitive": false }, 
        {   "name": "maxValueAttachment", 
        
          "min": "1", 
          "max": "1", 
          "type": "Attachment",
          "isPrimitive": false }, 
        {   "name": "maxValueIdentifier", 
        
          "min": "1", 
          "max": "1", 
          "type": "Identifier",
          "isPrimitive": false }, 
        {   "name": "maxValueCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "maxValueCoding", 
        
          "min": "1", 
          "max": "1", 
          "type": "Coding",
          "isPrimitive": false }, 
        {   "name": "maxValueQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "Quantity",
          "isPrimitive": false }, 
        {   "name": "maxValueRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
        {   "name": "maxValuePeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
        {   "name": "maxValueRatio", 
        
          "min": "1", 
          "max": "1", 
          "type": "Ratio",
          "isPrimitive": false }, 
        {   "name": "maxValueReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
        {   "name": "maxValueSampledData", 
        
          "min": "1", 
          "max": "1", 
          "type": "SampledData",
          "isPrimitive": false }, 
        {   "name": "maxValueSignature", 
        
          "min": "1", 
          "max": "1", 
          "type": "Signature",
          "isPrimitive": false }, 
        {   "name": "maxValueHumanName", 
        
          "min": "1", 
          "max": "1", 
          "type": "HumanName",
          "isPrimitive": false }, 
        {   "name": "maxValueAddress", 
        
          "min": "1", 
          "max": "1", 
          "type": "Address",
          "isPrimitive": false }, 
        {   "name": "maxValueContactPoint", 
        
          "min": "1", 
          "max": "1", 
          "type": "ContactPoint",
          "isPrimitive": false }, 
        {   "name": "maxValueTiming", 
        
          "min": "1", 
          "max": "1", 
          "type": "Timing",
          "isPrimitive": false }, 
        {   "name": "maxValueMeta", 
        
          "min": "1", 
          "max": "1", 
          "type": "Meta",
          "isPrimitive": false }, 
    ], 
    { 
    /*Indicates the maximum length in characters that is permitted to be present in conformant instances and which is expected to be supported by conformant consumers that support the element.
     */  "name": "maxLength", 
    
      "min": "0", 
      "max": "1", 
      "type": "integer",
      "isPrimitive": true }, 
    { 
    /*A reference to an invariant that may make additional statements about the cardinality or value in the instance.
     */  "name": "condition", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "id",
      "isPrimitive": true }, 
    { 
    /*Formal constraints such as co-occurrence and other constraints that can be computationally evaluated within the context of the instance.
     */  "name": "constraint", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ElementDefinition.Constraint",
      "isPrimitive": false }, 
    { 
    /*If true, implementations that produce or consume resources SHALL provide "support" for the element in some meaningful way.  If false, the element may be ignored and not supported.
     */  "name": "mustSupport", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*If true, the value of this element affects the interpretation of the element or resource that contains it, and the value of the element cannot be ignored. Typically, this is used for status, negation and qualification codes. The effect of this is that the element cannot be ignored by systems: they SHALL either recognize the element and process it, and/or a pre-determination has been made that it is not relevant to their particular system.
     */  "name": "isModifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Whether the element should be included if a client requests a search with the parameter _summary=true.
     */  "name": "isSummary", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Binds to a value set if this element is coded (code, Coding, CodeableConcept).
     */  "name": "binding", 
    
      "min": "0", 
      "max": "1", 
      "type": "ElementDefinition.Binding",
      "isPrimitive": false }, 
    { 
    /*Identifies a concept from an external specification that roughly corresponds to this element.
     */  "name": "mapping", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ElementDefinition.Mapping",
      "isPrimitive": false }, 
  ]
},
"ElementDefinition.Constraint": {
    /*Captures constraints on each element within the resource, profile, or extension.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "ElementDefinition.Constraint",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.
     */  "name": "key", 
    
      "min": "1", 
      "max": "1", 
      "type": "id",
      "isPrimitive": true }, 
    { 
    /*Description of why this constraint is necessary or appropriate.
     */  "name": "requirements", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Identifies the impact constraint violation has on the conformance of the instance.
     */  "name": "severity", 
    
      "min": "1", 
      "max": "1", 
      "type": "ConstraintSeverity",
      "isPrimitive": true }, 
    { 
    /*Text that can be used to describe the constraint in messages identifying that the constraint has been violated.
     */  "name": "human", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*An XPath expression of constraint that can be executed to see if this constraint is met.
     */  "name": "xpath", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"ElementDefinition.Mapping": {
    /*Captures constraints on each element within the resource, profile, or extension.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "ElementDefinition.Mapping",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An internal reference to the definition of a mapping.
     */  "name": "identity", 
    
      "min": "1", 
      "max": "1", 
      "type": "id",
      "isPrimitive": true }, 
    { 
    /*Identifies the computable language in which mapping.map is expressed.
     */  "name": "language", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*Expresses what part of the target specification corresponds to this element.
     */  "name": "map", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"ElementDefinition.Base": {
    /*Captures constraints on each element within the resource, profile, or extension.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "ElementDefinition.Base",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [[[StructureDefinition]]] without a StructureDefinition.base.
     */  "name": "path", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Minimum cardinality of the base element identified by the path.
     */  "name": "min", 
    
      "min": "1", 
      "max": "1", 
      "type": "integer",
      "isPrimitive": true }, 
    { 
    /*Maximum cardinality of the base element identified by the path.
     */  "name": "max", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"ElementDefinition.Type": {
    /*Captures constraints on each element within the resource, profile, or extension.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "ElementDefinition.Type",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Name of Data type or Resource that is a(or the) type used for this element.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*Identifies a profile structure or implementation Guide that SHALL hold for resources or datatypes referenced as the type of this element. Can be a local reference - to another structure in this profile, or a reference to a structure in another profile. When more than one profile is specified, the content must conform to all of them. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.
     */  "name": "profile", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*If the type is a reference to another resource, how the resource is or can be aggreated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.
     */  "name": "aggregation", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "AggregationMode",
      "isPrimitive": true }, 
  ]
},
"ElementDefinition.Slicing": {
    /*Captures constraints on each element within the resource, profile, or extension.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "ElementDefinition.Slicing",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Designates which child elements are used to discriminate between the slices when processing an instance. If one or more discriminators are provided, the value of the child elements in the instance data SHALL completely distinguish which slice the element in the resource matches based on the allowed values for those elements in each of the slices.
     */  "name": "discriminator", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A human-readable text description of how the slicing works. If there is no discriminator, this is required to be present to provide whatever information is possible about how the slices can be differentiated.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*If the matching elements have to occur in the same order as defined in the profile.
     */  "name": "ordered", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Whether additional slices are allowed or not. When the slices are ordered, profile authors can also say that additional slices are only allowed at the end.
     */  "name": "rules", 
    
      "min": "1", 
      "max": "1", 
      "type": "SlicingRules",
      "isPrimitive": true }, 
  ]
},
"ElementDefinition.Binding": {
    /*Captures constraints on each element within the resource, profile, or extension.If the element is present, it must have a value for at least one of the defined elements, an @id referenced from the Narrative, or extensions
     */
  "name": "ElementDefinition.Binding",
  "base": "Element", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
     */  "name": "strength", 
    
      "min": "1", 
      "max": "1", 
      "type": "BindingStrength",
      "isPrimitive": true }, 
    { 
    /*Describes the intended use of this particular set of codes.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    [ /* Choice */ 
    /*Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
     */
        {   "name": "valueSetUri", 
        
          "min": "1", 
          "max": "1", 
          "type": "uri",
          "isPrimitive": true }, 
        {   "name": "valueSetReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
  ]
},
"PropertyRepresentation": {
    /*How a property is represented on the wireIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "PropertyRepresentation",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "PropertyRepresentation-list" }, 
  ],
  "elems": [
  ]
},
"ConstraintSeverity": {
    /*SHALL applications comply with this constraint?If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ConstraintSeverity",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ConstraintSeverity-list" }, 
  ],
  "elems": [
  ]
},
"AggregationMode": {
    /*How resource references can be aggregatedIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AggregationMode",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "AggregationMode-list" }, 
  ],
  "elems": [
  ]
},
"SlicingRules": {
    /*How slices are interpreted when evaluating an instanceIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "SlicingRules",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "SlicingRules-list" }, 
  ],
  "elems": [
  ]
},
"BindingStrength": {
    /*Indication of the degree of conformance expectations associated with a bindingIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "BindingStrength",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "BindingStrength-list" }, 
  ],
  "elems": [
  ]
},
"DomainResource": {
    /*A resource that includes narrative, extensions, and contained resources.
     */
  "name": "DomainResource",
  "base": "Resource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
     */  "name": "text", 
    
      "min": "0", 
      "max": "1", 
      "type": "Narrative",
      "isPrimitive": false }, 
    { 
    /*These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
     */  "name": "contained", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ResourceContainer",
      "isPrimitive": false }, 
    { 
    /*May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */  "name": "extension", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Extension",
      "isPrimitive": false }, 
    { 
    /*May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
     */  "name": "modifierExtension", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Extension",
      "isPrimitive": false }, 
  ]
},
"Resource": {
    /*Base Resource for everything.
     */
  "name": "Resource",
  "attrs": [
  ],
  "elems": [
    { 
    /*The logical id of the resource, as used in the url for the resource. Once assigned, this value never changes.
     */  "name": "id", 
    
      "min": "0", 
      "max": "1", 
      "type": "id",
      "isPrimitive": true }, 
    { 
    /*The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.
     */  "name": "meta", 
    
      "min": "0", 
      "max": "1", 
      "type": "Meta",
      "isPrimitive": false }, 
    { 
    /*A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.
     */  "name": "implicitRules", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*The base language in which the resource is written.
     */  "name": "language", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
  ]
},
"ConformanceResourceStatus": {
    /*If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ConformanceResourceStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ConformanceResourceStatus-list" }, 
  ],
  "elems": [
  ]
},
"SearchParamType": {
    /*If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "SearchParamType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "SearchParamType-list" }, 
  ],
  "elems": [
  ]
},
"AdministrativeGender": {
    /*If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AdministrativeGender",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "AdministrativeGender-list" }, 
  ],
  "elems": [
  ]
},
"RemittanceOutcome": {
    /*If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "RemittanceOutcome",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "RemittanceOutcome-list" }, 
  ],
  "elems": [
  ]
},
"NoteType": {
    /*If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "NoteType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "NoteType-list" }, 
  ],
  "elems": [
  ]
},
"ConceptMapEquivalence": {
    /*If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ConceptMapEquivalence",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ConceptMapEquivalence-list" }, 
  ],
  "elems": [
  ]
},
"DocumentReferenceStatus": {
    /*If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DocumentReferenceStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "DocumentReferenceStatus-list" }, 
  ],
  "elems": [
  ]
},
"Account": {
    /*A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centres, etc.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Account",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Unique identifier used to reference the account.  May or may not be intended for human use.  (E.g. credit card number).
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Name used for the account when displaying it to humans in reports, etc.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Categorizes the account for reporting and searching purposes.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Indicates whether the account is presently used/useable or not.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "AccountStatus",
      "isPrimitive": true }, 
    { 
    /*Indicates the period of time over which the account is allowed.
     */  "name": "activePeriod", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*Identifies the currency to which transactions must be converted when crediting or debiting the account.
     */  "name": "currency", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Represents the sum of all credits less all debits associated with the account.  Might be positive, zero or negative.
     */  "name": "balance", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*Identifies the period of time the account applies to.  E.g. accounts created per fiscal year, quarter, etc.
     */  "name": "coveragePeriod", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*Identifies the patient, device, practitioner, location or other object the account is associated with.
     */  "name": "subject", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Indicates the organization, department, etc. with responsibility for the account.
     */  "name": "owner", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Provides additional information about what the account tracks and how it is used.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"AccountStatus": {
    /*Indicates whether the account is available to be usedIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AccountStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "AccountStatus-list" }, 
  ],
  "elems": [
  ]
},
"AllergyIntolerance": {
    /*Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AllergyIntolerance",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*This records identifiers associated with this allergy/intolerance concern that are defined by business processed and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Record of the date and/or time of the onset of the Allergy or Intolerance.
     */  "name": "onset", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Date when the sensitivity was recorded.
     */  "name": "recordedDate", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Individual who recorded the record and takes responsibility for its conten.
     */  "name": "recorder", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The patient who has the allergy or intolerance.
     */  "name": "patient", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The source of the information about the allergy that is recorded.
     */  "name": "reporter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identification of a substance, or a class of substances, that is considered to be responsible for the Adverse reaction risk.
     */  "name": "substance", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified Substance.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "AllergyIntoleranceStatus",
      "isPrimitive": true }, 
    { 
    /*Estimate of the potential clinical harm, or seriousness, of the reaction to the identified Substance.
     */  "name": "criticality", 
    
      "min": "0", 
      "max": "1", 
      "type": "AllergyIntoleranceCriticality",
      "isPrimitive": true }, 
    { 
    /*Identification of the underlying physiological mechanism for the reaction risk.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "AllergyIntoleranceType",
      "isPrimitive": true }, 
    { 
    /*Category of the identified Substance.
     */  "name": "category", 
    
      "min": "0", 
      "max": "1", 
      "type": "AllergyIntoleranceCategory",
      "isPrimitive": true }, 
    { 
    /*Represents the date and/or time of the last known occurence of a reaction event.
     */  "name": "lastOccurence", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.
     */  "name": "note", 
    
      "min": "0", 
      "max": "1", 
      "type": "Annotation",
      "isPrimitive": false }, 
    { 
    /*Details about each Adverse Reaction Event linked to exposure to the identified Substance.
     */  "name": "reaction", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "AllergyIntolerance.Reaction",
      "isPrimitive": false }, 
  ]
},
"AllergyIntolerance.Reaction": {
    /*Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.
     */
  "name": "AllergyIntolerance.Reaction",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identification of the specific substance considered to be responsible for the Adverse Reaction event. Note: the substance for a specific reaction may be different to the substance identified as the cause of the risk, but must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite substance that includes the identified substance. It must be clinically safe to only process the AllergyIntolerance.substance and ignore the AllergyIntolerance.event.substance.
     */  "name": "substance", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Statement about the degree of clinical certainty that the Specific Substance was the cause of the Manifestation in this reaction event.
     */  "name": "certainty", 
    
      "min": "0", 
      "max": "1", 
      "type": "AllergyIntoleranceCertainty",
      "isPrimitive": true }, 
    { 
    /*Clinical symptoms and/or signs that are observed or associated with the Adverse Reaction Event.
     */  "name": "manifestation", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Text description about the Reaction as a whole, including details of the manifestation if required.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Record of the date and/or time of the onset of the Reaction.
     */  "name": "onset", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.
     */  "name": "severity", 
    
      "min": "0", 
      "max": "1", 
      "type": "AllergyIntoleranceSeverity",
      "isPrimitive": true }, 
    { 
    /*Identification of the route by which the subject was exposed to the substance.
     */  "name": "exposureRoute", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Additional text about the Adverse Reaction event not captured in other fields.
     */  "name": "note", 
    
      "min": "0", 
      "max": "1", 
      "type": "Annotation",
      "isPrimitive": false }, 
  ]
},
"AllergyIntoleranceCriticality": {
    /*Estimate of the potential clinical harm, or seriousness, of a reaction to an identified SubstanceIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AllergyIntoleranceCriticality",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "AllergyIntoleranceCriticality-list" }, 
  ],
  "elems": [
  ]
},
"AllergyIntoleranceStatus": {
    /*Assertion about certainty associated with a propensity, or potential risk, of a reaction to the identified SubstanceIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AllergyIntoleranceStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "AllergyIntoleranceStatus-list" }, 
  ],
  "elems": [
  ]
},
"AllergyIntoleranceType": {
    /*Identification of the underlying physiological mechanism for a Reaction RiskIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AllergyIntoleranceType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "AllergyIntoleranceType-list" }, 
  ],
  "elems": [
  ]
},
"AllergyIntoleranceCategory": {
    /*Category of an identified SubstanceIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AllergyIntoleranceCategory",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "AllergyIntoleranceCategory-list" }, 
  ],
  "elems": [
  ]
},
"AllergyIntoleranceCertainty": {
    /*Statement about the degree of clinical certainty that a Specific Substance was the cause of the Manifestation in an reaction eventIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AllergyIntoleranceCertainty",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "AllergyIntoleranceCertainty-list" }, 
  ],
  "elems": [
  ]
},
"AllergyIntoleranceSeverity": {
    /*Clinical assessment of the severity of a reaction event as a whole, potentially considering multiple different manifestationsIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AllergyIntoleranceSeverity",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "AllergyIntoleranceSeverity-list" }, 
  ],
  "elems": [
  ]
},
"Appointment": {
    /*A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Appointment",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*This records identifiers associated with this appointment concern that are defined by business processed and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "AppointmentStatus",
      "isPrimitive": true }, 
    { 
    /*The type of appointment that is being booked (This may also be associated with participants for location, and/or a HealthcareService).
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The reason that this appointment is being scheduled, this is more clinical than administrative.
     */  "name": "reason", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize appointments. (The iCal Standard specifies 0 as undefined, 1 as highest, 9 as lowest priority).
     */  "name": "priority", 
    
      "min": "0", 
      "max": "1", 
      "type": "unsignedInt",
      "isPrimitive": true }, 
    { 
    /*The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Date/Time that the appointment is to take place.
     */  "name": "start", 
    
      "min": "0", 
      "max": "1", 
      "type": "instant",
      "isPrimitive": true }, 
    { 
    /*Date/Time that the appointment is to conclude.
     */  "name": "end", 
    
      "min": "0", 
      "max": "1", 
      "type": "instant",
      "isPrimitive": true }, 
    { 
    /*Number of minutes that the appointment is to take. This can be less than the duration between the start and end times (where actual time of appointment is only an estimate or is a planned appointment request).
     */  "name": "minutesDuration", 
    
      "min": "0", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*The slot that this appointment is filling. If provided then the schedule will not be provided as slots are not recursive, and the start/end values MUST be the same as from the slot.
     */  "name": "slot", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Additional comments about the appointment.
     */  "name": "comment", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*List of participants involved in the appointment.
     */  "name": "participant", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "Appointment.Participant",
      "isPrimitive": false }, 
  ]
},
"Appointment.Participant": {
    /*A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
     */
  "name": "Appointment.Participant",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Role of participant in the appointment.
     */  "name": "type", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A Person, Location/HealthcareService or Device that is participating in the appointment.
     */  "name": "actor", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Is this participant required to be present at the meeting. This covers a use-case where 2 doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
     */  "name": "required", 
    
      "min": "0", 
      "max": "1", 
      "type": "ParticipantRequired",
      "isPrimitive": true }, 
    { 
    /*Participation status of the Patient.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "ParticipationStatus",
      "isPrimitive": true }, 
  ]
},
"ParticipantRequired": {
    /*Is the Participant required to attend the appointmentIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ParticipantRequired",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ParticipantRequired-list" }, 
  ],
  "elems": [
  ]
},
"AppointmentStatus": {
    /*The free/busy status of an appointmentIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AppointmentStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "AppointmentStatus-list" }, 
  ],
  "elems": [
  ]
},
"ParticipationStatus": {
    /*The Participation status of an appointmentIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ParticipationStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ParticipationStatus-list" }, 
  ],
  "elems": [
  ]
},
"AppointmentResponse": {
    /*A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AppointmentResponse",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*This records identifiers associated with this appointment response concern that are defined by business processed and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Parent appointment that this response is replying to.
     */  "name": "appointment", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the start time.
     */  "name": "start", 
    
      "min": "0", 
      "max": "1", 
      "type": "instant",
      "isPrimitive": true }, 
    { 
    /*This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.
     */  "name": "end", 
    
      "min": "0", 
      "max": "1", 
      "type": "instant",
      "isPrimitive": true }, 
    { 
    /*Role of participant in the appointment.
     */  "name": "participantType", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A Person, Location/HealthcareService or Device that is participating in the appointment.
     */  "name": "actor", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Participation status of the Participant. When the status is declined or tentative if the start/end times are different to the appointment, then these times should be interpreted as a requested time change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of the time) or can be empty.
     */  "name": "participantStatus", 
    
      "min": "1", 
      "max": "1", 
      "type": "ParticipantStatus",
      "isPrimitive": true }, 
    { 
    /*This comment is particularly important when the responder is declining, tentative or requesting another time to indicate the reasons why.
     */  "name": "comment", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"ParticipantStatus": {
    /*The Participation status of an appointmentIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ParticipantStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ParticipantStatus-list" }, 
  ],
  "elems": [
  ]
},
"AuditEvent": {
    /*A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AuditEvent",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifies the name, action type, time, and disposition of the audited event.
     */  "name": "event", 
    
      "min": "1", 
      "max": "1", 
      "type": "AuditEvent.Event",
      "isPrimitive": false }, 
    { 
    /*A person, a hardware device or software process.
     */  "name": "participant", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "AuditEvent.Participant",
      "isPrimitive": false }, 
    { 
    /*Application systems and processes.
     */  "name": "source", 
    
      "min": "1", 
      "max": "1", 
      "type": "AuditEvent.Source",
      "isPrimitive": false }, 
    { 
    /*Specific instances of data or objects that have been accessed.
     */  "name": "object", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "AuditEvent.Object",
      "isPrimitive": false }, 
  ]
},
"AuditEvent.Event": {
    /*A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
     */
  "name": "AuditEvent.Event",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifier for a family of the event.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Identifier for the category of event.
     */  "name": "subtype", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Indicator for type of action performed during the event that generated the audit.
     */  "name": "action", 
    
      "min": "0", 
      "max": "1", 
      "type": "AuditEventAction",
      "isPrimitive": true }, 
    { 
    /*The time when the event occurred on the source.
     */  "name": "dateTime", 
    
      "min": "1", 
      "max": "1", 
      "type": "instant",
      "isPrimitive": true }, 
    { 
    /*Indicates whether the event succeeded or failed.
     */  "name": "outcome", 
    
      "min": "0", 
      "max": "1", 
      "type": "AuditEventOutcome",
      "isPrimitive": true }, 
    { 
    /*A free text description of the outcome of the event.
     */  "name": "outcomeDesc", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The purposeOfUse (reason) that was used during the event being recorded.
     */  "name": "purposeOfEvent", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
  ]
},
"AuditEvent.Participant": {
    /*A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
     */
  "name": "AuditEvent.Participant",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Specification of the role(s) the user plays when performing the event. Usually the codes used in this element are local codes defined by the role-based access control security system used in the local context.
     */  "name": "role", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Direct reference to a resource that identifies the participant.
     */  "name": "reference", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Unique identifier for the user actively participating in the event.
     */  "name": "userId", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Alternative Participant Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g., single sign-on), if available.
     */  "name": "altId", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Human-meaningful name for the user.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Indicator that the user is or is not the requestor, or initiator, for the event being audited.
     */  "name": "requestor", 
    
      "min": "1", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Where the event occurred.
     */  "name": "location", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The policy or plan that authorized the activity being recorded. Typically, a single activity may have multiple applicable policies, such as patient consent, guarantor funding, etc. The policy would also indicate the security token used.
     */  "name": "policy", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*Type of media involved. Used when the event is about exporting/importing onto media.
     */  "name": "media", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Logical network location for application activity, if the activity has a network location.
     */  "name": "network", 
    
      "min": "0", 
      "max": "1", 
      "type": "AuditEvent.Network",
      "isPrimitive": false }, 
    { 
    /*The reason (purpose of use), specific to this participant, that was used during the event being recorded.
     */  "name": "purposeOfUse", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
  ]
},
"AuditEvent.Network": {
    /*A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
     */
  "name": "AuditEvent.Network",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An identifier for the network access point of the user device for the audit event.
     */  "name": "address", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*An identifier for the type of network access point that originated the audit event.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "AuditEventParticipantNetworkType",
      "isPrimitive": true }, 
  ]
},
"AuditEvent.Source": {
    /*A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
     */
  "name": "AuditEvent.Source",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Logical source location within the healthcare enterprise network.
     */  "name": "site", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Identifier of the source where the event was detected.
     */  "name": "identifier", 
    
      "min": "1", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Code specifying the type of source where event originated.
     */  "name": "type", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
  ]
},
"AuditEvent.Object": {
    /*A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
     */
  "name": "AuditEvent.Object",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifies a specific instance of the participant object. The reference should always be version specific.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Identifies a specific instance of the participant object. The reference should always be version specific.
     */  "name": "reference", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The type of the object that was involved in this audit event.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Code representing the functional application role of Participant Object being audited.
     */  "name": "role", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Identifier for the data life-cycle stage for the participant object.
     */  "name": "lifecycle", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Denotes security labels for the identified object.
     */  "name": "securityLabel", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*An instance-specific descriptor of the Participant Object ID audited, such as a person's name.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Text that describes the object in more detail.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The actual query for a query-type participant object.
     */  "name": "query", 
    
      "min": "0", 
      "max": "1", 
      "type": "base64Binary",
      "isPrimitive": true }, 
    { 
    /*Additional Information about the Object.
     */  "name": "detail", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "AuditEvent.Detail",
      "isPrimitive": false }, 
  ]
},
"AuditEvent.Detail": {
    /*A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
     */
  "name": "AuditEvent.Detail",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Name of the property.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Property value.
     */  "name": "value", 
    
      "min": "1", 
      "max": "1", 
      "type": "base64Binary",
      "isPrimitive": true }, 
  ]
},
"AuditEventOutcome": {
    /*Indicates whether the event succeeded or failedIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AuditEventOutcome",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "AuditEventOutcome-list" }, 
  ],
  "elems": [
  ]
},
"AuditEventAction": {
    /*Indicator for type of action performed during the event that generated the audit.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AuditEventAction",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "AuditEventAction-list" }, 
  ],
  "elems": [
  ]
},
"AuditEventParticipantNetworkType": {
    /*The type of network access point of this participant in the audit eventIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AuditEventParticipantNetworkType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "AuditEventParticipantNetworkType-list" }, 
  ],
  "elems": [
  ]
},
"Basic": {
    /*Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Basic",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifier assigned to the resource for business purposes, outside the context of FHIR.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Identifies the 'type' of resource - equivalent to the resource name for other resources.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Identifies the patient, practitioner, device or any other resource that is the "focus" of this resoruce.
     */  "name": "subject", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Indicates who was responsible for creating the resource instance.
     */  "name": "author", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifies when the resource was first created.
     */  "name": "created", 
    
      "min": "0", 
      "max": "1", 
      "type": "date",
      "isPrimitive": true }, 
  ]
},
"Binary": {
    /*A binary resource can contain any content, whether text, image, pdf, zip archive, etc.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Binary",
  "base": "Resource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*MimeType of the binary content represented as a standard MimeType (BCP 13).
     */  "name": "contentType", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*The actual content, base64 encoded.
     */  "name": "content", 
    
      "min": "1", 
      "max": "1", 
      "type": "base64Binary",
      "isPrimitive": true }, 
  ]
},
"BodySite": {
    /*Record details about the anatomical location of a specimen or body part.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "BodySite",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The person to which the body site belongs.
     */  "name": "patient", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifier for this instance of the anatomical location.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Named anatomical location - ideally would be coded where possible.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Modifier to refine the anatomical location.  These include modifiers for laterality, relative location, directionality, number, and plane.
     */  "name": "modifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Description of anatomical location.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Image or images used to identify a location.
     */  "name": "image", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Attachment",
      "isPrimitive": false }, 
  ]
},
"Bundle": {
    /*A container for a collection of resources.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Bundle",
  "base": "Resource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Indicates the purpose of this bundle- how it was intended to be used.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "BundleType",
      "isPrimitive": true }, 
    { 
    /*If a set of search matches, this is the total number of matches for the search (as opposed to the number of results in this bundle).
     */  "name": "total", 
    
      "min": "0", 
      "max": "1", 
      "type": "unsignedInt",
      "isPrimitive": true }, 
    { 
    /*A series of links that provide context to this bundle.
     */  "name": "link", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Bundle.Link",
      "isPrimitive": false }, 
    { 
    /*An entry in a bundle resource - will either contain a resource, or information about a resource (transactions and history only).
     */  "name": "entry", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Bundle.Entry",
      "isPrimitive": false }, 
    { 
    /*Digital Signature - base64 encoded. XML DigSIg or a JWT.
     */  "name": "signature", 
    
      "min": "0", 
      "max": "1", 
      "type": "Signature",
      "isPrimitive": false }, 
  ]
},
"Bundle.Link": {
    /*A container for a collection of resources.
     */
  "name": "Bundle.Link",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A name which details the functional use for this link - see [[http://www.iana.org/assignments/link-relations/link-relations.xhtml]].
     */  "name": "relation", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The reference details for the link.
     */  "name": "url", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
  ]
},
"Bundle.Entry": {
    /*A container for a collection of resources.
     */
  "name": "Bundle.Entry",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A series of links that provide context to this entry.
     */  "name": "link", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Bundle.Link",
      "isPrimitive": false }, 
    { 
    /*The Absolute URL for the resource. This must be provided for all resources. The fullUrl SHALL not disagree with the id in the resource. The fullUrl is a version independent reference to the resource.
     */  "name": "fullUrl", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*The Resources for the entry.
     */  "name": "resource", 
    
      "min": "0", 
      "max": "1", 
      "type": "ResourceContainer",
      "isPrimitive": false }, 
    { 
    /*Information about the search process that lead to the creation of this entry.
     */  "name": "search", 
    
      "min": "0", 
      "max": "1", 
      "type": "Bundle.Search",
      "isPrimitive": false }, 
    { 
    /*Additional information about how this entry should be processed as part of a transaction.
     */  "name": "request", 
    
      "min": "0", 
      "max": "1", 
      "type": "Bundle.Request",
      "isPrimitive": false }, 
    { 
    /*Additional information about how this entry should be processed as part of a transaction.
     */  "name": "response", 
    
      "min": "0", 
      "max": "1", 
      "type": "Bundle.Response",
      "isPrimitive": false }, 
  ]
},
"Bundle.Search": {
    /*A container for a collection of resources.
     */
  "name": "Bundle.Search",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Why this entry is in the result set - whether it's included as a match or because of an _include requirement.
     */  "name": "mode", 
    
      "min": "0", 
      "max": "1", 
      "type": "SearchEntryMode",
      "isPrimitive": true }, 
    { 
    /*When searching, the server's search ranking score for the entry.
     */  "name": "score", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
  ]
},
"Bundle.Request": {
    /*A container for a collection of resources.
     */
  "name": "Bundle.Request",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The HTTP verb for this entry in either a update history, or a transaction/ transaction response.
     */  "name": "method", 
    
      "min": "1", 
      "max": "1", 
      "type": "HTTPVerb",
      "isPrimitive": true }, 
    { 
    /*The URL for this entry, relative to the root (the address to which the request is posted).
     */  "name": "url", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*If the ETag values match, return a 304 Not modified status. See the the API documentation for ["Conditional Read"](http.html#cread).
     */  "name": "ifNoneMatch", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Only perform the operation if the last updated date matches. See the the API documentation for ["Conditional Read"](http.html#cread).
     */  "name": "ifModifiedSince", 
    
      "min": "0", 
      "max": "1", 
      "type": "instant",
      "isPrimitive": true }, 
    { 
    /*Only perform the operation if the Etag value matches. For more information, see the API section ["Managing Resource Contention"](http.html#concurrency).
     */  "name": "ifMatch", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Instruct the server not to perform the create if a specified resource already exists. For further information,see the the API documentation for ["Conditional Create"](http.html#ccreate). This is just the query portion of the URL - what follows the "?" (not including the "?").
     */  "name": "ifNoneExist", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"Bundle.Response": {
    /*A container for a collection of resources.
     */
  "name": "Bundle.Response",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The status code returned by processing this entry.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The location header created by processing this operation.
     */  "name": "location", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*The etag for the resource, it the operation for the entry produced a versioned resource.
     */  "name": "etag", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The date/time that the resource was modified on the server.
     */  "name": "lastModified", 
    
      "min": "0", 
      "max": "1", 
      "type": "instant",
      "isPrimitive": true }, 
  ]
},
"HTTPVerb": {
    /*HTTP verbs (in the HTTP command line)If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "HTTPVerb",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "HTTPVerb-list" }, 
  ],
  "elems": [
  ]
},
"BundleType": {
    /*Indicates the purpose of a bundle- how it was intended to be usedIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "BundleType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "BundleType-list" }, 
  ],
  "elems": [
  ]
},
"SearchEntryMode": {
    /*Why an entry is in the result set - whether it's included as a match or because of an _include requirementIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "SearchEntryMode",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "SearchEntryMode-list" }, 
  ],
  "elems": [
  ]
},
"CarePlan": {
    /*Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "CarePlan",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*This records identifiers associated with this care plan that are defined by business processed and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Identifies the patient or group whose intended care is described by the plan.
     */  "name": "subject", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Indicates whether the plan is currently being acted upon, represents future intentions or is now just historical record.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "CarePlanStatus",
      "isPrimitive": true }, 
    { 
    /*Identifiers the context in which this particular CarePlan is defined.
     */  "name": "context", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Indicates when the plan did (or is intended to) come into effect and end.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*Identifies the individual(s) or ogranization who is responsible for the content of the care plan.
     */  "name": "author", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifies the most recent date on which the plan has been revised.
     */  "name": "modified", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Identifies what "kind" of plan this is to support differentiation between multiple co-existing plans.  E.g. "Home health", "psychiatric", "asthma", "disease management", "wellness plan", etc.
     */  "name": "category", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A description of the scope and nature of the plan.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan.
     */  "name": "addresses", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifies portions of the patient's record that specifically influenced the formation of the plan.  These might include co-morbidities, recent procedures, limitations, recent assessments, etc.
     */  "name": "support", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifies CarePlans with some sort of formal relationship to the current plan.
     */  "name": "relatedPlan", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CarePlan.RelatedPlan",
      "isPrimitive": false }, 
    { 
    /*Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
     */  "name": "participant", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CarePlan.Participant",
      "isPrimitive": false }, 
    { 
    /*Describes the intended objective(s) of carrying out the Care Plan.
     */  "name": "goal", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
     */  "name": "activity", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CarePlan.Activity",
      "isPrimitive": false }, 
    { 
    /*General notes about the care plan not covered elsewhere.
     */  "name": "note", 
    
      "min": "0", 
      "max": "1", 
      "type": "Annotation",
      "isPrimitive": false }, 
  ]
},
"CarePlan.RelatedPlan": {
    /*Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
     */
  "name": "CarePlan.RelatedPlan",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifies the type of relationship this plan has to the target plan.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "CarePlanRelationship",
      "isPrimitive": true }, 
    { 
    /*A reference to the plan to which a relationship is asserted.
     */  "name": "plan", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"CarePlan.Participant": {
    /*Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
     */
  "name": "CarePlan.Participant",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Indicates specific responsibility of an individual within the care plan.  E.g. "Primary physician", "Team coordinator", "Caregiver", etc.
     */  "name": "role", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The specific person or organization who is participating/expected to participate in the care plan.
     */  "name": "member", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"CarePlan.Activity": {
    /*Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
     */
  "name": "CarePlan.Activity",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Resources that describe follow-on actions resulting from the plan, such as drug prescriptions, encounter records, appointments, etc.
     */  "name": "actionResulting", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Notes about the adherence/status/progress of the activity.
     */  "name": "progress", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Annotation",
      "isPrimitive": false }, 
    { 
    /*The details of the proposed activity represented in a specific resource.
     */  "name": "reference", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
     */  "name": "detail", 
    
      "min": "0", 
      "max": "1", 
      "type": "CarePlan.Detail",
      "isPrimitive": false }, 
  ]
},
"CarePlan.Detail": {
    /*Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
     */
  "name": "CarePlan.Detail",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*High-level categorization of the type of activity in a care plan.
     */  "name": "category", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Detailed description of the type of planned activity.  E.g. What lab test, what procedure, what kind of encounter.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Provides the rationale that drove the inclusion of this particular activity as part of the plan.
     */  "name": "reasonCode", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Provides the health condition(s) that drove the inclusion of this particular activity as part of the plan.
     */  "name": "reasonReference", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
     */  "name": "goal", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifies what progress is being made for the specific activity.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "CarePlanActivityStatus",
      "isPrimitive": true }, 
    { 
    /*Provides reason why the activity isn't yet started, is on hold, was cancelled, etc.
     */  "name": "statusReason", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*If true, indicates that the described activity is one that must NOT be engaged in when following the plan.
     */  "name": "prohibited", 
    
      "min": "1", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    [ /* Choice */ 
    /*The period, timing or frequency upon which the described activity is to occur.
     */
        {   "name": "scheduledTiming", 
        
          "min": "1", 
          "max": "1", 
          "type": "Timing",
          "isPrimitive": false }, 
        {   "name": "scheduledPeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
        {   "name": "scheduledString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
    ], 
    { 
    /*Identifies the facility where the activity will occur.  E.g. home, hospital, specific clinic, etc.
     */  "name": "location", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifies who's expected to be involved in the activity.
     */  "name": "performer", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*Identifies the food, drug or other product to be consumed or supplied in the activity.
     */
        {   "name": "productCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "productReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*Identifies the quantity expected to be consumed in a given day.
     */  "name": "dailyAmount", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*Identifies the quantity expected to be supplied, addministered or consumed by the subject.
     */  "name": "quantity", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"CarePlanRelationship": {
    /*Codes identifying the types of relationships between two plans.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "CarePlanRelationship",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "CarePlanRelationship-list" }, 
  ],
  "elems": [
  ]
},
"CarePlanStatus": {
    /*Indicates whether the plan is currently being acted upon, represents future intentions or is now just historical record.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "CarePlanStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "CarePlanStatus-list" }, 
  ],
  "elems": [
  ]
},
"CarePlanActivityStatus": {
    /*Indicates where the activity is at in its overall life cycleIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "CarePlanActivityStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "CarePlanActivityStatus-list" }, 
  ],
  "elems": [
  ]
},
"Claim": {
    /*A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Claim",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The category of claim this is.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "ClaimType",
      "isPrimitive": true }, 
    { 
    /*The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The version of the specification on which this instance relies.
     */  "name": "ruleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The version of the specification from which the original instance was created.
     */  "name": "originalRuleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The date when the enclosed suite of services were performed or completed.
     */  "name": "created", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Insurer Identifier, typical BIN number (6 digit).
     */  "name": "target", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The provider which is responsible for the bill, claim pre-determination, pre-authorization.
     */  "name": "provider", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The organization which is responsible for the bill, claim pre-determination, pre-authorization.
     */  "name": "organization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).
     */  "name": "use", 
    
      "min": "0", 
      "max": "1", 
      "type": "Use",
      "isPrimitive": true }, 
    { 
    /*Immediate (STAT), best effort (NORMAL), deferred (DEFER).
     */  "name": "priority", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*In the case of a Pre-Determination/Pre-Authorization the provider may request that funds in the amount of the expected Benefit be reserved ('Patient' or 'Provider') to pay for the Benefits determined on the subsequent claim(s). 'None' explicitly indicates no funds reserving is requested.
     */  "name": "fundsReserve", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Person who created the invoice/claim/pre-determination or pre-authorization.
     */  "name": "enterer", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Facility where the services were provided.
     */  "name": "facility", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Prescription to support the dispensing of Pharmacy or Vision products.
     */  "name": "prescription", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Original prescription to support the dispensing of pharmacy services, medications or products.
     */  "name": "originalPrescription", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The party to be reimbursed for the services.
     */  "name": "payee", 
    
      "min": "0", 
      "max": "1", 
      "type": "Claim.Payee",
      "isPrimitive": false }, 
    { 
    /*The referral resource which lists the date, practitioner, reason and other supporting information.
     */  "name": "referral", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Ordered list of patient diagnosis for which care is sought.
     */  "name": "diagnosis", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Claim.Diagnosis",
      "isPrimitive": false }, 
    { 
    /*List of patient conditions for which care is sought.
     */  "name": "condition", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Patient Resource.
     */  "name": "patient", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Financial instrument by which payment information for health care.
     */  "name": "coverage", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Claim.Coverage",
      "isPrimitive": false }, 
    { 
    /*Factors which may influence the applicability of coverage.
     */  "name": "exception", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Name of school for over-aged dependants.
     */  "name": "school", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Date of an accident which these services are addressing.
     */  "name": "accident", 
    
      "min": "0", 
      "max": "1", 
      "type": "date",
      "isPrimitive": true }, 
    { 
    /*Type of accident: work, auto, etc.
     */  "name": "accidentType", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*A list of intervention and exception codes which may influence the adjudication of the claim.
     */  "name": "interventionException", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*First tier of goods and services.
     */  "name": "item", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Claim.Item",
      "isPrimitive": false }, 
    { 
    /*Code to indicate that Xrays, images, emails, documents, models or attachments are being sent in support of this submission.
     */  "name": "additionalMaterials", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*A list of teeth which would be expected but are not found due to having been previously  extracted or for other reasons.
     */  "name": "missingTeeth", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Claim.MissingTeeth",
      "isPrimitive": false }, 
  ]
},
"Claim.Payee": {
    /*A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery.
     */
  "name": "Claim.Payee",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Party to be reimbursed: Subscriber, provider, other.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The provider who is to be reimbursed for the claim (the party to whom any benefit is assigned).
     */  "name": "provider", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The organization who is to be reimbursed for the claim (the party to whom any benefit is assigned).
     */  "name": "organization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The person other than the subscriber who is to be reimbursed for the claim (the party to whom any benefit is assigned).
     */  "name": "person", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"Claim.Diagnosis": {
    /*A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery.
     */
  "name": "Claim.Diagnosis",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Sequence of diagnosis which serves to order and provide a link.
     */  "name": "sequence", 
    
      "min": "1", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*The diagnosis.
     */  "name": "diagnosis", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
  ]
},
"Claim.Coverage": {
    /*A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery.
     */
  "name": "Claim.Coverage",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A service line item.
     */  "name": "sequence", 
    
      "min": "1", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*The instance number of the Coverage which is the focus for adjudication. The Coverage against which the claim is to be adjudicated.
     */  "name": "focal", 
    
      "min": "1", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Reference to the program or plan identification, underwriter or payor.
     */  "name": "coverage", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The contract number of a business agreement which describes the terms and conditions.
     */  "name": "businessArrangement", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The relationship of the patient to the subscriber.
     */  "name": "relationship", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*A list of references from the Insurer to which these services pertain.
     */  "name": "preAuthRef", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The Coverages adjudication details.
     */  "name": "claimResponse", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The style (standard) and version of the original material which was converted into this resource.
     */  "name": "originalRuleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
  ]
},
"Claim.Item": {
    /*A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery.
     */
  "name": "Claim.Item",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A service line number.
     */  "name": "sequence", 
    
      "min": "1", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*The type of product or service.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The practitioner who is responsible for the services rendered to the patient.
     */  "name": "provider", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Diagnosis applicable for this service or product line.
     */  "name": "diagnosisLinkId", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*If a grouping item then 'GROUP' otherwise it is a node therefore a code to indicate the Professional Service or Product supplied.
     */  "name": "service", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The date when the enclosed suite of services were performed or completed.
     */  "name": "serviceDate", 
    
      "min": "0", 
      "max": "1", 
      "type": "date",
      "isPrimitive": true }, 
    { 
    /*The number of repetitions of a service or product.
     */  "name": "quantity", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.
     */  "name": "unitPrice", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */  "name": "factor", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the good or service delivered. The concept of Points allows for assignment of point values for services and/or goods, such that a monetary amount can be assigned to each point.
     */  "name": "points", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */  "name": "net", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*List of Unique Device Identifiers associated with this line item.
     */  "name": "udi", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Physical service site on the patient (limb, tooth, etc).
     */  "name": "bodySite", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*A region or surface of the site, eg. limb region or tooth surface(s).
     */  "name": "subSite", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or an appliance was lost or stolen.
     */  "name": "modifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Second tier of goods and services.
     */  "name": "detail", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Claim.Detail",
      "isPrimitive": false }, 
    { 
    /*The materials and placement date of prior fixed prosthesis.
     */  "name": "prosthesis", 
    
      "min": "0", 
      "max": "1", 
      "type": "Claim.Prosthesis",
      "isPrimitive": false }, 
  ]
},
"Claim.Detail": {
    /*A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery.
     */
  "name": "Claim.Detail",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A service line number.
     */  "name": "sequence", 
    
      "min": "1", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*The type of product or service.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*If a grouping item then 'GROUP' otherwise it is a node therefore a code to indicate the Professional Service or Product supplied.
     */  "name": "service", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The number of repetitions of a service or product.
     */  "name": "quantity", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.
     */  "name": "unitPrice", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */  "name": "factor", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the good or service delivered. The concept of Points allows for assignment of point values for services and/or goods, such that a monetary amount can be assigned to each point.
     */  "name": "points", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */  "name": "net", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*List of Unique Device Identifiers associated with this line item.
     */  "name": "udi", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Third tier of goods and services.
     */  "name": "subDetail", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Claim.SubDetail",
      "isPrimitive": false }, 
  ]
},
"Claim.SubDetail": {
    /*A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery.
     */
  "name": "Claim.SubDetail",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A service line number.
     */  "name": "sequence", 
    
      "min": "1", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*The type of product or service.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The fee for an addittional service or product or charge.
     */  "name": "service", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The number of repetitions of a service or product.
     */  "name": "quantity", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*The fee for an addittional service or product or charge.
     */  "name": "unitPrice", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */  "name": "factor", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the good or service delivered. The concept of Points allows for assignment of point values for services and/or goods, such that a monetary amount can be assigned to each point.
     */  "name": "points", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */  "name": "net", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*List of Unique Device Identifiers associated with this line item.
     */  "name": "udi", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
  ]
},
"Claim.Prosthesis": {
    /*A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery.
     */
  "name": "Claim.Prosthesis",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Indicates whether this is the initial placement of a fixed prosthesis.
     */  "name": "initial", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Date of the initial placement.
     */  "name": "priorDate", 
    
      "min": "0", 
      "max": "1", 
      "type": "date",
      "isPrimitive": true }, 
    { 
    /*Material of the prior denture or bridge prosthesis. (Oral).
     */  "name": "priorMaterial", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
  ]
},
"Claim.MissingTeeth": {
    /*A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery.
     */
  "name": "Claim.MissingTeeth",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The code identifying which tooth is missing.
     */  "name": "tooth", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Missing reason may be: E-extraction, O-other.
     */  "name": "reason", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The date of the extraction either known from records or patient reported estimate.
     */  "name": "extractionDate", 
    
      "min": "0", 
      "max": "1", 
      "type": "date",
      "isPrimitive": true }, 
  ]
},
"Use": {
    /*Complete, proposed, exploratory, otherIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Use",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "Use-list" }, 
  ],
  "elems": [
  ]
},
"ClaimType": {
    /*The type or discipline-style of the claimIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ClaimType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ClaimType-list" }, 
  ],
  "elems": [
  ]
},
"ClaimResponse": {
    /*This resource provides the adjudication details from the processing of a Claim resource.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ClaimResponse",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The Response Business Identifier.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Original request resource referrence.
     */  "name": "request", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */  "name": "ruleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The style (standard) and version of the original material which was converted into this resource.
     */  "name": "originalRuleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The date when the enclosed suite of services were performed or completed.
     */  "name": "created", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The Insurer who produced this adjudicated response.
     */  "name": "organization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The practitioner who is responsible for the services rendered to the patient.
     */  "name": "requestProvider", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The organization which is responsible for the services rendered to the patient.
     */  "name": "requestOrganization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Transaction status: error, complete.
     */  "name": "outcome", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*A description of the status of the adjudication.
     */  "name": "disposition", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Party to be reimbursed: Subscriber, provider, other.
     */  "name": "payeeType", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The first tier service adjudications for submitted services.
     */  "name": "item", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ClaimResponse.Item",
      "isPrimitive": false }, 
    { 
    /*The first tier service adjudications for payor added services.
     */  "name": "addItem", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ClaimResponse.AddItem",
      "isPrimitive": false }, 
    { 
    /*Mutually exclusive with Services Provided (Item).
     */  "name": "error", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ClaimResponse.Error",
      "isPrimitive": false }, 
    { 
    /*The total cost of the services reported.
     */  "name": "totalCost", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*The amount of deductable applied which was not allocated to any particular service line.
     */  "name": "unallocDeductable", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*Total amount of benefit payable (Equal to sum of the Benefit amounts from all detail lines and additions less the Unallocated Deductable).
     */  "name": "totalBenefit", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*Adjustment to the payment of this transaction which is not related to adjudication of this transaction.
     */  "name": "paymentAdjustment", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*Reason for the payment adjustment.
     */  "name": "paymentAdjustmentReason", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Estimated payment data.
     */  "name": "paymentDate", 
    
      "min": "0", 
      "max": "1", 
      "type": "date",
      "isPrimitive": true }, 
    { 
    /*Payable less any payment adjustment.
     */  "name": "paymentAmount", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*Payment identifer.
     */  "name": "paymentRef", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Status of funds reservation (For provider, for Patient, None).
     */  "name": "reserved", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The form to be used for printing the content.
     */  "name": "form", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Note text.
     */  "name": "note", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ClaimResponse.Note",
      "isPrimitive": false }, 
    { 
    /*Financial instrument by which payment information for health care.
     */  "name": "coverage", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ClaimResponse.Coverage",
      "isPrimitive": false }, 
  ]
},
"ClaimResponse.Item": {
    /*This resource provides the adjudication details from the processing of a Claim resource.
     */
  "name": "ClaimResponse.Item",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A service line number.
     */  "name": "sequenceLinkId", 
    
      "min": "1", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*A list of note references to the notes provided below.
     */  "name": "noteNumber", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*The adjudications results.
     */  "name": "adjudication", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ClaimResponse.Adjudication",
      "isPrimitive": false }, 
    { 
    /*The second tier service adjudications for submitted services.
     */  "name": "detail", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ClaimResponse.Detail",
      "isPrimitive": false }, 
  ]
},
"ClaimResponse.Adjudication": {
    /*This resource provides the adjudication details from the processing of a Claim resource.
     */
  "name": "ClaimResponse.Adjudication",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Code indicating: Co-Pay, deductable, elegible, benefit, tax, etc.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Monitory amount associated with the code.
     */  "name": "amount", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
     */  "name": "value", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
  ]
},
"ClaimResponse.Detail": {
    /*This resource provides the adjudication details from the processing of a Claim resource.
     */
  "name": "ClaimResponse.Detail",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A service line number.
     */  "name": "sequenceLinkId", 
    
      "min": "1", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*The adjudications results.
     */  "name": "adjudication", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ClaimResponse.Adjudication1",
      "isPrimitive": false }, 
    { 
    /*The third tier service adjudications for submitted services.
     */  "name": "subDetail", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ClaimResponse.SubDetail",
      "isPrimitive": false }, 
  ]
},
"ClaimResponse.Adjudication1": {
    /*This resource provides the adjudication details from the processing of a Claim resource.
     */
  "name": "ClaimResponse.Adjudication1",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Code indicating: Co-Pay, deductable, elegible, benefit, tax, etc.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Monitory amount associated with the code.
     */  "name": "amount", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
     */  "name": "value", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
  ]
},
"ClaimResponse.SubDetail": {
    /*This resource provides the adjudication details from the processing of a Claim resource.
     */
  "name": "ClaimResponse.SubDetail",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A service line number.
     */  "name": "sequenceLinkId", 
    
      "min": "1", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*The adjudications results.
     */  "name": "adjudication", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ClaimResponse.Adjudication2",
      "isPrimitive": false }, 
  ]
},
"ClaimResponse.Adjudication2": {
    /*This resource provides the adjudication details from the processing of a Claim resource.
     */
  "name": "ClaimResponse.Adjudication2",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Code indicating: Co-Pay, deductable, elegible, benefit, tax, etc.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Monitory amount associated with the code.
     */  "name": "amount", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
     */  "name": "value", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
  ]
},
"ClaimResponse.AddItem": {
    /*This resource provides the adjudication details from the processing of a Claim resource.
     */
  "name": "ClaimResponse.AddItem",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*List of input service items which this service line is intended to replace.
     */  "name": "sequenceLinkId", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*A code to indicate the Professional Service or Product supplied.
     */  "name": "service", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The fee charged for the professional service or product..
     */  "name": "fee", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*A list of note references to the notes provided below.
     */  "name": "noteNumberLinkId", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*The adjudications results.
     */  "name": "adjudication", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ClaimResponse.Adjudication3",
      "isPrimitive": false }, 
    { 
    /*The second tier service adjudications for payor added services.
     */  "name": "detail", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ClaimResponse.Detail1",
      "isPrimitive": false }, 
  ]
},
"ClaimResponse.Adjudication3": {
    /*This resource provides the adjudication details from the processing of a Claim resource.
     */
  "name": "ClaimResponse.Adjudication3",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Code indicating: Co-Pay, deductable, elegible, benefit, tax, etc.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Monitory amount associated with the code.
     */  "name": "amount", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
     */  "name": "value", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
  ]
},
"ClaimResponse.Detail1": {
    /*This resource provides the adjudication details from the processing of a Claim resource.
     */
  "name": "ClaimResponse.Detail1",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A code to indicate the Professional Service or Product supplied.
     */  "name": "service", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The fee charged for the professional service or product..
     */  "name": "fee", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*The adjudications results.
     */  "name": "adjudication", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ClaimResponse.Adjudication4",
      "isPrimitive": false }, 
  ]
},
"ClaimResponse.Adjudication4": {
    /*This resource provides the adjudication details from the processing of a Claim resource.
     */
  "name": "ClaimResponse.Adjudication4",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Code indicating: Co-Pay, deductable, elegible, benefit, tax, etc.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Monitory amount associated with the code.
     */  "name": "amount", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
     */  "name": "value", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
  ]
},
"ClaimResponse.Error": {
    /*This resource provides the adjudication details from the processing of a Claim resource.
     */
  "name": "ClaimResponse.Error",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The sequence number of the line item submitted which contains the error. This value is ommitted when the error is elsewhere.
     */  "name": "sequenceLinkId", 
    
      "min": "0", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*The sequence number of the addition within the line item submitted which contains the error. This value is ommitted when the error is not related to an Addition.
     */  "name": "detailSequenceLinkId", 
    
      "min": "0", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*The sequence number of the addition within the line item submitted which contains the error. This value is ommitted when the error is not related to an Addition.
     */  "name": "subdetailSequenceLinkId", 
    
      "min": "0", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*An error code,froma specified code system, which details why the claim could not be adjudicated.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
  ]
},
"ClaimResponse.Note": {
    /*This resource provides the adjudication details from the processing of a Claim resource.
     */
  "name": "ClaimResponse.Note",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An integer associated with each note which may be referred to from each service line item.
     */  "name": "number", 
    
      "min": "0", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*The note purpose: Print/Display.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The note text.
     */  "name": "text", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"ClaimResponse.Coverage": {
    /*This resource provides the adjudication details from the processing of a Claim resource.
     */
  "name": "ClaimResponse.Coverage",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A service line item.
     */  "name": "sequence", 
    
      "min": "1", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*The instance number of the Coverage which is the focus for adjudication. The Coverage against which the claim is to be adjudicated.
     */  "name": "focal", 
    
      "min": "1", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Reference to the program or plan identification, underwriter or payor.
     */  "name": "coverage", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The contract number of a business agreement which describes the terms and conditions.
     */  "name": "businessArrangement", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The relationship of the patient to the subscriber.
     */  "name": "relationship", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*A list of references from the Insurer to which these services pertain.
     */  "name": "preAuthRef", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The Coverages adjudication details.
     */  "name": "claimResponse", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The style (standard) and version of the original material which was converted into this resource.
     */  "name": "originalRuleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
  ]
},
"ClinicalImpression": {
    /*A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ClinicalImpression",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The patient being assessed.
     */  "name": "patient", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The clinician performing the assessment.
     */  "name": "assessor", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifies the workflow status of the assessment.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "ClinicalImpressionStatus",
      "isPrimitive": true }, 
    { 
    /*The point in time at which the assessment was concluded (not when it was recorded).
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*A summary of the context and/or cause of the assessment - why / where was it peformed, and what patient events/sstatus prompted it.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A reference to the last assesment that was conducted bon this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient's conditions changes.
     */  "name": "previous", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*This a list of the general problems/conditions for a patient.
     */  "name": "problem", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*The request or event that necessitated this assessment. This may be a diagnosis, a Care Plan, a Request Referral, or some other resource.
     */
        {   "name": "triggerCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "triggerReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*One or more sets of investigations (signs, symptions, etc). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
     */  "name": "investigations", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ClinicalImpression.Investigations",
      "isPrimitive": false }, 
    { 
    /*Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
     */  "name": "protocol", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*A text summary of the investigations and the diagnosis.
     */  "name": "summary", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.
     */  "name": "finding", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ClinicalImpression.Finding",
      "isPrimitive": false }, 
    { 
    /*Diagnoses/conditions resolved since the last assessment.
     */  "name": "resolved", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Diagnosis considered not possible.
     */  "name": "ruledOut", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ClinicalImpression.RuledOut",
      "isPrimitive": false }, 
    { 
    /*Estimate of likely outcome.
     */  "name": "prognosis", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Plan of action after assessment.
     */  "name": "plan", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Actions taken during assessment.
     */  "name": "action", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"ClinicalImpression.Investigations": {
    /*A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
     */
  "name": "ClinicalImpression.Investigations",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutitirional) history may be used.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A record of a specific investigation that was undertaken.
     */  "name": "item", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"ClinicalImpression.Finding": {
    /*A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
     */
  "name": "ClinicalImpression.Finding",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Specific text of code for finding or diagnosis.
     */  "name": "item", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Which investigations support finding or diagnosis.
     */  "name": "cause", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"ClinicalImpression.RuledOut": {
    /*A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
     */
  "name": "ClinicalImpression.RuledOut",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Specific text of code for diagnosis.
     */  "name": "item", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Grounds for elimination.
     */  "name": "reason", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"ClinicalImpressionStatus": {
    /*The workflow state of a clinical impressionIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ClinicalImpressionStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ClinicalImpressionStatus-list" }, 
  ],
  "elems": [
  ]
},
"Communication": {
    /*An occurrence of information being transmitted. E.g., an alert that was sent to a responsible provider, a public health agency was notified about a reportable condition.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Communication",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifiers associated with this Communication that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The type of message conveyed such as alert, notification, reminder, instruction, etc.
     */  "name": "category", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The entity (e.g., person, organization, clinical information system, or device) which was the source of the communication.
     */  "name": "sender", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The entity (e.g., person, organization, clinical information system, or device) which was the target of the communication. If receipts need to be tracked by individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either a receipt(s) is not tracked (e.g. a mass mail-out) or is captured in aggregate (all emails confirmed received by a particular time).
     */  "name": "recipient", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Text, attachment(s), or resource(s) that was communicated to the recipient.
     */  "name": "payload", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Communication.Payload",
      "isPrimitive": false }, 
    { 
    /*A channel that was used for this communication (e.g. email, fax).
     */  "name": "medium", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The status of the transmission.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "CommunicationStatus",
      "isPrimitive": true }, 
    { 
    /*The encounter within which the communication was sent.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The time when this communication was sent.
     */  "name": "sent", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The time when this communication arrived at the destination.
     */  "name": "received", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The reason or justification for the communication.
     */  "name": "reason", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The patient who was the focus of this communication.
     */  "name": "subject", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The communication request that was responsible for producing this communication.
     */  "name": "requestDetail", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"Communication.Payload": {
    /*An occurrence of information being transmitted. E.g., an alert that was sent to a responsible provider, a public health agency was notified about a reportable condition.
     */
  "name": "Communication.Payload",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    [ /* Choice */ 
    /*A communicated content (or for multi-part communications, one portion of the communication).
     */
        {   "name": "contentString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
        {   "name": "contentAttachment", 
        
          "min": "1", 
          "max": "1", 
          "type": "Attachment",
          "isPrimitive": false }, 
        {   "name": "contentReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
  ]
},
"CommunicationStatus": {
    /*The status of the communicationIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "CommunicationStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "CommunicationStatus-list" }, 
  ],
  "elems": [
  ]
},
"CommunicationRequest": {
    /*A request to convey information. E.g., the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "CommunicationRequest",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A unique ID of this request for reference purposes. It must be provided if user wants it returned as part of any output, otherwise it will be auto-generated, if needed, by CDS system. Does not need to be the actual ID of the source system.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The type of message to be sent such as alert, notification, reminder, instruction, etc.
     */  "name": "category", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The entity (e.g., person, organization, clinical information system, or device) which is to be the source of the communication.
     */  "name": "sender", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The entity (e.g., person, organization, clinical information system, or device) which is the intended target of the communication.
     */  "name": "recipient", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Text, attachment(s), or resource(s) to be communicated to the recipient.
     */  "name": "payload", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CommunicationRequest.Payload",
      "isPrimitive": false }, 
    { 
    /*A channel that was used for this communication (e.g. email, fax).
     */  "name": "medium", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The responsible person who authorizes this order, e.g., physician. This may be different than the author of the order statement, e.g., clerk, who may have entered the statement into the order entry application.
     */  "name": "requester", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The status of the proposal or order.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "CommunicationRequestStatus",
      "isPrimitive": true }, 
    { 
    /*The encounter within which the communication request was created.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*The time when this communication is to occur.
     */
        {   "name": "scheduledDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "scheduledPeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
    ], 
    { 
    /*The reason or justification for the communication request.
     */  "name": "reason", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The time when the request was made.
     */  "name": "requestedOn", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The patient who is the focus of this communication request.
     */  "name": "subject", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
     */  "name": "priority", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
  ]
},
"CommunicationRequest.Payload": {
    /*A request to convey information. E.g., the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
     */
  "name": "CommunicationRequest.Payload",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    [ /* Choice */ 
    /*The communicated content (or for multi-part communications, one portion of the communication).
     */
        {   "name": "contentString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
        {   "name": "contentAttachment", 
        
          "min": "1", 
          "max": "1", 
          "type": "Attachment",
          "isPrimitive": false }, 
        {   "name": "contentReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
  ]
},
"CommunicationRequestStatus": {
    /*The status of the communicationIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "CommunicationRequestStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "CommunicationRequestStatus-list" }, 
  ],
  "elems": [
  ]
},
"Composition": {
    /*A set of healthcare-related information that is assembled together into a single logical document that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. While a Composition defines the structure, it does not actually contain the content: rather the full content of a document is contained in a Bundle, of which the Composition is the first resource contained.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Composition",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Logical Identifier for the composition, assigned when created. This identifier stays constant as the composition is changed over time.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The composition editing time, when the composition was last logically changed by the author.
     */  "name": "date", 
    
      "min": "1", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A categorization for the type of the composition - helps for indexing and searching. This may be implied by or derived from the code specified in the Composition Type.
     */  "name": "class", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Official human-readable label for the composition.
     */  "name": "title", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "CompositionStatus",
      "isPrimitive": true }, 
    { 
    /*The code specifying the level of confidentiality of the Composition.
     */  "name": "confidentiality", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (I.e. machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure).
     */  "name": "subject", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifies who is responsible for the information in the composition.  (Not necessarily who typed it in.).
     */  "name": "author", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*A participant who has attested to the accuracy of the composition/document.
     */  "name": "attester", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Composition.Attester",
      "isPrimitive": false }, 
    { 
    /*Identifies the organization or group who is responsible for ongoing maintenance of and access to the composition/document information.
     */  "name": "custodian", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The clinical service, such as a colonoscopy or an appendectomy, being documented.
     */  "name": "event", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Composition.Event",
      "isPrimitive": false }, 
    { 
    /*Describes the clinical encounter or type of care this documentation is associated with.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The root of the sections that make up the composition.
     */  "name": "section", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Composition.Section",
      "isPrimitive": false }, 
  ]
},
"Composition.Attester": {
    /*A set of healthcare-related information that is assembled together into a single logical document that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. While a Composition defines the structure, it does not actually contain the content: rather the full content of a document is contained in a Bundle, of which the Composition is the first resource contained.
     */
  "name": "Composition.Attester",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The type of attestation the authenticator offers.
     */  "name": "mode", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "CompositionAttestationMode",
      "isPrimitive": true }, 
    { 
    /*When composition was attested by the party.
     */  "name": "time", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Who attested the composition in the specified way.
     */  "name": "party", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"Composition.Event": {
    /*A set of healthcare-related information that is assembled together into a single logical document that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. While a Composition defines the structure, it does not actually contain the content: rather the full content of a document is contained in a Bundle, of which the Composition is the first resource contained.
     */
  "name": "Composition.Event",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act.
     */  "name": "code", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.
     */  "name": "detail", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"Composition.Section": {
    /*A set of healthcare-related information that is assembled together into a single logical document that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. While a Composition defines the structure, it does not actually contain the content: rather the full content of a document is contained in a Bundle, of which the Composition is the first resource contained.
     */
  "name": "Composition.Section",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The label for this particular section.  This will be part of the rendered content for the document, and is often used to build a table of contents.
     */  "name": "title", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A code identifying the kind of content contained within the section. This must be consistent with the section title.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A human-readable narrative that contains the attested content of the section, used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative.
     */  "name": "text", 
    
      "min": "0", 
      "max": "1", 
      "type": "Narrative",
      "isPrimitive": false }, 
    { 
    /*How the entry list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.
     */  "name": "mode", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*What order applies to the items in the section entries.
     */  "name": "orderedBy", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A reference to the actual resource from which the narrative in the section is derived.
     */  "name": "entry", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason.
     */  "name": "emptyReason", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A nested sub-section within this section.
     */  "name": "section", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Composition.Section",
      "isPrimitive": false }, 
  ]
},
"CompositionStatus": {
    /*The workflow/clinical status of the compositionIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "CompositionStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "CompositionStatus-list" }, 
  ],
  "elems": [
  ]
},
"CompositionAttestationMode": {
    /*The way in which a person authenticated a compositionIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "CompositionAttestationMode",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "CompositionAttestationMode-list" }, 
  ],
  "elems": [
  ]
},
"ConceptMap": {
    /*A statement of relationships from one set of concepts to one or more other concepts - either code systems or data elements, or classes in class models.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ConceptMap",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An absolute URL that is used to identify this concept map when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this concept map is (or will be) published.
     */  "name": "url", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*Formal identifier that is used to identify this concept map when it is represented in other formats, or referenced in a specification, model, design or an instance.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The identifier that is used to identify this version of the concept map when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.
     */  "name": "version", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A free text natural language name describing the concept map.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The status of the concept map.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*This ConceptMap was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */  "name": "experimental", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*The name of the individual or organization that published the concept map.
     */  "name": "publisher", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contacts to assist a user in finding and communicating with the publisher.
     */  "name": "contact", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ConceptMap.Contact",
      "isPrimitive": false }, 
    { 
    /*The date that this version of the concept map was published. The date must change when the business version changes, if it does, and it must change if the status code changes. in addition, it should change when the substantiative content of the concept map changes.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*A free text natural language description of the use of the concept map - reason for definition, conditions of use, etc.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of concept maps.
     */  "name": "useContext", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Explains why this concept map is needed and why it's been constrained as it has.
     */  "name": "requirements", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A copyright statement relating to the concept map and/or its contents.
     */  "name": "copyright", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    [ /* Choice */ 
    /*The source value set that specifies the concepts that are being mapped.
     */
        {   "name": "sourceUri", 
        
          "min": "1", 
          "max": "1", 
          "type": "uri",
          "isPrimitive": true }, 
        {   "name": "sourceReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    [ /* Choice */ 
    /*The target value set provides context to the mappings. Note that the mapping is made between concepts, not between value sets, but the value set provides important context about how the concept mapping choices are made.
     */
        {   "name": "targetUri", 
        
          "min": "1", 
          "max": "1", 
          "type": "uri",
          "isPrimitive": true }, 
        {   "name": "targetReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*Mappings for an individual concept in the source to one or more concepts in the target.
     */  "name": "element", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ConceptMap.Element",
      "isPrimitive": false }, 
  ]
},
"ConceptMap.Contact": {
    /*A statement of relationships from one set of concepts to one or more other concepts - either code systems or data elements, or classes in class models.
     */
  "name": "ConceptMap.Contact",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The name of an individual to contact regarding the concept map.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contact details for individual (if a name was provided) or the publisher.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
  ]
},
"ConceptMap.Element": {
    /*A statement of relationships from one set of concepts to one or more other concepts - either code systems or data elements, or classes in class models.
     */
  "name": "ConceptMap.Element",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An absolute URI that identifies the Code System (if the source is a value set that crosses more than one code system).
     */  "name": "codeSystem", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*Identity (code or path) or the element/item being mapped.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*A concept from the target value set that this concept maps to.
     */  "name": "target", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ConceptMap.Target",
      "isPrimitive": false }, 
  ]
},
"ConceptMap.Target": {
    /*A statement of relationships from one set of concepts to one or more other concepts - either code systems or data elements, or classes in class models.
     */
  "name": "ConceptMap.Target",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An absolute URI that identifies the code system of the target code (if the target is a value set that cross code systems).
     */  "name": "codeSystem", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*Identity (code or path) or the element/item that the map refers to.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is 'wider' than the source).
     */  "name": "equivalence", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*A description of status/issues in mapping that conveys additional information not represented in  the structured data.
     */  "name": "comments", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.
     */  "name": "dependsOn", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ConceptMap.DependsOn",
      "isPrimitive": false }, 
    { 
    /*A set of additional outcomes from this mapping to other elements. To properly execute this mapping, the specified element must be mapped to some data element or source that is in context. The mapping may still be useful without a place for the additional data elements, but the equivalence cannot be relied on.
     */  "name": "product", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ConceptMap.DependsOn",
      "isPrimitive": false }, 
  ]
},
"ConceptMap.DependsOn": {
    /*A statement of relationships from one set of concepts to one or more other concepts - either code systems or data elements, or classes in class models.
     */
  "name": "ConceptMap.DependsOn",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A reference to a specific concept that holds a coded value. This can be an element in a FHIR resource, or a specific reference to a data element in a different specification (e.g. v2) or a general reference to a kind of data field, or a reference to a value set with an appropriately narrow definition.
     */  "name": "element", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).
     */  "name": "codeSystem", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*Identity (code or path) or the element/item that the map depends on / refers to.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"Condition": {
    /*Use to record detailed information about conditions, problems or diagnoses recognized by a clinician. There are many uses including: recording a Diagnosis during an Encounter; populating a problem List or a Summary Statement, such as a Discharge Summary.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Condition",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*This records identifiers associated with this condition that are defined by business processed and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Indicates the patient who the condition record is associated with.
     */  "name": "patient", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Encounter during which the condition was first asserted.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Individual who is making the condition statement.
     */  "name": "asserter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*A date, when  the Condition statement was documented.
     */  "name": "dateRecorded", 
    
      "min": "0", 
      "max": "1", 
      "type": "date",
      "isPrimitive": true }, 
    { 
    /*Identification of the condition, problem or diagnosis.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A category assigned to the condition.
     */  "name": "category", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The clinical status of the condition.
     */  "name": "clinicalStatus", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*The verification status to support the clinical status of the condition.
     */  "name": "verificationStatus", 
    
      "min": "1", 
      "max": "1", 
      "type": "ConditionVerificationStatus",
      "isPrimitive": true }, 
    { 
    /*A subjective assessment of the severity of the condition as evaluated by the clinician.
     */  "name": "severity", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*Estimated or actual date or date-time  the condition began, in the opinion of the clinician.
     */
        {   "name": "onsetDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "onsetQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "Age",
          "isPrimitive": false }, 
        {   "name": "onsetPeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
        {   "name": "onsetRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
        {   "name": "onsetString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
    ], 
    [ /* Choice */ 
    /*The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate.
     */
        {   "name": "abatementDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "abatementQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "Age",
          "isPrimitive": false }, 
        {   "name": "abatementBoolean", 
        
          "min": "1", 
          "max": "1", 
          "type": "boolean",
          "isPrimitive": true }, 
        {   "name": "abatementPeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
        {   "name": "abatementRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
        {   "name": "abatementString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
    ], 
    { 
    /*Clinical stage or grade of a condition. May include formal severity assessments.
     */  "name": "stage", 
    
      "min": "0", 
      "max": "1", 
      "type": "Condition.Stage",
      "isPrimitive": false }, 
    { 
    /*Supporting Evidence / manifestations that are the basis on which this condition is suspected or confirmed.
     */  "name": "evidence", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Condition.Evidence",
      "isPrimitive": false }, 
    { 
    /*The anatomical location where this condition manifests itself.
     */  "name": "bodySite", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
     */  "name": "notes", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"Condition.Stage": {
    /*Use to record detailed information about conditions, problems or diagnoses recognized by a clinician. There are many uses including: recording a Diagnosis during an Encounter; populating a problem List or a Summary Statement, such as a Discharge Summary.
     */
  "name": "Condition.Stage",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
     */  "name": "summary", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Reference to a formal record of the evidence on which the staging assessment is based.
     */  "name": "assessment", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"Condition.Evidence": {
    /*Use to record detailed information about conditions, problems or diagnoses recognized by a clinician. There are many uses including: recording a Diagnosis during an Encounter; populating a problem List or a Summary Statement, such as a Discharge Summary.
     */
  "name": "Condition.Evidence",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A manifestation or symptom that led to the recording of this condition.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Links to other relevant information, including pathology reports.
     */  "name": "detail", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"ConditionVerificationStatus": {
    /*The verification status to support or decline the clinical status of the Condition or diagnosis.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ConditionVerificationStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ConditionVerificationStatus-list" }, 
  ],
  "elems": [
  ]
},
"Conformance": {
    /*A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Conformance",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An absolute URL that is used to identify this conformance statement when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this conformance statement is (or will be) published.
     */  "name": "url", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*The identifier that is used to identify this version of the conformance statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.
     */  "name": "version", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A free text natural language name identifying the conformance statement.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The status of this conformance statement.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*A flag to indicate that this conformance statement is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */  "name": "experimental", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*The name of the individual or organization that published the conformance.
     */  "name": "publisher", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contacts to assist a user in finding and communicating with the publisher.
     */  "name": "contact", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Conformance.Contact",
      "isPrimitive": false }, 
    { 
    /*The date  (and optionally time) when the conformance statement was published. The date must change when the business version changes, if it does, and it must change if the status code changes. in addition, it should change when the substantiative content of the conformance statement changes.
     */  "name": "date", 
    
      "min": "1", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*A free text natural language description of the conformance statement and its use. Typically, this is used when the conformance statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Explains why this conformance statement is needed and why it's been constrained as it has.
     */  "name": "requirements", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A copyright statement relating to the conformamce statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the system described by the conformance statement.
     */  "name": "copyright", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind not instance of software) or a class of implementation (e.g. a desired purchase).
     */  "name": "kind", 
    
      "min": "1", 
      "max": "1", 
      "type": "ConformanceStatementKind",
      "isPrimitive": true }, 
    { 
    /*Software that is covered by this conformance statement.  It is used when the conformance statement describes the capabilities of a particular software version, independent of an installation.
     */  "name": "software", 
    
      "min": "0", 
      "max": "1", 
      "type": "Conformance.Software",
      "isPrimitive": false }, 
    { 
    /*Identifies a specific implementation instance that is described by the conformance statement - i.e. a particular installation, rather than the capabilities of a software program.
     */  "name": "implementation", 
    
      "min": "0", 
      "max": "1", 
      "type": "Conformance.Implementation",
      "isPrimitive": false }, 
    { 
    /*The version of the FHIR specification on which this conformance statement is based.
     */  "name": "fhirVersion", 
    
      "min": "1", 
      "max": "1", 
      "type": "id",
      "isPrimitive": true }, 
    { 
    /*A code that indicates whether the application accepts unknown elements or extensions when reading resources.
     */  "name": "acceptUnknown", 
    
      "min": "1", 
      "max": "1", 
      "type": "UnknownContentCode",
      "isPrimitive": true }, 
    { 
    /*A list of the formats supported by this implementation using their content types.
     */  "name": "format", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*A list of profiles that represent different use cases supported by the system. For a server, "supported by the system" means the system hosts/produces a set of resources that are conformant to a particular profile, and allows clients that use its services to search using this profile and to find appropriate data. For a client, it means the system will search by this profile and process data according to the guidance implicit in the profile. See further discussion in [Using Profiles]{profiling.html#profile-uses}.
     */  "name": "profile", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*A definition of the restful capabilities of the solution, if any.
     */  "name": "rest", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Conformance.Rest",
      "isPrimitive": false }, 
    { 
    /*A description of the messaging capabilities of the solution.
     */  "name": "messaging", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Conformance.Messaging",
      "isPrimitive": false }, 
    { 
    /*A document definition.
     */  "name": "document", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Conformance.Document",
      "isPrimitive": false }, 
  ]
},
"Conformance.Contact": {
    /*A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
  "name": "Conformance.Contact",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The name of an individual to contact regarding the conformance.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contact details for individual (if a name was provided) or the publisher.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
  ]
},
"Conformance.Software": {
    /*A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
  "name": "Conformance.Software",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Name software is known by.
     */  "name": "name", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The version identifier for the software covered by this statement.
     */  "name": "version", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Date this version of the software released.
     */  "name": "releaseDate", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
  ]
},
"Conformance.Implementation": {
    /*A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
  "name": "Conformance.Implementation",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Information about the specific installation that this conformance statement relates to.
     */  "name": "description", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.
     */  "name": "url", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
  ]
},
"Conformance.Rest": {
    /*A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
  "name": "Conformance.Rest",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifies whether this portion of the statement is describing ability to initiate or receive restful operations.
     */  "name": "mode", 
    
      "min": "1", 
      "max": "1", 
      "type": "RestfulConformanceMode",
      "isPrimitive": true }, 
    { 
    /*Information about the system's restful capabilities that apply across all applications, such as security.
     */  "name": "documentation", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Information about security implementation from an interface perspective - what a client needs to know.
     */  "name": "security", 
    
      "min": "0", 
      "max": "1", 
      "type": "Conformance.Security",
      "isPrimitive": false }, 
    { 
    /*A specification of the restful capabilities of the solution for a specific resource type.
     */  "name": "resource", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "Conformance.Resource",
      "isPrimitive": false }, 
    { 
    /*A specification of restful operations supported by the system.
     */  "name": "interaction", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Conformance.Interaction1",
      "isPrimitive": false }, 
    { 
    /*A code that indicates how transactions are supported.
     */  "name": "transactionMode", 
    
      "min": "0", 
      "max": "1", 
      "type": "TransactionMode",
      "isPrimitive": true }, 
    { 
    /*Search parameters that are supported for searching all resources for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
     */  "name": "searchParam", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Conformance.SearchParam",
      "isPrimitive": false }, 
    { 
    /*Definition of an operation or a named query and with its parameters and their meaning and type.
     */  "name": "operation", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Conformance.Operation",
      "isPrimitive": false }, 
    { 
    /*An absolute URI which is a reference to the definition of a compartment hosted by the system.
     */  "name": "compartment", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "uri",
      "isPrimitive": true }, 
  ]
},
"Conformance.Security": {
    /*A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
  "name": "Conformance.Security",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Server adds CORS headers when responding to requests - this enables javascript applications to use the server.
     */  "name": "cors", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Types of security services are supported/required by the system.
     */  "name": "service", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*General description of how security works.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Certificates associated with security profiles.
     */  "name": "certificate", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Conformance.Certificate",
      "isPrimitive": false }, 
  ]
},
"Conformance.Certificate": {
    /*A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
  "name": "Conformance.Certificate",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Mime type for certificate.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*Actual certificate.
     */  "name": "blob", 
    
      "min": "0", 
      "max": "1", 
      "type": "base64Binary",
      "isPrimitive": true }, 
  ]
},
"Conformance.Resource": {
    /*A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
  "name": "Conformance.Resource",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A type of resource exposed via the restful interface.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*A specification of the profile that describes the solution's overall support for the resource, including any constraints on cardinality, bindings, lengths or other limitations. See further discussion in [Using Profiles]{profiling.html#profile-uses}.
     */  "name": "profile", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifies a restful operation supported by the solution.
     */  "name": "interaction", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "Conformance.Interaction",
      "isPrimitive": false }, 
    { 
    /*This field is set to no-version to specify that the system does not support (server) or use (client) versioning for this resource type. If this has some other value, the server must at least correctly track and populate the versionId meta-property on resources. If the value is 'versioned-update', then the server supports all the versioning features, including using e-tags for version integrity in the API.
     */  "name": "versioning", 
    
      "min": "0", 
      "max": "1", 
      "type": "ResourceVersionPolicy",
      "isPrimitive": true }, 
    { 
    /*A flag for whether the server is able to return past versions as part of the vRead operation.
     */  "name": "readHistory", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*A flag to indicate that the server allows or needs to allow the client to create new identities on the server (e.g. that is, the client PUTs to a location where there is no existing resource). Allowing this operation means that the server allows the client to create new identities on the server.
     */  "name": "updateCreate", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*A flag that indicates that the server supports conditional create.
     */  "name": "conditionalCreate", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*A flag that indicates that the server supports conditional update.
     */  "name": "conditionalUpdate", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*A code that indicates how the server supports conditional delete.
     */  "name": "conditionalDelete", 
    
      "min": "0", 
      "max": "1", 
      "type": "ConditionalDeleteStatus",
      "isPrimitive": true }, 
    { 
    /*A list of _include values supported by the server.
     */  "name": "searchInclude", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A list of _revinclude (reverse include) values supported by the server.
     */  "name": "searchRevInclude", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
     */  "name": "searchParam", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Conformance.SearchParam",
      "isPrimitive": false }, 
  ]
},
"Conformance.Interaction": {
    /*A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
  "name": "Conformance.Interaction",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Coded identifier of the operation, supported by the system resource.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "TypeRestfulInteraction",
      "isPrimitive": true }, 
    { 
    /*Guidance specific to the implementation of this operation, such as 'delete is a logical delete' or 'updates are only allowed with version id' or 'creates permitted from pre-authorized certificates only'.
     */  "name": "documentation", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"Conformance.SearchParam": {
    /*A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
  "name": "Conformance.SearchParam",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The name of the search parameter used in the interface.
     */  "name": "name", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*An absolute URI that is a formal reference to where this parameter was first defined, so that a client can be confident of the meaning of the search parameter (a reference to [[[SearchParameter.url]]]).
     */  "name": "definition", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*The type of value a search parameter refers to, and how the content is interpreted.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.
     */  "name": "documentation", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Types of resource (if a resource is referenced).
     */  "name": "target", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*A modifier supported for the search parameter.
     */  "name": "modifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "SearchModifierCode",
      "isPrimitive": true }, 
    { 
    /*Contains the names of any search parameters which may be chained to the containing search parameter. Chained parameters may be added to search parameters of type reference, and specify that resources will only be returned if they contain a reference to a resource which matches the chained parameter value. Values for this field should be drawn from Conformance.rest.resource.searchParam.name on the target resource type.
     */  "name": "chain", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"Conformance.Interaction1": {
    /*A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
  "name": "Conformance.Interaction1",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A coded identifier of the operation, supported by the system.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "SystemRestfulInteraction",
      "isPrimitive": true }, 
    { 
    /*Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.
     */  "name": "documentation", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"Conformance.Operation": {
    /*A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
  "name": "Conformance.Operation",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The name of a query, which is used in the _query parameter when the query is called.
     */  "name": "name", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Where the formal definition can be found.
     */  "name": "definition", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"Conformance.Messaging": {
    /*A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
  "name": "Conformance.Messaging",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An endpoint (network accessible address) to which messages and/or replies are to be sent.
     */  "name": "endpoint", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Conformance.Endpoint",
      "isPrimitive": false }, 
    { 
    /*Length if the receiver's reliable messaging cache in minutes (if a receiver) or how long the cache length on the receiver should be (if a sender).
     */  "name": "reliableCache", 
    
      "min": "0", 
      "max": "1", 
      "type": "unsignedInt",
      "isPrimitive": true }, 
    { 
    /*Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the conformance statement.  For example, process for becoming an authorized messaging exchange partner.
     */  "name": "documentation", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A description of the solution's support for an event at this end point.
     */  "name": "event", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "Conformance.Event",
      "isPrimitive": false }, 
  ]
},
"Conformance.Endpoint": {
    /*A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
  "name": "Conformance.Endpoint",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A list of the messaging transport protocol(s) identifiers, supported by this endpoint.
     */  "name": "protocol", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The network address of the end-point. For solutions that do not use network addresses for routing, it can be just an identifier.
     */  "name": "address", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
  ]
},
"Conformance.Event": {
    /*A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
  "name": "Conformance.Event",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A coded identifier of a supported messaging event.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The impact of the content of the message.
     */  "name": "category", 
    
      "min": "0", 
      "max": "1", 
      "type": "MessageSignificanceCategory",
      "isPrimitive": true }, 
    { 
    /*The mode of this event declaration - whether application is sender or receiver.
     */  "name": "mode", 
    
      "min": "1", 
      "max": "1", 
      "type": "ConformanceEventMode",
      "isPrimitive": true }, 
    { 
    /*A resource associated with the event.  This is the resource that defines the event.
     */  "name": "focus", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*Information about the request for this event.
     */  "name": "request", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Information about the response for this event.
     */  "name": "response", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Guidance on how this event is handled, such as internal system trigger points, business rules, etc.
     */  "name": "documentation", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"Conformance.Document": {
    /*A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
     */
  "name": "Conformance.Document",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Mode of this document declaration - whether application is producer or consumer.
     */  "name": "mode", 
    
      "min": "1", 
      "max": "1", 
      "type": "DocumentMode",
      "isPrimitive": true }, 
    { 
    /*A description of how the application supports or uses the specified document profile.  For example, when are documents created, what action is taken with consumed documents, etc.
     */  "name": "documentation", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A constraint on a resource used in the document.
     */  "name": "profile", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"ResourceVersionPolicy": {
    /*How the system supports versioning for a resourceIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ResourceVersionPolicy",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ResourceVersionPolicy-list" }, 
  ],
  "elems": [
  ]
},
"MessageSignificanceCategory": {
    /*The impact of the content of a messageIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "MessageSignificanceCategory",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "MessageSignificanceCategory-list" }, 
  ],
  "elems": [
  ]
},
"TransactionMode": {
    /*A code that indicates how transactions are supportedIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "TransactionMode",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "TransactionMode-list" }, 
  ],
  "elems": [
  ]
},
"DocumentMode": {
    /*Whether the application produces or consumes documentsIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DocumentMode",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "DocumentMode-list" }, 
  ],
  "elems": [
  ]
},
"ConformanceStatementKind": {
    /*How a conformance statement is intended to be usedIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ConformanceStatementKind",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ConformanceStatementKind-list" }, 
  ],
  "elems": [
  ]
},
"SearchModifierCode": {
    /*A supported modifier for a search parameterIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "SearchModifierCode",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "SearchModifierCode-list" }, 
  ],
  "elems": [
  ]
},
"UnknownContentCode": {
    /*A code that indicates whether an application accepts unknown elements or extensions when reading resourcesIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "UnknownContentCode",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "UnknownContentCode-list" }, 
  ],
  "elems": [
  ]
},
"TypeRestfulInteraction": {
    /*Operations supported by REST at the type or instance levelIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "TypeRestfulInteraction",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "TypeRestfulInteraction-list" }, 
  ],
  "elems": [
  ]
},
"ConformanceEventMode": {
    /*The mode of a message conformance statementIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ConformanceEventMode",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ConformanceEventMode-list" }, 
  ],
  "elems": [
  ]
},
"SystemRestfulInteraction": {
    /*Operations supported by REST at the system levelIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "SystemRestfulInteraction",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "SystemRestfulInteraction-list" }, 
  ],
  "elems": [
  ]
},
"RestfulConformanceMode": {
    /*The mode of a RESTful conformance statementIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "RestfulConformanceMode",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "RestfulConformanceMode-list" }, 
  ],
  "elems": [
  ]
},
"ConditionalDeleteStatus": {
    /*A code that indicates how the server supports conditional deleteIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ConditionalDeleteStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ConditionalDeleteStatus-list" }, 
  ],
  "elems": [
  ]
},
"Contract": {
    /*A formal agreement between parties regarding the conduct of business, exchange of information or other matters.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Contract",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Unique identifier for this Contract.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*When this  Contract was issued.
     */  "name": "issued", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Relevant time or time-period when this Contract is applicable.
     */  "name": "applies", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*Who and/or what this Contract is about: typically a Patient, Organization, or valued items such as goods and services.
     */  "name": "subject", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.
     */  "name": "authority", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.
     */  "name": "domain", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Type of Contract such as an insurance policy, real estate contract, a will, power of attorny, Privacy or Security policy , trust framework agreement, etc.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*More specific type or specialization of an overarching or more general contract such as auto insurance, home owner  insurance, prenupial agreement, Advanced-Directive, or privacy consent.
     */  "name": "subType", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Action stipulated by this Contract.
     */  "name": "action", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Reason for action stipulated by this Contract.
     */  "name": "actionReason", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*List of Contract actors.
     */  "name": "actor", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Contract.Actor",
      "isPrimitive": false }, 
    { 
    /*Contract Valued Item List.
     */  "name": "valuedItem", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Contract.ValuedItem",
      "isPrimitive": false }, 
    { 
    /*Party signing this Contract.
     */  "name": "signer", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Contract.Signer",
      "isPrimitive": false }, 
    { 
    /*One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
     */  "name": "term", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Contract.Term",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract.
     */
        {   "name": "bindingAttachment", 
        
          "min": "1", 
          "max": "1", 
          "type": "Attachment",
          "isPrimitive": false }, 
        {   "name": "bindingReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
     */  "name": "friendly", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Contract.Friendly",
      "isPrimitive": false }, 
    { 
    /*List of Legal expressions or representations of this Contract.
     */  "name": "legal", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Contract.Legal",
      "isPrimitive": false }, 
    { 
    /*List of Computable Policy Rule Language Representations of this Contract.
     */  "name": "rule", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Contract.Rule",
      "isPrimitive": false }, 
  ]
},
"Contract.Actor": {
    /*A formal agreement between parties regarding the conduct of business, exchange of information or other matters.
     */
  "name": "Contract.Actor",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Who or what actors are assigned roles in this Contract.
     */  "name": "entity", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Role type of actors assigned roles in this Contract.
     */  "name": "role", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
  ]
},
"Contract.ValuedItem": {
    /*A formal agreement between parties regarding the conduct of business, exchange of information or other matters.
     */
  "name": "Contract.ValuedItem",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    [ /* Choice */ 
    /*Specific type of Contract Valued Item that may be priced.
     */
        {   "name": "entityCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "entityReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*Identifies a Contract Valued Item instance.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Indicates the time during which this Contract ValuedItem information is effective.
     */  "name": "effectiveTime", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.
     */  "name": "quantity", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*A Contract Valued Item unit valuation measure.
     */  "name": "unitPrice", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */  "name": "factor", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
     */  "name": "points", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */  "name": "net", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
  ]
},
"Contract.Signer": {
    /*A formal agreement between parties regarding the conduct of business, exchange of information or other matters.
     */
  "name": "Contract.Signer",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Role of this Contract signer, e.g., notary, grantee.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Party which is a signator to this Contract.
     */  "name": "party", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Legally binding Contract DSIG signature contents in Base64.
     */  "name": "signature", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"Contract.Term": {
    /*A formal agreement between parties regarding the conduct of business, exchange of information or other matters.
     */
  "name": "Contract.Term",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Unique identifier for this particular Contract Provision.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*When this Contract Provision was issued.
     */  "name": "issued", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Relevant time or time-period when this Contract Provision is applicable.
     */  "name": "applies", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g., life time maximum benefit.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Subtype of this Contract Provision, e.g., life time maximum payment for a contract term for specific valued item, e.g., disability payment.
     */  "name": "subType", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Who or what this Contract Provision is about.
     */  "name": "subject", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Action stipulated by this Contract Provision.
     */  "name": "action", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Reason or purpose for the action stipulated by this Contract Provision.
     */  "name": "actionReason", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*List of actors participating in this Contract Provision.
     */  "name": "actor", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Contract.Actor1",
      "isPrimitive": false }, 
    { 
    /*Human readable form of this Contract Provision.
     */  "name": "text", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contract Provision Valued Item List.
     */  "name": "valuedItem", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Contract.ValuedItem1",
      "isPrimitive": false }, 
    { 
    /*Nested group of Contract Provisions.
     */  "name": "group", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Contract.Term",
      "isPrimitive": false }, 
  ]
},
"Contract.Actor1": {
    /*A formal agreement between parties regarding the conduct of business, exchange of information or other matters.
     */
  "name": "Contract.Actor1",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The actor assigned a role in this Contract Provision.
     */  "name": "entity", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Role played by the actor assigned this role in this Contract Provision.
     */  "name": "role", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
  ]
},
"Contract.ValuedItem1": {
    /*A formal agreement between parties regarding the conduct of business, exchange of information or other matters.
     */
  "name": "Contract.ValuedItem1",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    [ /* Choice */ 
    /*Specific type of Contract Provision Valued Item that may be priced.
     */
        {   "name": "entityCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "entityReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*Identifies a Contract Provision Valued Item instance.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Indicates the time during which this Contract Term ValuedItem information is effective.
     */  "name": "effectiveTime", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Specifies the units by which the Contract Provision Valued Item is measured or counted, and quantifies the countable or measurable Contract Term Valued Item instances.
     */  "name": "quantity", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*A Contract Provision Valued Item unit valuation measure.
     */  "name": "unitPrice", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*A real number that represents a multiplier used in determining the overall value of the Contract Provision Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
     */  "name": "factor", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Provision Valued Item delivered. The concept of Points allows for assignment of point values for a Contract ProvisionValued Item, such that a monetary amount can be assigned to each point.
     */  "name": "points", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*Expresses the product of the Contract Provision Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
     */  "name": "net", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
  ]
},
"Contract.Friendly": {
    /*A formal agreement between parties regarding the conduct of business, exchange of information or other matters.
     */
  "name": "Contract.Friendly",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    [ /* Choice */ 
    /*Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
     */
        {   "name": "contentAttachment", 
        
          "min": "1", 
          "max": "1", 
          "type": "Attachment",
          "isPrimitive": false }, 
        {   "name": "contentReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
  ]
},
"Contract.Legal": {
    /*A formal agreement between parties regarding the conduct of business, exchange of information or other matters.
     */
  "name": "Contract.Legal",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    [ /* Choice */ 
    /*Contract legal text in human renderable form.
     */
        {   "name": "contentAttachment", 
        
          "min": "1", 
          "max": "1", 
          "type": "Attachment",
          "isPrimitive": false }, 
        {   "name": "contentReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
  ]
},
"Contract.Rule": {
    /*A formal agreement between parties regarding the conduct of business, exchange of information or other matters.
     */
  "name": "Contract.Rule",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    [ /* Choice */ 
    /*Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
     */
        {   "name": "contentAttachment", 
        
          "min": "1", 
          "max": "1", 
          "type": "Attachment",
          "isPrimitive": false }, 
        {   "name": "contentReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
  ]
},
"Coverage": {
    /*Financial instrument which may be used to pay for or reimburse for health care products and services.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Coverage",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The program or plan underwriter or payor.
     */  "name": "issuer", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Business Identification Number (BIN number) used to identify the routing  of eclaims if the insurer themselves don't have a BIN number for all of their business.
     */  "name": "bin", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The id issued to the subscriber.
     */  "name": "subscriberId", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Subscriber Id, Certificate number or Personal Health Number or Case ID.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.
     */  "name": "group", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.
     */  "name": "plan", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a specific employer group within a class of employers. May be referred to as a Section or Division ID.
     */  "name": "subPlan", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A unique identifier for a dependent under the coverage.
     */  "name": "dependent", 
    
      "min": "0", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*An optional counter for a particular instance of the identified coverage which increments upon each renewal.
     */  "name": "sequence", 
    
      "min": "0", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*The party who 'owns' the insurance contractual relationship to the policy or to whom the benefit of the policy is due.
     */  "name": "subscriber", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The identifier for a community of providers.
     */  "name": "network", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The policy(s) which constitute this insurance coverage.
     */  "name": "contract", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"DataElement": {
    /*The formal description of a single piece of information that can be gathered and reported.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DataElement",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An absolute URL that is used to identify this data element when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this data element is (or will be) published.
     */  "name": "url", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*Formal identifier that is used to identify this data element when it is represented in other formats, or referenced in a specification, model, design or an instance.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The identifier that is used to identify this version of the data element when it is referenced in a StructureDefinition, Questionnaire or instance. This is an arbitrary value managed by the definition author manually.
     */  "name": "version", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The term used by humans to refer to the data element.  Should ideally be unique within the context in which the data element is expected to be used.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The status of the data element.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*A flag to indicate that this search data elemnt definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */  "name": "experimental", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*The name of the individual or organization that published the data element.
     */  "name": "publisher", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contacts to assist a user in finding and communicating with the publisher.
     */  "name": "contact", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "DataElement.Contact",
      "isPrimitive": false }, 
    { 
    /*The date that this version of the Data Element was published. The date must change when the business version changes, if it does, and it must change if the status code changes. in addition, it should change when the substantiative content of the data element  changes.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of data element definitions.
     */  "name": "useContext", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A copyright statement relating to the definition of the data element. Copyright statements are generally legal restrictions on the use and publishing of the details of the definition of the data element.
     */  "name": "copyright", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Identifies how precise the data element is in its definition.
     */  "name": "stringency", 
    
      "min": "0", 
      "max": "1", 
      "type": "DataElementStringency",
      "isPrimitive": true }, 
    { 
    /*Identifies a specification (other than a terminology) that the elements that make up the DataElement hav some correspondance with.
     */  "name": "mapping", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "DataElement.Mapping",
      "isPrimitive": false }, 
    { 
    /*Defines the structure, type, allowed values and other constraining characteristics of the data element.
     */  "name": "element", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "ElementDefinition",
      "isPrimitive": false }, 
  ]
},
"DataElement.Contact": {
    /*The formal description of a single piece of information that can be gathered and reported.
     */
  "name": "DataElement.Contact",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The name of an individual to contact regarding the data element.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contact details for individual (if a name was provided) or the publisher.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
  ]
},
"DataElement.Mapping": {
    /*The formal description of a single piece of information that can be gathered and reported.
     */
  "name": "DataElement.Mapping",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An Internal id that is used to identify this mapping set when specific mappings are made on a per-element basis.
     */  "name": "identity", 
    
      "min": "1", 
      "max": "1", 
      "type": "id",
      "isPrimitive": true }, 
    { 
    /*An absolute URI that identifies the specification that this mapping is expressed to.
     */  "name": "uri", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*A name for the specification that is being mapped to.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
     */  "name": "comments", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"DataElementStringency": {
    /*Indicates the degree of precision of the data element definitionIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DataElementStringency",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "DataElementStringency-list" }, 
  ],
  "elems": [
  ]
},
"DetectedIssue": {
    /*Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient.  E.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DetectedIssue",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Indicates the patient whose record the detected issue is associated with.
     */  "name": "patient", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifies the general type of issue identified.
     */  "name": "category", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
     */  "name": "severity", 
    
      "min": "0", 
      "max": "1", 
      "type": "DetectedIssueSeverity",
      "isPrimitive": true }, 
    { 
    /*Indicates the resource representing the current activity or proposed activity that is potentially problematic.
     */  "name": "implicated", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*A textual explanation of the detected issue.
     */  "name": "detail", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The date or date-time when the detected issue was initially identified.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
     */  "name": "author", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Business identifier associated with the detected issuerecord.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
     */  "name": "reference", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*Indicates an action that has been taken or is committed to to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
     */  "name": "mitigation", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "DetectedIssue.Mitigation",
      "isPrimitive": false }, 
  ]
},
"DetectedIssue.Mitigation": {
    /*Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient.  E.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
     */
  "name": "DetectedIssue.Mitigation",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Describes the action that was taken or the observation that was made that reduces/eliminates the risk associated with the identified issue.
     */  "name": "action", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Indicates when the mitigating action was documented.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
     */  "name": "author", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"DetectedIssueSeverity": {
    /*Indicates the potential degree of impact of the identified issue on the patientIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DetectedIssueSeverity",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "DetectedIssueSeverity-list" }, 
  ],
  "elems": [
  ]
},
"Device": {
    /*This resource identifies an instance of a manufactured thing that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.  Medical devices includes durable (reusable) medical equipment, implantable devices, as well as disposable equipment used for diagnostic, treatment, and research for healthcare and public health.  Non medical devices may includes things such as a machine, a cellphone, a computer, an application, etc.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Device",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Unique instance identifiers assigned to a device by organizations like manufacturers or owners .   If the identifier identifies the type of device, Device.type should be used.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Code or identifier to identify a kind of device.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Descriptive information, usage information or implantation information that is not captured in an existing element.
     */  "name": "note", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Annotation",
      "isPrimitive": false }, 
    { 
    /*Status of the Device availability.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "DeviceStatus",
      "isPrimitive": true }, 
    { 
    /*A name of the manufacturer.
     */  "name": "manufacturer", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The "model" - an identifier assigned by the manufacturer to identify the product by its type. This number is shared by the all devices sold as the same type.
     */  "name": "model", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The version of the device, if the device has multiple releases under the same model, or if the device is software or carries firmware.
     */  "name": "version", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The Date and time when the device was manufactured.
     */  "name": "manufactureDate", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The date and time beyond which this device is no longer valid or should not be used (if applicable).
     */  "name": "expiry", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*United States Food and Drug Administration mandated Unique Device Identifier (UDI). Use the human readable information (the content that the user sees, which is sometimes different to the exact syntax represented in the barcode)  - see http://www.fda.gov/MedicalDevices/DeviceRegulationandGuidance/UniqueDeviceIdentification/default.htm.
     */  "name": "udi", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Lot number assigned by the manufacturer.
     */  "name": "lotNumber", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*An organization that is responsible for the provision and ongoing maintenance of the device.
     */  "name": "owner", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The place where the device can be found.
     */  "name": "location", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Patient information, if the resource is affixed to a person.
     */  "name": "patient", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Contact details for an organization or a particular human that is responsible for the device.
     */  "name": "contact", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
    { 
    /*A network address on which the device may be contacted directly.
     */  "name": "url", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
  ]
},
"DeviceStatus": {
    /*The availability status of the deviceIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DeviceStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "DeviceStatus-list" }, 
  ],
  "elems": [
  ]
},
"DeviceComponent": {
    /*Describes the characteristics, operational status and capabilities of a medical-related component of a medical device.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DeviceComponent",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Describes the specific component type as defined in the object-oriented or metric nomenclature partition.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Describes the local assigned unique identification by the software. For example: handle ID.
     */  "name": "identifier", 
    
      "min": "1", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Describes the timestamp for the most recent system change which includes device configuration or setting change.
     */  "name": "lastSystemChange", 
    
      "min": "1", 
      "max": "1", 
      "type": "instant",
      "isPrimitive": true }, 
    { 
    /*Describes the link to the source Device that contains administrative device information such as manufacture, serial number, etc.
     */  "name": "source", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Describes the link to the parent resource. For example: Channel is linked to its VMD parent.
     */  "name": "parent", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Indicates current operational status of the device. For example: On, Off, Standby, etc.
     */  "name": "operationalStatus", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Describes the parameter group supported by the current device component that is based on some nomenclature, e.g., cardiovascular.
     */  "name": "parameterGroup", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Describes the physical principle of the measurement. For example: thermal, chemical, acoustical, etc.
     */  "name": "measurementPrinciple", 
    
      "min": "0", 
      "max": "1", 
      "type": "Measmnt-Principle",
      "isPrimitive": true }, 
    { 
    /*Describes the production specification such as component revision, serial number, etc.
     */  "name": "productionSpecification", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "DeviceComponent.ProductionSpecification",
      "isPrimitive": false }, 
    { 
    /*Describes the language code for the human-readable text string produced by the device. This language code will follow the IETF language tag. Example: en-US.
     */  "name": "languageCode", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
  ]
},
"DeviceComponent.ProductionSpecification": {
    /*Describes the characteristics, operational status and capabilities of a medical-related component of a medical device.
     */
  "name": "DeviceComponent.ProductionSpecification",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Describes the specification type, such as, serial number, part number, hardware revision, software revision, etc.
     */  "name": "specType", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Describes the internal component unique identification. This is a provision for manufacture specific standard components using a private OID. 11073-10101 has a partition for private OID semantic that the manufacture can make use of.
     */  "name": "componentId", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Describes the printable string defining the component.
     */  "name": "productionSpec", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"Measmnt-Principle": {
    /*Different measurement principle supported by the deviceIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Measmnt-Principle",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "Measmnt-Principle-list" }, 
  ],
  "elems": [
  ]
},
"DeviceMetric": {
    /*Describes a measurement, calculation or setting capability of a medical device.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DeviceMetric",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Describes the type of the metric. For example: Heart Rate, PEEP Setting, etc.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Describes the unique identification of this metric that has been assigned by the device or gateway software. For example: handle ID. 
It should be noted that in order to make the identifier unique, the system element of the identifier should be set to the unique identifier of the device.
     */  "name": "identifier", 
    
      "min": "1", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Describes the unit that an observed value determined for this metric will have. For example: Percent, Seconds, etc.
     */  "name": "unit", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacture, serial number, etc.
     */  "name": "source", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Describes the link to the  DeviceComponent that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device.
An example would be a DeviceComponent that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
     */  "name": "parent", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Indicates current operational state of the device. For example: On, Off, Standby, etc.
     */  "name": "operationalStatus", 
    
      "min": "0", 
      "max": "1", 
      "type": "DeviceMetricOperationalStatus",
      "isPrimitive": true }, 
    { 
    /*Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
     */  "name": "color", 
    
      "min": "0", 
      "max": "1", 
      "type": "DeviceMetricColor",
      "isPrimitive": true }, 
    { 
    /*Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
     */  "name": "category", 
    
      "min": "1", 
      "max": "1", 
      "type": "DeviceMetricCategory",
      "isPrimitive": true }, 
    { 
    /*Describes the measurement repetition time. This is not necessarily the same as the update period.
The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour.
The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
     */  "name": "measurementPeriod", 
    
      "min": "0", 
      "max": "1", 
      "type": "Timing",
      "isPrimitive": false }, 
    { 
    /*Describes the calibrations that have been performed or that are required to be performed.
     */  "name": "calibration", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "DeviceMetric.Calibration",
      "isPrimitive": false }, 
  ]
},
"DeviceMetric.Calibration": {
    /*Describes a measurement, calculation or setting capability of a medical device.
     */
  "name": "DeviceMetric.Calibration",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Describes the type of the calibration method.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "DeviceMetricCalibrationType",
      "isPrimitive": true }, 
    { 
    /*Describes the state of the calibration.
     */  "name": "state", 
    
      "min": "0", 
      "max": "1", 
      "type": "DeviceMetricCalibrationState",
      "isPrimitive": true }, 
    { 
    /*Describes the time last calibration has been performed.
     */  "name": "time", 
    
      "min": "0", 
      "max": "1", 
      "type": "instant",
      "isPrimitive": true }, 
  ]
},
"DeviceMetricCalibrationType": {
    /*Describes the type of a metric calibrationIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DeviceMetricCalibrationType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "DeviceMetricCalibrationType-list" }, 
  ],
  "elems": [
  ]
},
"DeviceMetricColor": {
    /*Describes the typical color of representationIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DeviceMetricColor",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "DeviceMetricColor-list" }, 
  ],
  "elems": [
  ]
},
"DeviceMetricCalibrationState": {
    /*Describes the state of a metric calibrationIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DeviceMetricCalibrationState",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "DeviceMetricCalibrationState-list" }, 
  ],
  "elems": [
  ]
},
"DeviceMetricOperationalStatus": {
    /*Describes the operational status of the DeviceMetricIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DeviceMetricOperationalStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "DeviceMetricOperationalStatus-list" }, 
  ],
  "elems": [
  ]
},
"DeviceMetricCategory": {
    /*Describes the category of the metricIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DeviceMetricCategory",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "DeviceMetricCategory-list" }, 
  ],
  "elems": [
  ]
},
"DeviceUseRequest": {
    /*Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DeviceUseRequest",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    [ /* Choice */ 
    /*Indicates the site on the subject's body where the device should be used ( i.e. the target site).
     */
        {   "name": "bodySiteCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "bodySiteReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*The status of the request.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "DeviceUseRequestStatus",
      "isPrimitive": true }, 
    { 
    /*The details of the device  to be used.
     */  "name": "device", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*An encounter that provides additional context in which this request is made.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifiers assigned to this order by the orderer or by the receiver.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Reason or justification for the use of this device.
     */  "name": "indication", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
     */  "name": "notes", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The proposed act must be performed if the indicated conditions occur, e.g.., shortness of breath, SpO2 less than x%.
     */  "name": "prnReason", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The time when the request was made.
     */  "name": "orderedOn", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The time at which the request was made/recorded.
     */  "name": "recordedOn", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The patient who will use the device.
     */  "name": "subject", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
        {   "name": "timingTiming", 
        
          "min": "1", 
          "max": "1", 
          "type": "Timing",
          "isPrimitive": false }, 
        {   "name": "timingPeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
        {   "name": "timingDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
    ], 
    { 
    /*Characterizes how quickly the  use of device must be initiated. Includes concepts such as stat, urgent, routine.
     */  "name": "priority", 
    
      "min": "0", 
      "max": "1", 
      "type": "DeviceUseRequestPriority",
      "isPrimitive": true }, 
  ]
},
"DeviceUseRequestPriority": {
    /*Codes representing the priority of the requestIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DeviceUseRequestPriority",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "DeviceUseRequestPriority-list" }, 
  ],
  "elems": [
  ]
},
"DeviceUseRequestStatus": {
    /*Codes representing the status of the requestIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DeviceUseRequestStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "DeviceUseRequestStatus-list" }, 
  ],
  "elems": [
  ]
},
"DeviceUseStatement": {
    /*A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DeviceUseStatement",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    [ /* Choice */ 
    /*Indicates the site on the subject's body where the device was used ( i.e. the target site).
     */
        {   "name": "bodySiteCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "bodySiteReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*The time period over which the device was used.
     */  "name": "whenUsed", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*The details of the device used.
     */  "name": "device", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*An external identifier for this statement such as an IRI.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Reason or justification for the use of the device.
     */  "name": "indication", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
     */  "name": "notes", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The time at which the statement was made/recorded.
     */  "name": "recordedOn", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The patient who used the device.
     */  "name": "subject", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*How often the device was used.
     */
        {   "name": "timingTiming", 
        
          "min": "1", 
          "max": "1", 
          "type": "Timing",
          "isPrimitive": false }, 
        {   "name": "timingPeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
        {   "name": "timingDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
    ], 
  ]
},
"DiagnosticOrder": {
    /*A record of a request for a diagnostic investigation service to be performed.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DiagnosticOrder",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Who or what the investigation is to be performed on. This is usually a human patient, but diagnostic tests can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).
     */  "name": "subject", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The practitioner that holds legal responsibility for ordering the investigation.
     */  "name": "orderer", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifiers assigned to this order instance by the orderer and/or  the receiver and/or order fulfiller.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*An encounter that provides additional information about the healthcare context in which this request is made.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*An explanation or justification for why this diagnostic investigation is being requested.   This is often for billing purposes.  May relate to the resources referred to in supportingInformation.
     */  "name": "reason", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Additional clinical information about the patient or specimen that may influence test interpretations.  This includes observations explicitly requested by the producer(filler) to provide context or supporting information needed to complete the order.
     */  "name": "supportingInformation", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*One or more specimens that the diagnostic investigation is about.
     */  "name": "specimen", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The status of the order.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "DiagnosticOrderStatus",
      "isPrimitive": true }, 
    { 
    /*The clinical priority associated with this order.
     */  "name": "priority", 
    
      "min": "0", 
      "max": "1", 
      "type": "DiagnosticOrderPriority",
      "isPrimitive": true }, 
    { 
    /*A summary of the events of interest that have occurred as the request is processed. E.g. when the order was made, various processing steps (specimens received), when it was completed.
     */  "name": "event", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "DiagnosticOrder.Event",
      "isPrimitive": false }, 
    { 
    /*The specific diagnostic investigations that are requested as part of this request. Sometimes, there can only be one item per request, but in most contexts, more than one investigation can be requested.
     */  "name": "item", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "DiagnosticOrder.Item",
      "isPrimitive": false }, 
    { 
    /*Any other notes associated with this patient or specimen or order (e.g. "patient hates needles").
     */  "name": "note", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Annotation",
      "isPrimitive": false }, 
  ]
},
"DiagnosticOrder.Event": {
    /*A record of a request for a diagnostic investigation service to be performed.
     */
  "name": "DiagnosticOrder.Event",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The status for the event.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "DiagnosticOrderStatus",
      "isPrimitive": true }, 
    { 
    /*Additional information about the event that occurred - e.g. if the status remained unchanged.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The date/time at which the event occurred.
     */  "name": "dateTime", 
    
      "min": "1", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The person who was responsible for performing or recording the action.
     */  "name": "actor", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"DiagnosticOrder.Item": {
    /*A record of a request for a diagnostic investigation service to be performed.
     */
  "name": "DiagnosticOrder.Item",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A code that identifies a particular diagnostic investigation, or panel of investigations, that have been requested.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*If the item is related to a specific specimen.
     */  "name": "specimen", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Anatomical location where the request test should be performed.  This is the target site.
     */  "name": "bodySite", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The status of this individual item within the order.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "DiagnosticOrderStatus",
      "isPrimitive": true }, 
    { 
    /*A summary of the events of interest that have occurred as this item of the request is processed.
     */  "name": "event", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "DiagnosticOrder.Event",
      "isPrimitive": false }, 
  ]
},
"DiagnosticOrderStatus": {
    /*The status of a diagnostic orderIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DiagnosticOrderStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "DiagnosticOrderStatus-list" }, 
  ],
  "elems": [
  ]
},
"DiagnosticOrderPriority": {
    /*The clinical priority of a diagnostic orderIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DiagnosticOrderPriority",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "DiagnosticOrderPriority-list" }, 
  ],
  "elems": [
  ]
},
"DiagnosticReport": {
    /*The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretation, and formatted representation of diagnostic reports.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DiagnosticReport",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The local ID assigned to the report by the order filler, usually by the Information System of the diagnostic service provider.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The status of the diagnostic report as a whole.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "DiagnosticReportStatus",
      "isPrimitive": true }, 
    { 
    /*A code that classifies the dlinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes.
     */  "name": "category", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A code or name that describes this diagnostic report.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The subject of the report. Usually, but not always, this is a patient. However diagnostic services also perform analyses on specimens collected from a variety of other sources.
     */  "name": "subject", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The link to the health care event (encounter) when the order was made.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.
     */
        {   "name": "effectiveDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "effectivePeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
    ], 
    { 
    /*The date and time that this version of the report was released from the source diagnostic service.
     */  "name": "issued", 
    
      "min": "1", 
      "max": "1", 
      "type": "instant",
      "isPrimitive": true }, 
    { 
    /*The diagnostic service that is responsible for issuing the report.
     */  "name": "performer", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Details concerning a test or procedure requested.
     */  "name": "request", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Details about the specimens on which this diagnostic report is based.
     */  "name": "specimen", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Observations that are part of this diagnostic report. Observations can be simple name/value pairs (e.g. "atomic" results), or they can be grouping observations that include references to other members of the group (e.g. "panels").
     */  "name": "result", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*One or more links to full details of any imaging performed during the diagnostic investigation. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images.
     */  "name": "imagingStudy", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
     */  "name": "image", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "DiagnosticReport.Image",
      "isPrimitive": false }, 
    { 
    /*Concise and clinically contextualized narrative interpretation of the diagnostic report.
     */  "name": "conclusion", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Codes for the conclusion.
     */  "name": "codedDiagnosis", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Rich text representation of the entire result as issued by the diagnostic service. Multiple formats are allowed but they SHALL be semantically equivalent.
     */  "name": "presentedForm", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Attachment",
      "isPrimitive": false }, 
  ]
},
"DiagnosticReport.Image": {
    /*The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretation, and formatted representation of diagnostic reports.
     */
  "name": "DiagnosticReport.Image",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A comment about the image. Typically, this is used to provide an explanation for why the image is included, or to draw the viewer's attention to important features.
     */  "name": "comment", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Reference to the image source.
     */  "name": "link", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"DiagnosticReportStatus": {
    /*The status of the diagnostic report as a wholeIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DiagnosticReportStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "DiagnosticReportStatus-list" }, 
  ],
  "elems": [
  ]
},
"DocumentManifest": {
    /*A manifest that defines a set of documents.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DocumentManifest",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts.
     */  "name": "masterIdentifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Other identifiers associated with the document manifest, including version independent  identifiers.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).
     */  "name": "subject", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*A patient, practitioner, or organization for which this set of documents is intended.
     */  "name": "recipient", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a set of documents may be the same as one of the documents in it - especially if there is only one - but it may be wider.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Identifies who is responsible for creating the manifest, and adding  documents to it.
     */  "name": "author", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*When the document manifest was created for submission to the server (not necessarily the same thing as the actual resource last modified time, since it may be modified, replicated etc).
     */  "name": "created", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Identifies the source system, application, or software that produced the document manifest.
     */  "name": "source", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*The status of this document manifest.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*Human-readable description of the source document. This is sometimes known as the "title".
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The list of Documents included in the manifest.
     */  "name": "content", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "DocumentManifest.Content",
      "isPrimitive": false }, 
    { 
    /*Related identifiers or resources associated with the DocumentManifest.
     */  "name": "related", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "DocumentManifest.Related",
      "isPrimitive": false }, 
  ]
},
"DocumentManifest.Content": {
    /*A manifest that defines a set of documents.
     */
  "name": "DocumentManifest.Content",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    [ /* Choice */ 
    /*The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.
     */
        {   "name": "pAttachment", 
        
          "min": "1", 
          "max": "1", 
          "type": "Attachment",
          "isPrimitive": false }, 
        {   "name": "pReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
  ]
},
"DocumentManifest.Related": {
    /*A manifest that defines a set of documents.
     */
  "name": "DocumentManifest.Related",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Related identifier to this DocumentManifest. If both id and ref are present they shall refer to the same thing.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Related Resource to this DocumentManifest. If both id and ref are present they shall refer to the same thing.
     */  "name": "ref", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"DocumentReference": {
    /*A reference to a document.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DocumentReference",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Document identifier as assigned by the source of the document. This identifier is specific to this version of the document. This unique identifier may be used elsewhere to identify this version of the document.
     */  "name": "masterIdentifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Other identifiers associated with the document, including version independent identifiers.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (I.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
     */  "name": "subject", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Specifies the particular kind of document referenced  (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the document referenced.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A categorization for the type of document referenced - helps for indexing and searching. This may be implied by or derived from the code specified in the DocumentReference.type.
     */  "name": "class", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Identifies who is responsible for adding the information to the document.
     */  "name": "author", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifies the organization or group who is responsible for ongoing maintenance of and access to the document.
     */  "name": "custodian", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Which person or organization authenticates that this document is valid.
     */  "name": "authenticator", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*When the document was created.
     */  "name": "created", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*When the document reference was created.
     */  "name": "indexed", 
    
      "min": "1", 
      "max": "1", 
      "type": "instant",
      "isPrimitive": true }, 
    { 
    /*The status of this document reference.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*The status of the underlying document.
     */  "name": "docStatus", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Relationships that this document has with other document references that already exist.
     */  "name": "relatesTo", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "DocumentReference.RelatesTo",
      "isPrimitive": false }, 
    { 
    /*Human-readable description of the source document. This is sometimes known as the "title".
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A set of Security-Tag codes specifying the level of privacy/security of the Document. Note that DocumentReference.meta.security is the security labels of the reference to the document, while DocumentReference.securityLabel is the security labels on the document it refers to.
     */  "name": "securityLabel", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The document and format referenced. May be multiple content each with a different format.
     */  "name": "content", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "DocumentReference.Content",
      "isPrimitive": false }, 
    { 
    /*The clinical context in which the document was prepared.
     */  "name": "context", 
    
      "min": "0", 
      "max": "1", 
      "type": "DocumentReference.Context",
      "isPrimitive": false }, 
  ]
},
"DocumentReference.RelatesTo": {
    /*A reference to a document.
     */
  "name": "DocumentReference.RelatesTo",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The type of relationship that this document has with anther document.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "DocumentRelationshipType",
      "isPrimitive": true }, 
    { 
    /*The target document of this relationship.
     */  "name": "target", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"DocumentReference.Content": {
    /*A reference to a document.
     */
  "name": "DocumentReference.Content",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The document or url to the document along with critical metadata to prove content has integrity.
     */  "name": "attachment", 
    
      "min": "1", 
      "max": "1", 
      "type": "Attachment",
      "isPrimitive": false }, 
    { 
    /*An identifier of the document encoding, structure, and template that the document conforms to beyond the base format indicated in the mimeType.
     */  "name": "format", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
  ]
},
"DocumentReference.Context": {
    /*A reference to a document.
     */
  "name": "DocumentReference.Context",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Describes the clinical encounter or type of care that the document content is associated with.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act.
     */  "name": "event", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The time period over which the service that is described by the document was provided.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*The kind of facility where the patient was seen.
     */  "name": "facilityType", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*This property may convey specifics about the practice setting where the content was created, often reflecting the clinical specialty.
     */  "name": "practiceSetting", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
     */  "name": "sourcePatientInfo", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Related identifiers or resources associated with the DocumentReference.
     */  "name": "related", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "DocumentReference.Related",
      "isPrimitive": false }, 
  ]
},
"DocumentReference.Related": {
    /*A reference to a document.
     */
  "name": "DocumentReference.Related",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Related identifier to this DocumentReference. If both id and ref are present they shall refer to the same thing.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Related Resource to this DocumentReference. If both id and ref are present they shall refer to the same thing.
     */  "name": "ref", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"DocumentRelationshipType": {
    /*The type of relationship between documentsIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DocumentRelationshipType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "DocumentRelationshipType-list" }, 
  ],
  "elems": [
  ]
},
"EligibilityRequest": {
    /*This resource provides the insurance eligibility details from the insurer regarding a specified coverage and optionally some class of service.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "EligibilityRequest",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The Response Business Identifier.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */  "name": "ruleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The style (standard) and version of the original material which was converted into this resource.
     */  "name": "originalRuleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The date when this resource was created.
     */  "name": "created", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The Insurer who is target  of the request.
     */  "name": "target", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The practitioner who is responsible for the services rendered to the patient.
     */  "name": "provider", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The organization which is responsible for the services rendered to the patient.
     */  "name": "organization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"EligibilityResponse": {
    /*This resource provides eligibility and plan details from the processing of an Eligibility resource.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "EligibilityResponse",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The Response Business Identifier.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Original request resource reference.
     */  "name": "request", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Transaction status: error, complete.
     */  "name": "outcome", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*A description of the status of the adjudication.
     */  "name": "disposition", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */  "name": "ruleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The style (standard) and version of the original material which was converted into this resource.
     */  "name": "originalRuleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The date when the enclosed suite of services were performed or completed.
     */  "name": "created", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The Insurer who produced this adjudicated response.
     */  "name": "organization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The practitioner who is responsible for the services rendered to the patient.
     */  "name": "requestProvider", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The organization which is responsible for the services rendered to the patient.
     */  "name": "requestOrganization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"Encounter": {
    /*An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Encounter",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifier(s) by which this encounter is known.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*planned | arrived | in-progress | onleave | finished | cancelled.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "EncounterState",
      "isPrimitive": true }, 
    { 
    /*The current status is always found in the current version of the resource. This status history permits the encounter resource to contain the status history without the needing to read through the historical versions of the resource, or even have the server store them.
     */  "name": "statusHistory", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Encounter.StatusHistory",
      "isPrimitive": false }, 
    { 
    /*inpatient | outpatient | ambulatory | emergency +.
     */  "name": "class", 
    
      "min": "0", 
      "max": "1", 
      "type": "EncounterClass",
      "isPrimitive": true }, 
    { 
    /*Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).
     */  "name": "type", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Indicates the urgency of the encounter.
     */  "name": "priority", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The patient present at the encounter.
     */  "name": "patient", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as govt reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care, and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).
     */  "name": "episodeOfCare", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The referral request that this encounter satisfies (incoming referral).
     */  "name": "incomingReferral", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The list of people responsible for providing the service.
     */  "name": "participant", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Encounter.Participant",
      "isPrimitive": false }, 
    { 
    /*The appointment that scheduled this encounter.
     */  "name": "appointment", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The start and end time of the encounter.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*Quantity of time the encounter lasted. This excludes the time during leaves of absence.
     */  "name": "length", 
    
      "min": "0", 
      "max": "1", 
      "type": "Duration",
      "isPrimitive": false }, 
    { 
    /*Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.
     */  "name": "reason", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Reason the encounter takes place, as specified using information from another resource. For admissions, this is the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
     */  "name": "indication", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Details about the admission to a healthcare service.
     */  "name": "hospitalization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Encounter.Hospitalization",
      "isPrimitive": false }, 
    { 
    /*List of locations at which the patient has been during this encounter.
     */  "name": "location", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Encounter.Location",
      "isPrimitive": false }, 
    { 
    /*An organization that is in charge of maintaining the information of this Encounter (e.g., who maintains the report or the master service catalog item, etc.). This MAY be the same as the organization on the Patient record, however it could be different. This MAY not be not the Service Delivery Location's Organization.
     */  "name": "serviceProvider", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Another Encounter of which this encounter is a part of (administratively or in time).
     */  "name": "partOf", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"Encounter.StatusHistory": {
    /*An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
     */
  "name": "Encounter.StatusHistory",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*planned | arrived | in-progress | onleave | finished | cancelled.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "EncounterState",
      "isPrimitive": true }, 
    { 
    /*The time that the episode was in the specified status.
     */  "name": "period", 
    
      "min": "1", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
  ]
},
"Encounter.Participant": {
    /*An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
     */
  "name": "Encounter.Participant",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Role of participant in encounter.
     */  "name": "type", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The period of time that the specified participant was present during the encounter. These can overlap or be sub-sets of the overall encounters period.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*Persons involved in the encounter other than the patient.
     */  "name": "individual", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"Encounter.Hospitalization": {
    /*An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
     */
  "name": "Encounter.Hospitalization",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Pre-admission identifier.
     */  "name": "preAdmissionIdentifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The location from which the patient came before admission.
     */  "name": "origin", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*From where patient was admitted (physician referral, transfer).
     */  "name": "admitSource", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The admitting Diagnosis field is used to record the diagnosis codes as reported by admitting practitioner. This could be different or in addition to the conditions reported as reason-condition(s) for the encounter.
     */  "name": "admittingDiagnosis", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Whether this hospitalization is a readmission and why if known.
     */  "name": "reAdmission", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Diet preferences reported by the patient.
     */  "name": "dietPreference", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Special courtesies (VIP, board member).
     */  "name": "specialCourtesy", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Wheelchair, translator, stretcher, etc.
     */  "name": "specialArrangement", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Location to which the patient is discharged.
     */  "name": "destination", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Category or kind of location after discharge.
     */  "name": "dischargeDisposition", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The final diagnosis given a patient before release from the hospital after all testing, surgery, and workup are complete.
     */  "name": "dischargeDiagnosis", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"Encounter.Location": {
    /*An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.
     */
  "name": "Encounter.Location",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The location where the encounter takes place.
     */  "name": "location", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The status of the participants presence at the specified location during the period specified. If the participant is is no longer at the location, then the period will have an end date/time.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "EncounterLocationStatus",
      "isPrimitive": true }, 
    { 
    /*Time period during which the patient was present at the location.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
  ]
},
"EncounterClass": {
    /*Classification of the encounterIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "EncounterClass",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "EncounterClass-list" }, 
  ],
  "elems": [
  ]
},
"EncounterLocationStatus": {
    /*The status of the locationIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "EncounterLocationStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "EncounterLocationStatus-list" }, 
  ],
  "elems": [
  ]
},
"EncounterState": {
    /*Current state of the encounterIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "EncounterState",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "EncounterState-list" }, 
  ],
  "elems": [
  ]
},
"EnrollmentRequest": {
    /*This resource provides the insurance Enrollment details to the insurer regarding a specified coverage.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "EnrollmentRequest",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The Response Business Identifier.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */  "name": "ruleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The style (standard) and version of the original material which was converted into this resource.
     */  "name": "originalRuleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The date when this resource was created.
     */  "name": "created", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The Insurer who is target  of the request.
     */  "name": "target", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The practitioner who is responsible for the services rendered to the patient.
     */  "name": "provider", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The organization which is responsible for the services rendered to the patient.
     */  "name": "organization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Patient Resource.
     */  "name": "subject", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Reference to the program or plan identification, underwriter or payor.
     */  "name": "coverage", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The relationship of the patient to the subscriber.
     */  "name": "relationship", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
  ]
},
"EnrollmentResponse": {
    /*This resource provides Enrollment and plan details from the processing of an Enrollment resource.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "EnrollmentResponse",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The Response Business Identifier.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Original request resource reference.
     */  "name": "request", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Transaction status: error, complete.
     */  "name": "outcome", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*A description of the status of the adjudication.
     */  "name": "disposition", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */  "name": "ruleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The style (standard) and version of the original material which was converted into this resource.
     */  "name": "originalRuleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The date when the enclosed suite of services were performed or completed.
     */  "name": "created", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The Insurer who produced this adjudicated response.
     */  "name": "organization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The practitioner who is responsible for the services rendered to the patient.
     */  "name": "requestProvider", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The organization which is responsible for the services rendered to the patient.
     */  "name": "requestOrganization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"EpisodeOfCare": {
    /*An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "EpisodeOfCare",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifier(s) by which this EpisodeOfCare is known.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*planned | waitlist | active | onhold | finished | cancelled.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "EpisodeOfCareStatus",
      "isPrimitive": true }, 
    { 
    /*The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
     */  "name": "statusHistory", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "EpisodeOfCare.StatusHistory",
      "isPrimitive": false }, 
    { 
    /*The type can be very important in processing as this could be used in determining if the EpisodeOfCare is relevant to specific government reporting, or other types of classifications.
     */  "name": "type", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
     */  "name": "condition", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The patient that this EpisodeOfCare applies to.
     */  "name": "patient", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The organization that has assumed the specific responsibilities for the specified duration.
     */  "name": "managingOrganization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The interval during which the managing organization assumes the defined responsibility.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
     */  "name": "referralRequest", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The practitioner that is the care manager/care co-ordinator for this patient.
     */  "name": "careManager", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The list of practitioners that may be facilitating this episode of care for specific purposes.
     */  "name": "careTeam", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "EpisodeOfCare.CareTeam",
      "isPrimitive": false }, 
  ]
},
"EpisodeOfCare.StatusHistory": {
    /*An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
     */
  "name": "EpisodeOfCare.StatusHistory",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*planned | waitlist | active | onhold | finished | cancelled.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "EpisodeOfCareStatus",
      "isPrimitive": true }, 
    { 
    /*The period during this EpisodeOfCare that the specific status applied.
     */  "name": "period", 
    
      "min": "1", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
  ]
},
"EpisodeOfCare.CareTeam": {
    /*An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
     */
  "name": "EpisodeOfCare.CareTeam",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The role that this team member is taking within this episode of care.
     */  "name": "role", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The period of time that this practitioner is performing some role within the episode of care.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*The practitioner (or Organization) within the team.
     */  "name": "member", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"EpisodeOfCareStatus": {
    /*The status of the encounterIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "EpisodeOfCareStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "EpisodeOfCareStatus-list" }, 
  ],
  "elems": [
  ]
},
"ExplanationOfBenefit": {
    /*This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ExplanationOfBenefit",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The Response Business Identifier.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Original request resource reference.
     */  "name": "request", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Transaction status: error, complete.
     */  "name": "outcome", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*A description of the status of the adjudication.
     */  "name": "disposition", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */  "name": "ruleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The style (standard) and version of the original material which was converted into this resource.
     */  "name": "originalRuleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The date when the enclosed suite of services were performed or completed.
     */  "name": "created", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The Insurer who produced this adjudicated response.
     */  "name": "organization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The practitioner who is responsible for the services rendered to the patient.
     */  "name": "requestProvider", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The organization which is responsible for the services rendered to the patient.
     */  "name": "requestOrganization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"FamilyMemberHistory": {
    /*Significant health events and conditions for a person related to the patient relevant in the context of care for the patient.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "FamilyMemberHistory",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*This records identifiers associated with this family member history record that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The person who this history concerns.
     */  "name": "patient", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The date (and possibly time) when the family member history was taken.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*A code specifying a state of a Family Member History record.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "FamilyHistoryStatus",
      "isPrimitive": true }, 
    { 
    /*This will either be a name or a description.  E.g. "Aunt Susan", "my cousin with the red hair".
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The type of relationship this person has to the patient (father, mother, brother etc.).
     */  "name": "relationship", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Administrative Gender - the gender that the relative is considered to have for administration and record keeping purposes.
     */  "name": "gender", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    [ /* Choice */ 
    /*The actual or approximate date of birth of the relative.
     */
        {   "name": "bornPeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
        {   "name": "bornDate", 
        
          "min": "1", 
          "max": "1", 
          "type": "date",
          "isPrimitive": true }, 
        {   "name": "bornString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
    ], 
    [ /* Choice */ 
    /*The actual or approximate age of the relative at the time the family member history is recorded.
     */
        {   "name": "ageQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "Age",
          "isPrimitive": false }, 
        {   "name": "ageRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
        {   "name": "ageString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
    ], 
    [ /* Choice */ 
    /*Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
     */
        {   "name": "deceasedBoolean", 
        
          "min": "1", 
          "max": "1", 
          "type": "boolean",
          "isPrimitive": true }, 
        {   "name": "deceasedQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "Age",
          "isPrimitive": false }, 
        {   "name": "deceasedRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
        {   "name": "deceasedDate", 
        
          "min": "1", 
          "max": "1", 
          "type": "date",
          "isPrimitive": true }, 
        {   "name": "deceasedString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
    ], 
    { 
    /*This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
     */  "name": "note", 
    
      "min": "0", 
      "max": "1", 
      "type": "Annotation",
      "isPrimitive": false }, 
    { 
    /*The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
     */  "name": "condition", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "FamilyMemberHistory.Condition",
      "isPrimitive": false }, 
  ]
},
"FamilyMemberHistory.Condition": {
    /*Significant health events and conditions for a person related to the patient relevant in the context of care for the patient.
     */
  "name": "FamilyMemberHistory.Condition",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer' depending on how much is known about the condition and the capabilities of the creating system.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Indicates what happened as a result of this condition.  If the condition resulted in death, deceased date is captured on the relation.
     */  "name": "outcome", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
     */
        {   "name": "onsetQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "Age",
          "isPrimitive": false }, 
        {   "name": "onsetRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
        {   "name": "onsetPeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
        {   "name": "onsetString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
    ], 
    { 
    /*An area where general notes can be placed about this specific condition.
     */  "name": "note", 
    
      "min": "0", 
      "max": "1", 
      "type": "Annotation",
      "isPrimitive": false }, 
  ]
},
"FamilyHistoryStatus": {
    /*A code that identifies the status of the family history recordIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "FamilyHistoryStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "FamilyHistoryStatus-list" }, 
  ],
  "elems": [
  ]
},
"Flag": {
    /*Prospective warnings of potential issues when providing care to the patient.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Flag",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifier assigned to the flag for external use (outside the FHIR environment).
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Allows an flag to be divided into different categories like clinical, administrative etc. Intended to be used as a means of filtering which flags are displayed to particular user or in a given context.
     */  "name": "category", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Supports basic workflow.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "FlagStatus",
      "isPrimitive": true }, 
    { 
    /*The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*The patient, location, group , organization , or practitioner this is about record this flag is associated with.
     */  "name": "subject", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*This alert is only relevant during the encounter.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The person, organization or device that created the flag.
     */  "name": "author", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The coded value or textual component of the flag to display to the user.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
  ]
},
"FlagStatus": {
    /*Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or entered in errorIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "FlagStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "FlagStatus-list" }, 
  ],
  "elems": [
  ]
},
"Goal": {
    /*Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.;.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Goal",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*This records identifiers associated with this care plan that are defined by business processed and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Identifies the patient, group or organization for whom the goal is being established.
     */  "name": "subject", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*The date or event after which the goal should begin being pursued.
     */
        {   "name": "startDate", 
        
          "min": "1", 
          "max": "1", 
          "type": "date",
          "isPrimitive": true }, 
        {   "name": "startCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
    ], 
    [ /* Choice */ 
    /*Indicates either the date or the duration after start by which the goal should be met.
     */
        {   "name": "targetDate", 
        
          "min": "1", 
          "max": "1", 
          "type": "date",
          "isPrimitive": true }, 
        {   "name": "targetQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "Duration",
          "isPrimitive": false }, 
    ], 
    { 
    /*Indicates a category the goal falls within.
     */  "name": "category", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Human-readable description of a specific desired objective of care.
     */  "name": "description", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Indicates whether the goal has been reached and is still considered relevant.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "GoalStatus",
      "isPrimitive": true }, 
    { 
    /*Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc.
     */  "name": "statusDate", 
    
      "min": "0", 
      "max": "1", 
      "type": "date",
      "isPrimitive": true }, 
    { 
    /*Captures the reason for the current status.
     */  "name": "statusReason", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Indicates whose goal this is - patient goal, practitioner goal, etc.
     */  "name": "author", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifies the mutually agreed level of importance associated with reaching/sustaining the goal.
     */  "name": "priority", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The identified conditions and other health record elements that are intended to be addressed by the goal.
     */  "name": "addresses", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Any comments related to the goal.
     */  "name": "note", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Annotation",
      "isPrimitive": false }, 
    { 
    /*Identifies the change (or lack of change) at the point where the goal was deepmed to be cancelled or achieved.
     */  "name": "outcome", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Goal.Outcome",
      "isPrimitive": false }, 
  ]
},
"Goal.Outcome": {
    /*Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.;.
     */
  "name": "Goal.Outcome",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    [ /* Choice */ 
    /*Details of what's changed (or not changed).
     */
        {   "name": "resultCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "resultReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
  ]
},
"GoalStatus": {
    /*Indicates whether the goal has been met and is still being targetedIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "GoalStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "GoalStatus-list" }, 
  ],
  "elems": [
  ]
},
"Group": {
    /*Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively and are not formally or legally recognized.  I.e. A collection of entities that isn't an Organization.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Group",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A unique business identifier for this group.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Identifies the broad classification of the kind of resources the group includes.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "GroupType",
      "isPrimitive": true }, 
    { 
    /*If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.
     */  "name": "actual", 
    
      "min": "1", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Provides a specific type of resource the group includes.  E.g. "cow", "syringe", etc.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A label assigned to the group for human identification and communication.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A count of the number of resource instances that are part of the group.
     */  "name": "quantity", 
    
      "min": "0", 
      "max": "1", 
      "type": "unsignedInt",
      "isPrimitive": true }, 
    { 
    /*Identifies the traits shared by members of the group.
     */  "name": "characteristic", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Group.Characteristic",
      "isPrimitive": false }, 
    { 
    /*Identifies the resource instances that are members of the group.
     */  "name": "member", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Group.Member",
      "isPrimitive": false }, 
  ]
},
"Group.Characteristic": {
    /*Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively and are not formally or legally recognized.  I.e. A collection of entities that isn't an Organization.
     */
  "name": "Group.Characteristic",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A code that identifies the kind of trait being asserted.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*The value of the trait that holds (or does not hold - see 'exclude') for members of the group.
     */
        {   "name": "valueCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "valueBoolean", 
        
          "min": "1", 
          "max": "1", 
          "type": "boolean",
          "isPrimitive": true }, 
        {   "name": "valueQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "Quantity",
          "isPrimitive": false }, 
        {   "name": "valueRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
    ], 
    { 
    /*If true, indicates the characteristic is one that is NOT held by members of the group.
     */  "name": "exclude", 
    
      "min": "1", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*The period over which the characteristic is tested. E.g. the patient had an operation during the month of June.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
  ]
},
"Group.Member": {
    /*Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively and are not formally or legally recognized.  I.e. A collection of entities that isn't an Organization.
     */
  "name": "Group.Member",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A reference to the entity that is a member of the group. Must be consistent with Group.type.
     */  "name": "entity", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The period that the member was in the group, if known.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*A flag to indicate that the member is no longer in the group, but previously may have been a member.
     */  "name": "inactive", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
  ]
},
"GroupType": {
    /*Types of resources that are part of groupIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "GroupType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "GroupType-list" }, 
  ],
  "elems": [
  ]
},
"HealthcareService": {
    /*The details of a Healthcare Service available at a location.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "HealthcareService",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*External Identifiers for this item.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The organization that provides this Healthcare Service.
     */  "name": "providedBy", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifies the broad category of service being performed or delivered. Selecting a Service Category then determines the list of relevant service types that can be selected in the Primary Service Type.
     */  "name": "serviceCategory", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A specific type of service that may be delivered or performed.
     */  "name": "serviceType", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "HealthcareService.ServiceType",
      "isPrimitive": false }, 
    { 
    /*The location where this healthcare service may be provided.
     */  "name": "location", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Further description of the service as it would be presented to a consumer while searching.
     */  "name": "serviceName", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.
     */  "name": "comment", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Extra details about the service that can't be placed in the other fields.
     */  "name": "extraDetails", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
     */  "name": "photo", 
    
      "min": "0", 
      "max": "1", 
      "type": "Attachment",
      "isPrimitive": false }, 
    { 
    /*List of contacts related to this specific healthcare service. If this is empty, then refer to the location's contacts.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
    { 
    /*The location(s) that this service is available to (not where the service is provided).
     */  "name": "coverageArea", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The code(s) that detail the conditions under which the healthcare service is available/offered.
     */  "name": "serviceProvisionCode", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Does this service have specific eligibility requirements that need to be met in order to use the service.
     */  "name": "eligibility", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The description of service eligibility should, in general, not exceed one or two paragraphs. It should be sufficient for a prospective consumer to determine if they are likely to be eligible or not. Where eligibility requirements and conditions are complex, it may simply be noted that an eligibility assessment is required. Where eligibility is determined by an outside source, such as an Act of Parliament, this should be noted, preferably with a reference to a commonly available copy of the source document such as a web page.
     */  "name": "eligibilityNote", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Program Names that can be used to categorize the service.
     */  "name": "programName", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Collection of Characteristics (attributes).
     */  "name": "characteristic", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
     */  "name": "referralMethod", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The public part of the 'keys' allocated to an Organization by an accredited body to support secure exchange of data over the internet. To be provided by the Organization, where available.
     */  "name": "publicKey", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Indicates whether or not a prospective consumer will require an appointment for a particular service at a Site to be provided by the Organization. Indicates if an appointment is required for access to this service.
     */  "name": "appointmentRequired", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*A Collection of times that the Service Site is available.
     */  "name": "availableTime", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "HealthcareService.AvailableTime",
      "isPrimitive": false }, 
    { 
    /*The HealthcareService is not available during this period of time due to the provided reason.
     */  "name": "notAvailable", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "HealthcareService.NotAvailable",
      "isPrimitive": false }, 
    { 
    /*A description of Site availability exceptions, e.g., public holiday availability. Succinctly describing all possible exceptions to normal Site availability as details in the Available Times and Not Available Times.
     */  "name": "availabilityExceptions", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"HealthcareService.ServiceType": {
    /*The details of a Healthcare Service available at a location.
     */
  "name": "HealthcareService.ServiceType",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The specific type of service being delivered or performed.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Collection of Specialties handled by the Service Site. This is more of a Medical Term.
     */  "name": "specialty", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
  ]
},
"HealthcareService.AvailableTime": {
    /*The details of a Healthcare Service available at a location.
     */
  "name": "HealthcareService.AvailableTime",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Indicates which Days of the week are available between the Start and End Times.
     */  "name": "daysOfWeek", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "DaysOfWeek",
      "isPrimitive": true }, 
    { 
    /*Is this always available? (hence times are irrelevant) e.g. 24 hour service.
     */  "name": "allDay", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*The opening time of day. Note: If the AllDay flag is set, then this time is ignored.
     */  "name": "availableStartTime", 
    
      "min": "0", 
      "max": "1", 
      "type": "time",
      "isPrimitive": true }, 
    { 
    /*The closing time of day. Note: If the AllDay flag is set, then this time is ignored.
     */  "name": "availableEndTime", 
    
      "min": "0", 
      "max": "1", 
      "type": "time",
      "isPrimitive": true }, 
  ]
},
"HealthcareService.NotAvailable": {
    /*The details of a Healthcare Service available at a location.
     */
  "name": "HealthcareService.NotAvailable",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The reason that can be presented to the user as to why this time is not available.
     */  "name": "description", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Service is not available (seasonally or for a public holiday) from this date.
     */  "name": "during", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
  ]
},
"DaysOfWeek": {
    /*The days of the weekIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DaysOfWeek",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "DaysOfWeek-list" }, 
  ],
  "elems": [
  ]
},
"ImagingObjectSelection": {
    /*A manifest of a set of DICOM Service-Object Pair Instances (SOP Instances).  The referenced SOP Instances (images or other content) are for a single patient, and may be from one or more studies. The referenced SOP Instances have been selected for a purpose, such as quality assurance, conference, or consult. Reflecting that range of purposes, typical ImagingObjectSelection resources may include all SOP Instances in a study (perhaps for sharing through a Health Information Exchange); key images from multiple studies (for reference by a referring or treating physician); a multi-frame ultrasound instance ("cine" video clip) and a set of measurements taken from that instance (for inclusion in a teaching file); and so on.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ImagingObjectSelection",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Instance UID of the DICOM KOS SOP Instances represented in this resource.
     */  "name": "uid", 
    
      "min": "1", 
      "max": "1", 
      "type": "oid",
      "isPrimitive": true }, 
    { 
    /*A patient resource reference which is the patient subject of all DICOM SOP Instances in this ImagingObjectSelection.
     */  "name": "patient", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The reason for, or significance of, the selection of objects referenced in the resource.
     */  "name": "title", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Text description of the DICOM SOP instances selected in the ImagingObjectSelection. This should be aligned with the content of the title element, and can provide further explanation of the SOP instances in the selection.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Author of ImagingObjectSelection. It can be a human author or a device which made the decision of the SOP instances selected. For example, a radiologist selected a set of imaging SOP instances to attached in a diagnostic report, and a CAD application may author a selection to describe SOP instances it used to generate a detection conclusion.
     */  "name": "author", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Date and time when the selection of the referenced instances were made. It is (typically) diffeent from the creation date of the selection resource, and from dates associated with the referenced instances (e.g. capture time of the referenced image).
     */  "name": "authoringTime", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Study identity and locating information of the DICOM SOP instances in the selection.
     */  "name": "study", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "ImagingObjectSelection.Study",
      "isPrimitive": false }, 
  ]
},
"ImagingObjectSelection.Study": {
    /*A manifest of a set of DICOM Service-Object Pair Instances (SOP Instances).  The referenced SOP Instances (images or other content) are for a single patient, and may be from one or more studies. The referenced SOP Instances have been selected for a purpose, such as quality assurance, conference, or consult. Reflecting that range of purposes, typical ImagingObjectSelection resources may include all SOP Instances in a study (perhaps for sharing through a Health Information Exchange); key images from multiple studies (for reference by a referring or treating physician); a multi-frame ultrasound instance ("cine" video clip) and a set of measurements taken from that instance (for inclusion in a teaching file); and so on.
     */
  "name": "ImagingObjectSelection.Study",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Study instance UID of the SOP instances in the selection.
     */  "name": "uid", 
    
      "min": "1", 
      "max": "1", 
      "type": "oid",
      "isPrimitive": true }, 
    { 
    /*WADO-RS URL to retrieve the study. Note that this URL retrieves all SOP instances of the study, not only those in the selection.
     */  "name": "url", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*Reference to the Imaging Study in FHIR form.
     */  "name": "imagingStudy", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Series indentity and locating information of the DICOM SOP instances in the selection.
     */  "name": "series", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "ImagingObjectSelection.Series",
      "isPrimitive": false }, 
  ]
},
"ImagingObjectSelection.Series": {
    /*A manifest of a set of DICOM Service-Object Pair Instances (SOP Instances).  The referenced SOP Instances (images or other content) are for a single patient, and may be from one or more studies. The referenced SOP Instances have been selected for a purpose, such as quality assurance, conference, or consult. Reflecting that range of purposes, typical ImagingObjectSelection resources may include all SOP Instances in a study (perhaps for sharing through a Health Information Exchange); key images from multiple studies (for reference by a referring or treating physician); a multi-frame ultrasound instance ("cine" video clip) and a set of measurements taken from that instance (for inclusion in a teaching file); and so on.
     */
  "name": "ImagingObjectSelection.Series",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Series instance UID of the SOP instances in the selection.
     */  "name": "uid", 
    
      "min": "0", 
      "max": "1", 
      "type": "oid",
      "isPrimitive": true }, 
    { 
    /*WADO-RS URL to retrieve the series. Note that this URL retrieves all SOP instances of the series not only those in the selection.
     */  "name": "url", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*Identity and locating information of the selected DICOM SOP instances.
     */  "name": "instance", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "ImagingObjectSelection.Instance",
      "isPrimitive": false }, 
  ]
},
"ImagingObjectSelection.Instance": {
    /*A manifest of a set of DICOM Service-Object Pair Instances (SOP Instances).  The referenced SOP Instances (images or other content) are for a single patient, and may be from one or more studies. The referenced SOP Instances have been selected for a purpose, such as quality assurance, conference, or consult. Reflecting that range of purposes, typical ImagingObjectSelection resources may include all SOP Instances in a study (perhaps for sharing through a Health Information Exchange); key images from multiple studies (for reference by a referring or treating physician); a multi-frame ultrasound instance ("cine" video clip) and a set of measurements taken from that instance (for inclusion in a teaching file); and so on.
     */
  "name": "ImagingObjectSelection.Instance",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*SOP class UID of the selected instance.
     */  "name": "sopClass", 
    
      "min": "1", 
      "max": "1", 
      "type": "oid",
      "isPrimitive": true }, 
    { 
    /*SOP Instance UID of the selected instance.
     */  "name": "uid", 
    
      "min": "1", 
      "max": "1", 
      "type": "oid",
      "isPrimitive": true }, 
    { 
    /*WADO-RS URL to retrieve the DICOM SOP Instance.
     */  "name": "url", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*Identity and location information of the frames in the selected instance.
     */  "name": "frames", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ImagingObjectSelection.Frames",
      "isPrimitive": false }, 
  ]
},
"ImagingObjectSelection.Frames": {
    /*A manifest of a set of DICOM Service-Object Pair Instances (SOP Instances).  The referenced SOP Instances (images or other content) are for a single patient, and may be from one or more studies. The referenced SOP Instances have been selected for a purpose, such as quality assurance, conference, or consult. Reflecting that range of purposes, typical ImagingObjectSelection resources may include all SOP Instances in a study (perhaps for sharing through a Health Information Exchange); key images from multiple studies (for reference by a referring or treating physician); a multi-frame ultrasound instance ("cine" video clip) and a set of measurements taken from that instance (for inclusion in a teaching file); and so on.
     */
  "name": "ImagingObjectSelection.Frames",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The frame numbers in the frame set.
     */  "name": "frameNumbers", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "unsignedInt",
      "isPrimitive": true }, 
    { 
    /*WADO-RS URL to retrieve the DICOM frames.
     */  "name": "url", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
  ]
},
"ImagingStudy": {
    /*Representation of the content produced in a DICOM imaging study. A study comprises a set of Series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A Series is of only one modality (e.g., X-ray, CT, MR, ultrasound), but a Study may have multiple Series of different modalities.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ImagingStudy",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Date and Time the study started. Timezone Offset From UTC.
     */  "name": "started", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The patient imaged in the study.
     */  "name": "patient", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Formal identifier for the study.
     */  "name": "uid", 
    
      "min": "1", 
      "max": "1", 
      "type": "oid",
      "isPrimitive": true }, 
    { 
    /*Accession Number is an identifier related to some aspect of imaging workflow and data management, and usage may vary across different institutions.  See for instance [IHE Radiology Technical Framework Volume 1 Appendix A](http://www.ihe.net/uploadedFiles/Documents/Radiology/IHE_RAD_TF_Rev13.0_Vol1_FT_2014-07-30.pdf).
     */  "name": "accession", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Other identifiers for the study.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*A list of the diagnostic orders that resulted in this imaging study being performed.
     */  "name": "order", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*A list of all the Series.ImageModality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 29 (value set OID 1.2.840.10008.6.1.19).
     */  "name": "modalityList", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The requesting/referring physician.
     */  "name": "referrer", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Availability of study (online, offline or nearline).
     */  "name": "availability", 
    
      "min": "0", 
      "max": "1", 
      "type": "InstanceAvailability",
      "isPrimitive": true }, 
    { 
    /*WADO-RS resource where Study is available.
     */  "name": "url", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*Number of Series in Study.
     */  "name": "numberOfSeries", 
    
      "min": "1", 
      "max": "1", 
      "type": "unsignedInt",
      "isPrimitive": true }, 
    { 
    /*Number of SOP Instances in Study.
     */  "name": "numberOfInstances", 
    
      "min": "1", 
      "max": "1", 
      "type": "unsignedInt",
      "isPrimitive": true }, 
    { 
    /*Type of procedure performed.
     */  "name": "procedure", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Who read the study and interpreted the images or other content.
     */  "name": "interpreter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Institution-generated description or classification of the Study performed.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Each study has one or more series of images or other content.
     */  "name": "series", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ImagingStudy.Series",
      "isPrimitive": false }, 
  ]
},
"ImagingStudy.Series": {
    /*Representation of the content produced in a DICOM imaging study. A study comprises a set of Series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A Series is of only one modality (e.g., X-ray, CT, MR, ultrasound), but a Study may have multiple Series of different modalities.
     */
  "name": "ImagingStudy.Series",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The Numeric identifier of this series in the study.
     */  "name": "number", 
    
      "min": "0", 
      "max": "1", 
      "type": "unsignedInt",
      "isPrimitive": true }, 
    { 
    /*The modality of this series sequence.
     */  "name": "modality", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Formal identifier for this series.
     */  "name": "uid", 
    
      "min": "1", 
      "max": "1", 
      "type": "oid",
      "isPrimitive": true }, 
    { 
    /*A description of the series.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Number of SOP Instances in Series.
     */  "name": "numberOfInstances", 
    
      "min": "1", 
      "max": "1", 
      "type": "unsignedInt",
      "isPrimitive": true }, 
    { 
    /*Availability of series (online, offline or nearline).
     */  "name": "availability", 
    
      "min": "0", 
      "max": "1", 
      "type": "InstanceAvailability",
      "isPrimitive": true }, 
    { 
    /*URI/URL specifying the location of the referenced series using WADO-RS.
     */  "name": "url", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*Body part examined. See  DICOM Part 16 Annex L for the mapping from DICOM to Snomed CT.
     */  "name": "bodySite", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Laterality if bodySite is paired anatomic structure and laterality is not pre-coordinated in bodySite code.
     */  "name": "laterality", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The date and time when the series was started.
     */  "name": "started", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*A single SOP Instance within the series, e.g., an image, or presentation state.
     */  "name": "instance", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ImagingStudy.Instance",
      "isPrimitive": false }, 
  ]
},
"ImagingStudy.Instance": {
    /*Representation of the content produced in a DICOM imaging study. A study comprises a set of Series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A Series is of only one modality (e.g., X-ray, CT, MR, ultrasound), but a Study may have multiple Series of different modalities.
     */
  "name": "ImagingStudy.Instance",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The number of instance in the series.
     */  "name": "number", 
    
      "min": "0", 
      "max": "1", 
      "type": "unsignedInt",
      "isPrimitive": true }, 
    { 
    /*Formal identifier for this image or other content.
     */  "name": "uid", 
    
      "min": "1", 
      "max": "1", 
      "type": "oid",
      "isPrimitive": true }, 
    { 
    /*DICOM instance  type.
     */  "name": "sopClass", 
    
      "min": "1", 
      "max": "1", 
      "type": "oid",
      "isPrimitive": true }, 
    { 
    /*A human-friendly SOP Class name.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The description of the instance.
     */  "name": "title", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Content of the instance or a rendering thereof (e.g., a JPEG of an image, or an XML of a structured report). May be represented for example by inline encoding; by a URL reference to a WADO-RS service that makes the instance available; or to a FHIR Resource (e.g., Media, Document, etc.). Multiple content attachments may be used for alternate representations of the instance.
     */  "name": "content", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Attachment",
      "isPrimitive": false }, 
  ]
},
"InstanceAvailability": {
    /*Availability of the resourceIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "InstanceAvailability",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "InstanceAvailability-list" }, 
  ],
  "elems": [
  ]
},
"Immunization": {
    /*Describes the event of a patient being administered a vaccination or a record of a vaccination as reported by a patient, a clinician or another party and may include vaccine reaction information and what vaccination protocol was followed.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Immunization",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A unique identifier assigned to this immunization record.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Indicates the current status of the vaccination event.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*Date vaccine administered or was to be administered.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Vaccine that was administered or was to be administered.
     */  "name": "vaccineCode", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The patient who either received or did not receive the immunization.
     */  "name": "patient", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Indicates if the vaccination was or was not given.
     */  "name": "wasNotGiven", 
    
      "min": "1", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*True if this administration was reported rather than directly administered.
     */  "name": "reported", 
    
      "min": "1", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Clinician who administered the vaccine.
     */  "name": "performer", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Clinician who ordered the vaccination.
     */  "name": "requester", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The visit or admission or other contact between patient and health care provider the immunization was performed as part of.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Name of vaccine manufacturer.
     */  "name": "manufacturer", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The service delivery location where the vaccine administration occurred.
     */  "name": "location", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Lot number of the  vaccine product.
     */  "name": "lotNumber", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Date vaccine batch expires.
     */  "name": "expirationDate", 
    
      "min": "0", 
      "max": "1", 
      "type": "date",
      "isPrimitive": true }, 
    { 
    /*Body site where vaccine was administered.
     */  "name": "site", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The path by which the vaccine product is taken into the body.
     */  "name": "route", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The quantity of vaccine product that was administered.
     */  "name": "doseQuantity", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*Extra information about the immunization that is not conveyed by the other attributes.
     */  "name": "note", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Annotation",
      "isPrimitive": false }, 
    { 
    /*Reasons why a vaccine was or was not administered.
     */  "name": "explanation", 
    
      "min": "0", 
      "max": "1", 
      "type": "Immunization.Explanation",
      "isPrimitive": false }, 
    { 
    /*Categorical data indicating that an adverse event is associated in time to an immunization.
     */  "name": "reaction", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Immunization.Reaction",
      "isPrimitive": false }, 
    { 
    /*Contains information about the protocol(s) under which the vaccine was administered.
     */  "name": "vaccinationProtocol", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Immunization.VaccinationProtocol",
      "isPrimitive": false }, 
  ]
},
"Immunization.Explanation": {
    /*Describes the event of a patient being administered a vaccination or a record of a vaccination as reported by a patient, a clinician or another party and may include vaccine reaction information and what vaccination protocol was followed.
     */
  "name": "Immunization.Explanation",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Reasons why a vaccine was administered.
     */  "name": "reason", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Reason why a vaccine was not administered.
     */  "name": "reasonNotGiven", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
  ]
},
"Immunization.Reaction": {
    /*Describes the event of a patient being administered a vaccination or a record of a vaccination as reported by a patient, a clinician or another party and may include vaccine reaction information and what vaccination protocol was followed.
     */
  "name": "Immunization.Reaction",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Date of reaction to the immunization.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Details of the reaction.
     */  "name": "detail", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Self-reported indicator.
     */  "name": "reported", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
  ]
},
"Immunization.VaccinationProtocol": {
    /*Describes the event of a patient being administered a vaccination or a record of a vaccination as reported by a patient, a clinician or another party and may include vaccine reaction information and what vaccination protocol was followed.
     */
  "name": "Immunization.VaccinationProtocol",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Nominal position in a series.
     */  "name": "doseSequence", 
    
      "min": "1", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*Contains the description about the protocol under which the vaccine was administered.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Indicates the authority who published the protocol?  E.g. ACIP.
     */  "name": "authority", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */  "name": "series", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The recommended number of doses to achieve immunity.
     */  "name": "seriesDoses", 
    
      "min": "0", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*The targeted disease.
     */  "name": "targetDisease", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Indicates if the immunization event should "count" against  the protocol.
     */  "name": "doseStatus", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Provides an explanation as to why a immunization event should or should not count against the protocol.
     */  "name": "doseStatusReason", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
  ]
},
"ImmunizationRecommendation": {
    /*A patient’s point-in-time immunization and recommendation (i.e. forecasting a patient’s immunization eligibility according to a published schedule) with optional supporting justification.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ImmunizationRecommendation",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A unique identifier assigned to this particular recommendation record.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The patient for whom the recommendations are for.
     */  "name": "patient", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Vaccine administration recommendations.
     */  "name": "recommendation", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "ImmunizationRecommendation.Recommendation",
      "isPrimitive": false }, 
  ]
},
"ImmunizationRecommendation.Recommendation": {
    /*A patient’s point-in-time immunization and recommendation (i.e. forecasting a patient’s immunization eligibility according to a published schedule) with optional supporting justification.
     */
  "name": "ImmunizationRecommendation.Recommendation",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The date the immunization recommendation was created.
     */  "name": "date", 
    
      "min": "1", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Vaccine that pertains to the recommendation.
     */  "name": "vaccineCode", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*This indicates the next recommended dose number (e.g. dose 2 is the next recommended dose).
     */  "name": "doseNumber", 
    
      "min": "0", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*Vaccine administration status.
     */  "name": "forecastStatus", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Vaccine date recommendations - e.g. earliest date to administer, latest date to administer, etc.
     */  "name": "dateCriterion", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ImmunizationRecommendation.DateCriterion",
      "isPrimitive": false }, 
    { 
    /*Contains information about the protocol under which the vaccine was administered.
     */  "name": "protocol", 
    
      "min": "0", 
      "max": "1", 
      "type": "ImmunizationRecommendation.Protocol",
      "isPrimitive": false }, 
    { 
    /*Immunization event history that supports the status and recommendation.
     */  "name": "supportingImmunization", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
     */  "name": "supportingPatientInformation", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"ImmunizationRecommendation.DateCriterion": {
    /*A patient’s point-in-time immunization and recommendation (i.e. forecasting a patient’s immunization eligibility according to a published schedule) with optional supporting justification.
     */
  "name": "ImmunizationRecommendation.DateCriterion",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Date classification of recommendation - e.g. earliest date to give, latest date to give, etc.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Date recommendation.
     */  "name": "value", 
    
      "min": "1", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
  ]
},
"ImmunizationRecommendation.Protocol": {
    /*A patient’s point-in-time immunization and recommendation (i.e. forecasting a patient’s immunization eligibility according to a published schedule) with optional supporting justification.
     */
  "name": "ImmunizationRecommendation.Protocol",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Indicates the nominal position in a series of the next dose.  This is the recommended dose number as per a specified protocol.
     */  "name": "doseSequence", 
    
      "min": "0", 
      "max": "1", 
      "type": "integer",
      "isPrimitive": true }, 
    { 
    /*Contains the description about the protocol under which the vaccine was administered.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Indicates the authority who published the protocol?  E.g. ACIP.
     */  "name": "authority", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */  "name": "series", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"ImplementationGuide": {
    /*A set of rules or how FHIR is used to solve a particular problem. This resource is used to gather all the parts of an implementation guide into a logical whole, and to publish a computable definition of all the parts.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ImplementationGuide",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An absolute URL that is used to identify this implementation guide when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this implementation guide is (or will be) published.
     */  "name": "url", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*The identifier that is used to identify this version of the Implementation Guide when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the Implementation Guide author manually.
     */  "name": "version", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A free text natural language name identifying the Implementation Guide.
     */  "name": "name", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The status of the Implementation Guide.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*This Implementation Guide was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */  "name": "experimental", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*The name of the individual or organization that published the implementation guide.
     */  "name": "publisher", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contacts to assist a user in finding and communicating with the publisher.
     */  "name": "contact", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ImplementationGuide.Contact",
      "isPrimitive": false }, 
    { 
    /*The date that this version of the Implementation Guide was published. The date must change when the business version changes, if it does, and it must change if the status code changes. in addition, it should change when the substantiative content of the implementation guide changes.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*A free text natural language description of the Implementation Guide and its use.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of implementation guides. The most common use of this element is to represent the country / jurisdication for which this implementation guide was defined.
     */  "name": "useContext", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.
     */  "name": "copyright", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The version of the FHIR specification on which this ImplementationGuide is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.0 for this version.
     */  "name": "fhirVersion", 
    
      "min": "0", 
      "max": "1", 
      "type": "id",
      "isPrimitive": true }, 
    { 
    /*Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc defined in other implementation guides.
     */  "name": "dependency", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ImplementationGuide.Dependency",
      "isPrimitive": false }, 
    { 
    /*A logial group of resources. Logical groups can be used when building pages.
     */  "name": "package", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "ImplementationGuide.Package",
      "isPrimitive": false }, 
    { 
    /*A set of profiles that all resources covered by this implementation guide must conform to.
     */  "name": "global", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ImplementationGuide.Global",
      "isPrimitive": false }, 
    { 
    /*A binary file that is included in the  implementation guide when it is published.
     */  "name": "binary", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*A page / section in the implementation guide. The root page is the implementation guide home page.
     */  "name": "page", 
    
      "min": "1", 
      "max": "1", 
      "type": "ImplementationGuide.Page",
      "isPrimitive": false }, 
  ]
},
"ImplementationGuide.Contact": {
    /*A set of rules or how FHIR is used to solve a particular problem. This resource is used to gather all the parts of an implementation guide into a logical whole, and to publish a computable definition of all the parts.
     */
  "name": "ImplementationGuide.Contact",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The name of an individual to contact regarding the implementation guide.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contact details for individual (if a name was provided) or the publisher.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
  ]
},
"ImplementationGuide.Dependency": {
    /*A set of rules or how FHIR is used to solve a particular problem. This resource is used to gather all the parts of an implementation guide into a logical whole, and to publish a computable definition of all the parts.
     */
  "name": "ImplementationGuide.Dependency",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*How the dependency is represented when the guide is published.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "GuideDependencyType",
      "isPrimitive": true }, 
    { 
    /*Where the dependncy is located.
     */  "name": "uri", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
  ]
},
"ImplementationGuide.Package": {
    /*A set of rules or how FHIR is used to solve a particular problem. This resource is used to gather all the parts of an implementation guide into a logical whole, and to publish a computable definition of all the parts.
     */
  "name": "ImplementationGuide.Package",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The name for the group, as used in page.package.
     */  "name": "name", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Human readable text describing the package.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A resource that is part of the implementation guide. Conformance resources (value set, structure definition, conformance statements etc) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */  "name": "resource", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "ImplementationGuide.Resource",
      "isPrimitive": false }, 
  ]
},
"ImplementationGuide.Resource": {
    /*A set of rules or how FHIR is used to solve a particular problem. This resource is used to gather all the parts of an implementation guide into a logical whole, and to publish a computable definition of all the parts.
     */
  "name": "ImplementationGuide.Resource",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Why the resource is included in the guide.
     */  "name": "purpose", 
    
      "min": "1", 
      "max": "1", 
      "type": "GuideResourcePurpose",
      "isPrimitive": true }, 
    { 
    /*A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A description of the reason that a resource has been included in the implementation guide.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A short code that may be used to identify the resource throughout the implementation guide.
     */  "name": "acronym", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    [ /* Choice */ 
    /*Where this resource is found.
     */
        {   "name": "sourceUri", 
        
          "min": "1", 
          "max": "1", 
          "type": "uri",
          "isPrimitive": true }, 
        {   "name": "sourceReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*Another resource that this resource is an example for. This is mostly used for resources that are included as examples of StructureDefinitions.
     */  "name": "exampleFor", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"ImplementationGuide.Global": {
    /*A set of rules or how FHIR is used to solve a particular problem. This resource is used to gather all the parts of an implementation guide into a logical whole, and to publish a computable definition of all the parts.
     */
  "name": "ImplementationGuide.Global",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The type of resource that all instances must conform to.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*A reference to the profile that all instances must conform to.
     */  "name": "profile", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"ImplementationGuide.Page": {
    /*A set of rules or how FHIR is used to solve a particular problem. This resource is used to gather all the parts of an implementation guide into a logical whole, and to publish a computable definition of all the parts.
     */
  "name": "ImplementationGuide.Page",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The source address for the page.
     */  "name": "source", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*A short name used to represent this page in navigational sturctures such as table of contents, bread crumbs, etc.
     */  "name": "name", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The kind of page that this is. Some pages are autogenerated (list, example), and othe kinds are of interest so that tools can navigate the user to the page of interest.
     */  "name": "kind", 
    
      "min": "1", 
      "max": "1", 
      "type": "GuidePageKind",
      "isPrimitive": true }, 
    { 
    /*For constructed pages, what kind of resources to include in the list.
     */  "name": "type", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*For constructed pages, a list of packages to include in the page (or else empty for everything).
     */  "name": "package", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The format of the page.
     */  "name": "format", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*Nested Pages/Sections under this page.
     */  "name": "page", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ImplementationGuide.Page",
      "isPrimitive": false }, 
  ]
},
"GuideResourcePurpose": {
    /*Why a resource is included in the guideIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "GuideResourcePurpose",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "GuideResourcePurpose-list" }, 
  ],
  "elems": [
  ]
},
"GuideDependencyType": {
    /*How a dependency is represented when the guide is publishedIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "GuideDependencyType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "GuideDependencyType-list" }, 
  ],
  "elems": [
  ]
},
"GuidePageKind": {
    /*The kind of an included pageIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "GuidePageKind",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "GuidePageKind-list" }, 
  ],
  "elems": [
  ]
},
"List": {
    /*A set of information summarized from a list of other resources.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "List",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifier for the List assigned for business purposes outside the context of FHIR.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*A label for the list assigned by the author.
     */  "name": "title", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*This code defines the purpose of the list - why it was created.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The common subject (or patient) of the resources that are in the list, if there is one.
     */  "name": "subject", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The entity responsible for deciding what the contents of the list were. Where the list was created by a human, this is the same as the author of the list.
     */  "name": "source", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The encounter that is the context in which this list was created.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Indicates the current state of this list.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "ListStatus",
      "isPrimitive": true }, 
    { 
    /*The date that the list was prepared.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*What order applies to the items in the list.
     */  "name": "orderedBy", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.
     */  "name": "mode", 
    
      "min": "1", 
      "max": "1", 
      "type": "ListMode",
      "isPrimitive": true }, 
    { 
    /*Comments that apply to the overall list.
     */  "name": "note", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Entries in this list.
     */  "name": "entry", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "List.Entry",
      "isPrimitive": false }, 
    { 
    /*If the list is empty, why the list is empty.
     */  "name": "emptyReason", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
  ]
},
"List.Entry": {
    /*A set of information summarized from a list of other resources.
     */
  "name": "List.Entry",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The flag allows the system constructing the list to indicate the role and significance of the item in the list.
     */  "name": "flag", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*True if this item is marked as deleted in the list.
     */  "name": "deleted", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*When this item was added to the list.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*A reference to the actual resource from which data was derived.
     */  "name": "item", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"ListStatus": {
    /*The current state of the listIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ListStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ListStatus-list" }, 
  ],
  "elems": [
  ]
},
"ListMode": {
    /*The processing mode that applies to this listIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ListMode",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ListMode-list" }, 
  ],
  "elems": [
  ]
},
"Location": {
    /*Details and position information for a physical place where services are provided  and resources and participants may be stored, found, contained or accommodated.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Location",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Unique code or number identifying the location to its users.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*active | suspended | inactive.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "LocationStatus",
      "isPrimitive": true }, 
    { 
    /*Name of the location as used by humans. Does not need to be unique.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Description of the Location, which helps in finding or referencing the place.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Indicates whether a resource instance represents a specific location or a class of locations.
     */  "name": "mode", 
    
      "min": "0", 
      "max": "1", 
      "type": "LocationMode",
      "isPrimitive": true }, 
    { 
    /*Indicates the type of function performed at the location.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
    { 
    /*Physical location.
     */  "name": "address", 
    
      "min": "0", 
      "max": "1", 
      "type": "Address",
      "isPrimitive": false }, 
    { 
    /*Physical form of the location, e.g. building, room, vehicle, road.
     */  "name": "physicalType", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The absolute geographic location of the Location, expressed in with the WGS84 datum (This is the same co-ordinate system used in KML).
     */  "name": "position", 
    
      "min": "0", 
      "max": "1", 
      "type": "Location.Position",
      "isPrimitive": false }, 
    { 
    /*The organization that is responsible for the provisioning and upkeep of the location.
     */  "name": "managingOrganization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Another Location which this Location is physically part of.
     */  "name": "partOf", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"Location.Position": {
    /*Details and position information for a physical place where services are provided  and resources and participants may be stored, found, contained or accommodated.
     */
  "name": "Location.Position",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
     */  "name": "longitude", 
    
      "min": "1", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
     */  "name": "latitude", 
    
      "min": "1", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
     */  "name": "altitude", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
  ]
},
"LocationMode": {
    /*Indicates whether a resource instance represents a specific location or a class of locationsIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "LocationMode",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "LocationMode-list" }, 
  ],
  "elems": [
  ]
},
"LocationStatus": {
    /*Indicates whether the location is still in useIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "LocationStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "LocationStatus-list" }, 
  ],
  "elems": [
  ]
},
"Media": {
    /*A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Media",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Whether the media is a photo (still image), an audio recording, or a video recording.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "DigitalMediaType",
      "isPrimitive": true }, 
    { 
    /*Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
     */  "name": "subtype", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Identifiers associated with the image - these may include identifiers for the image itself, identifiers for the context of its collection (e.g. series ids) and context ids such as accession numbers or other workflow identifiers.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Who/What this Media is a record of.
     */  "name": "subject", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The person who administered the collection of the image.
     */  "name": "operator", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The name of the imaging view e.g Lateral or Antero-posterior (AP).
     */  "name": "view", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The name of the device / manufacturer of the device  that was used to make the recording.
     */  "name": "deviceName", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Height of the image in pixels(photo/video).
     */  "name": "height", 
    
      "min": "0", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*Width of the image in pixels (photo/video).
     */  "name": "width", 
    
      "min": "0", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required.
     */  "name": "frames", 
    
      "min": "0", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*The duration of the recording in seconds - for audio and video.
     */  "name": "duration", 
    
      "min": "0", 
      "max": "1", 
      "type": "unsignedInt",
      "isPrimitive": true }, 
    { 
    /*The actual content of the media - inline or by direct reference to the media source file.
     */  "name": "content", 
    
      "min": "1", 
      "max": "1", 
      "type": "Attachment",
      "isPrimitive": false }, 
  ]
},
"DigitalMediaType": {
    /*Whether the Media is a photo, video, or audioIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "DigitalMediaType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "DigitalMediaType-list" }, 
  ],
  "elems": [
  ]
},
"Medication": {
    /*This resource is primarily used for the identification and definition of a medication. It covers the ingredients and the packaging for a medication.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Medication",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Set to true if the item is attributable to a specific manufacturer.
     */  "name": "isBrand", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Describes the details of the manufacturer.
     */  "name": "manufacturer", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Information that only applies to products (not packages).
     */  "name": "product", 
    
      "min": "0", 
      "max": "1", 
      "type": "Medication.Product",
      "isPrimitive": false }, 
    { 
    /*Information that only applies to packages (not products).
     */  "name": "package", 
    
      "min": "0", 
      "max": "1", 
      "type": "Medication.Package",
      "isPrimitive": false }, 
  ]
},
"Medication.Product": {
    /*This resource is primarily used for the identification and definition of a medication. It covers the ingredients and the packaging for a medication.
     */
  "name": "Medication.Product",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Describes the form of the item.  Powder; tablets; carton.
     */  "name": "form", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Identifies a particular constituent of interest in the product.
     */  "name": "ingredient", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Medication.Ingredient",
      "isPrimitive": false }, 
    { 
    /*Information about a group of medication produced or packaged from one production run.
     */  "name": "batch", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Medication.Batch",
      "isPrimitive": false }, 
  ]
},
"Medication.Ingredient": {
    /*This resource is primarily used for the identification and definition of a medication. It covers the ingredients and the packaging for a medication.
     */
  "name": "Medication.Ingredient",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The actual ingredient - either a substance (simple ingredient) or another medication.
     */  "name": "item", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Specifies how many (or how much) of the items there are in this Medication.  E.g. 250 mg per tablet.
     */  "name": "amount", 
    
      "min": "0", 
      "max": "1", 
      "type": "Ratio",
      "isPrimitive": false }, 
  ]
},
"Medication.Batch": {
    /*This resource is primarily used for the identification and definition of a medication. It covers the ingredients and the packaging for a medication.
     */
  "name": "Medication.Batch",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The assigned lot number of a batch of the specified product.
     */  "name": "lotNumber", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*When this specific batch of product will expire.
     */  "name": "expirationDate", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
  ]
},
"Medication.Package": {
    /*This resource is primarily used for the identification and definition of a medication. It covers the ingredients and the packaging for a medication.
     */
  "name": "Medication.Package",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The kind of container that this package comes as.
     */  "name": "container", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A set of components that go to make up the described item.
     */  "name": "content", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Medication.Content",
      "isPrimitive": false }, 
  ]
},
"Medication.Content": {
    /*This resource is primarily used for the identification and definition of a medication. It covers the ingredients and the packaging for a medication.
     */
  "name": "Medication.Content",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifies one of the items in the package.
     */  "name": "item", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The amount of the product that is in the package.
     */  "name": "amount", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
  ]
},
"MedicationAdministration": {
    /*Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "MedicationAdministration",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*External identifier - FHIR will generate its own internal IDs (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions it is possible for an administration to be started but not completed or it may be paused while some other process is under way.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "MedicationAdministrationStatus",
      "isPrimitive": true }, 
    { 
    /*The person or animal to whom the medication was given.
     */  "name": "patient", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The individual who was responsible for giving the medication to the patient.
     */  "name": "practitioner", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The visit or admission the or other contact between patient and health care provider the medication administration was performed as part of.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The original request, instruction or authority to perform the administration.
     */  "name": "prescription", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Set this to true if the record is saying that the medication was NOT administered.
     */  "name": "wasNotGiven", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*A code indicating why the administration was not performed.
     */  "name": "reasonNotGiven", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A code indicating why the medication was given.
     */  "name": "reasonGiven", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
     */
        {   "name": "effectiveTimeDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "effectiveTimePeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
    ], 
    [ /* Choice */ 
    /*Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
     */
        {   "name": "medicationCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "medicationReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*The device used in administering the medication to the patient.  E.g. a particular infusion pump.
     */  "name": "device", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Extra information about the medication administration that is not conveyed by the other attributes.
     */  "name": "note", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Describes the medication dosage information details e.g. dose, rate, site, route, etc.
     */  "name": "dosage", 
    
      "min": "0", 
      "max": "1", 
      "type": "MedicationAdministration.Dosage",
      "isPrimitive": false }, 
  ]
},
"MedicationAdministration.Dosage": {
    /*Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
     */
  "name": "MedicationAdministration.Dosage",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Free text dosage instructions can be used for cases where the instructions are too complex to code. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication.
     */  "name": "text", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    [ /* Choice */ 
    /*A coded specification of the anatomic site where the medication first entered the body.  E.g. "left arm".
     */
        {   "name": "siteCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "siteReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.   E.g. topical, intravenous, etc.
     */  "name": "route", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A coded value indicating the method by which the medication is intended to be or was introduced into or on the body.  This attribute will most often NOT be populated.  It is most commonly used for injections.  Examples: Slow Push, Deep IV.  One of the reasons this attribute is not used often, is that the method is often pre-coordinated with the route and/or form of administration.  This means the codes used in route or form may pre-coordinate the method in the route code or the form code.  The implementation decision about what coding system to use for route or form code will determine how frequently the method code will be populated e.g. if route or form code pre-coordinate method code, then this attribute will not be populated often; if there is no pre-coordination then method code may  be used frequently.
     */  "name": "method", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The amount of the medication given at one administration event.   Use this value when the administration is essentially an instantaneous event such as a swallowing a tablet or giving an injection.
     */  "name": "quantity", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*Identifies the speed with which the medication was or will be introduced into the patient.  Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.  Currently we do not specify a default of '1' in the denominator, but this is being discussed.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
     */
        {   "name": "rateRatio", 
        
          "min": "1", 
          "max": "1", 
          "type": "Ratio",
          "isPrimitive": false }, 
        {   "name": "rateRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
    ], 
  ]
},
"MedicationAdministrationStatus": {
    /*A set of codes indicating the current status of a MedicationAdministrationIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "MedicationAdministrationStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "MedicationAdministrationStatus-list" }, 
  ],
  "elems": [
  ]
},
"MedicationDispense": {
    /*Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a Pharmacy system responding to a Medication Order.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "MedicationDispense",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifier assigned by the dispensing facility - this is an identifier assigned outside FHIR.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*A code specifying the state of the set of dispense events.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "MedicationDispenseStatus",
      "isPrimitive": true }, 
    { 
    /*A link to a resource representing the person to whom the medication will be given.
     */  "name": "patient", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The individual responsible for dispensing the medication.
     */  "name": "dispenser", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Indicates the medication order that is being dispensed against.
     */  "name": "authorizingPrescription", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The amount of medication that has been dispensed. Includes unit of measure.
     */  "name": "quantity", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*The amount of medication expressed as a timing amount.
     */  "name": "daysSupply", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
     */
        {   "name": "medicationCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "medicationReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*The time when the dispensed product was packaged and reviewed.
     */  "name": "whenPrepared", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The time the dispensed product was provided to the patient or their representative.
     */  "name": "whenHandedOver", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Identification of the facility/location where the medication was shipped to, as part of the dispense event.
     */  "name": "destination", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifies the person who picked up the medication.  This will usually be a patient or their carer, but some cases exist where it can be a healthcare professional.
     */  "name": "receiver", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Extra information about the dispense that could not be conveyed in the other attributes.
     */  "name": "note", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Indicates how the medication is to be used by the patient.
     */  "name": "dosageInstruction", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "MedicationDispense.DosageInstruction",
      "isPrimitive": false }, 
    { 
    /*Indicates whether or not substitution was made as part of the dispense.  In some cases substitution will be expected but doesn't happen, in other cases substitution is not expected but does happen.  This block explains what substitition did or did not happen and why.
     */  "name": "substitution", 
    
      "min": "0", 
      "max": "1", 
      "type": "MedicationDispense.Substitution",
      "isPrimitive": false }, 
  ]
},
"MedicationDispense.DosageInstruction": {
    /*Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a Pharmacy system responding to a Medication Order.
     */
  "name": "MedicationDispense.DosageInstruction",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Free text dosage instructions can be used for cases where the instructions are too complex to code. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication.
     */  "name": "text", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Additional instructions such as "Swallow with plenty of water" which may or may not be coded.
     */  "name": "additionalInstructions", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The timing schedule for giving the medication to the patient.  The Schedule data type allows many different expressions, for example.  "Every  8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:";  "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */  "name": "timing", 
    
      "min": "0", 
      "max": "1", 
      "type": "Timing",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).  

Specifically if 'boolean' datatype is selected, then the following logic applies:  If set to True, this indicates that the medication is only taken when needed, within the specified schedule.
     */
        {   "name": "asNeededBoolean", 
        
          "min": "1", 
          "max": "1", 
          "type": "boolean",
          "isPrimitive": true }, 
        {   "name": "asNeededCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
    ], 
    [ /* Choice */ 
    /*A coded specification of the anatomic site where the medication first enters the body.
     */
        {   "name": "siteCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "siteReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*A code specifying the route or physiological path of administration of a therapeutic agent into or onto a subject.
     */  "name": "route", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A coded value indicating the method by which the medication is intended to be or was introduced into or on the body.  This attribute will most often NOT be populated.  It is most commonly used for injections.  Examples: Slow Push, Deep IV.  One of the reasons this attribute is not used often, is that the method is often pre-coordinated with the route and/or form of administration.  This means the codes used in route or form may pre-coordinate the method in the route code or the form code.  The implementation decision about what coding system to use for route or form code will determine how frequently the method code will be populated e.g. if route or form code pre-coordinate method code, then this attribute will not be populated often; if there is no pre-coordination then method code may  be used frequently.
     */  "name": "method", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*The amount of therapeutic or other substance given at one administration event.
     */
        {   "name": "doseRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
        {   "name": "doseQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "SimpleQuantity",
          "isPrimitive": false }, 
    ], 
    [ /* Choice */ 
    /*Identifies the speed with which the medication was or will be introduced into the patient. Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.   Currently we do not specify a default of '1' in the denominator, but this is being discussed. Other examples: 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
     */
        {   "name": "rateRatio", 
        
          "min": "1", 
          "max": "1", 
          "type": "Ratio",
          "isPrimitive": false }, 
        {   "name": "rateRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
    ], 
    { 
    /*The maximum total quantity of a therapeutic substance that may be administered to a subject over the period of time,  e.g. 1000mg in 24 hours.
     */  "name": "maxDosePerPeriod", 
    
      "min": "0", 
      "max": "1", 
      "type": "Ratio",
      "isPrimitive": false }, 
  ]
},
"MedicationDispense.Substitution": {
    /*Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a Pharmacy system responding to a Medication Order.
     */
  "name": "MedicationDispense.Substitution",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A code signifying whether a different drug was dispensed from what was prescribed.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Indicates the reason for the substitution of (or lack of substitution) from what was prescribed.
     */  "name": "reason", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The person or organization that has primary responsibility for the substitution.
     */  "name": "responsibleParty", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"MedicationDispenseStatus": {
    /*A code specifying the state of the dispense event.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "MedicationDispenseStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "MedicationDispenseStatus-list" }, 
  ],
  "elems": [
  ]
},
"MedicationOrder": {
    /*An order for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationOrder" rather than "MedicationPrescription" to generalize the use across inpatient and outpatient settings as well as for care plans, etc.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "MedicationOrder",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*External identifier - one that would be used by another non-FHIR system - for example a re-imbursement system might issue its own id for each prescription that is created.  This is particularly important where FHIR only provides part of an erntire workflow process where records have to be tracked through an entire system.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The date (and perhaps time) when the prescription was written.
     */  "name": "dateWritten", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*A code specifying the state of the order.  Generally this will be active or completed state.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "MedicationOrderStatus",
      "isPrimitive": true }, 
    { 
    /*The date (and perhaps time) when the prescription was stopped.
     */  "name": "dateEnded", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The reason why the prescription was stopped, if it was.
     */  "name": "reasonEnded", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A link to a resource representing the person to whom the medication will be given.
     */  "name": "patient", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The healthcare professional responsible for authorizing the prescription.
     */  "name": "prescriber", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*A link to a resource that identifies the particular occurrence of contact between patient and health care provider.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*Can be the reason or the indication for writing the prescription.
     */
        {   "name": "reasonCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "reasonReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*Extra information about the prescription that could not be conveyed by the other attributes.
     */  "name": "note", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    [ /* Choice */ 
    /*Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
     */
        {   "name": "medicationCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "medicationReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*Indicates how the medication is to be used by the patient.
     */  "name": "dosageInstruction", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "MedicationOrder.DosageInstruction",
      "isPrimitive": false }, 
    { 
    /*Indicates the specific details for the dispense or medication supply part of a medication order (also known as a Medication Prescription).  Note that this information is NOT always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
     */  "name": "dispenseRequest", 
    
      "min": "0", 
      "max": "1", 
      "type": "MedicationOrder.DispenseRequest",
      "isPrimitive": false }, 
    { 
    /*Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen, and in others it does not matter. This block explains the prescriber's intent. If nothing is specified substitution may be done.
     */  "name": "substitution", 
    
      "min": "0", 
      "max": "1", 
      "type": "MedicationOrder.Substitution",
      "isPrimitive": false }, 
    { 
    /*A link to a resource representing an earlier order or prescription that this order supersedes.
     */  "name": "priorPrescription", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"MedicationOrder.DosageInstruction": {
    /*An order for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationOrder" rather than "MedicationPrescription" to generalize the use across inpatient and outpatient settings as well as for care plans, etc.
     */
  "name": "MedicationOrder.DosageInstruction",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Free text dosage instructions can be used for cases where the instructions are too complex to code.  The content of this attribute does not include the name or description of the medication. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication. It is expected that the text instructions will always be populated.  If the dosage.timing attribute is also populated, then the dosage.text should reflect the same information as the timing.
     */  "name": "text", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Additional instructions such as "Swallow with plenty of water" which may or may not be coded.
     */  "name": "additionalInstructions", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The timing schedule for giving the medication to the patient. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".  This attribute may not always be populated while the DosageInstruction.text is expected to be populated.  If both are populated, then the DosageInstruction.text should reflect the content of the Dosage.timing.
     */  "name": "timing", 
    
      "min": "0", 
      "max": "1", 
      "type": "Timing",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).  

Specifically if 'boolean' datatype is selected, then the following logic applies:  If set to True, this indicates that the medication is only taken when needed, within the specified schedule.
     */
        {   "name": "asNeededBoolean", 
        
          "min": "1", 
          "max": "1", 
          "type": "boolean",
          "isPrimitive": true }, 
        {   "name": "asNeededCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
    ], 
    [ /* Choice */ 
    /*A coded specification of the anatomic site where the medication first enters the body.
     */
        {   "name": "siteCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "siteReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*A code specifying the route or physiological path of administration of a therapeutic agent into or onto a patient.
     */  "name": "route", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A coded value indicating the method by which the medication is introduced into or onto the body. Most commonly used for injections.  Examples:  Slow Push; Deep IV.  Terminologies used often pre-coordinate this term with the route and or form of administration.
     */  "name": "method", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*The amount of therapeutic or other substance given at one administration event.
     */
        {   "name": "doseRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
        {   "name": "doseQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "SimpleQuantity",
          "isPrimitive": false }, 
    ], 
    [ /* Choice */ 
    /*Identifies the speed with which the medication was or will be introduced into the patient. Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.   Currently we do not specify a default of '1' in the denominator, but this is being discussed. Other examples: 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
     */
        {   "name": "rateRatio", 
        
          "min": "1", 
          "max": "1", 
          "type": "Ratio",
          "isPrimitive": false }, 
        {   "name": "rateRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
    ], 
    { 
    /*The maximum total quantity of a therapeutic substance that may be administered to a subject over the period of time. E.g. 1000mg in 24 hours.
     */  "name": "maxDosePerPeriod", 
    
      "min": "0", 
      "max": "1", 
      "type": "Ratio",
      "isPrimitive": false }, 
  ]
},
"MedicationOrder.DispenseRequest": {
    /*An order for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationOrder" rather than "MedicationPrescription" to generalize the use across inpatient and outpatient settings as well as for care plans, etc.
     */
  "name": "MedicationOrder.DispenseRequest",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    [ /* Choice */ 
    /*Identifies the medication being administered. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications.
     */
        {   "name": "medicationCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "medicationReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*Design Comments: This indicates the validity period of a prescription (stale dating the Prescription)  It reflects the prescriber perspective for the validity of the prescription. Dispenses must not be made against the prescription outside of this period. The lower-bound of the Dispensing Window signifies the earliest date that the prescription can be filled for the first time. If an upper-bound is not specified then the Prescription is open-ended or will default to a stale-date based on regulations.  Rationale: Indicates when the Prescription becomes valid, and when it ceases to be a dispensable Prescription.
     */  "name": "validityPeriod", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*An integer indicating the number of additional times (aka refills or repeats) the patient can receive the prescribed medication.   Usage Notes: This integer does NOT include the original order dispense.   This means that if an order indicates dispense 30 tablets plus  "3 repeats", then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets.
     */  "name": "numberOfRepeatsAllowed", 
    
      "min": "0", 
      "max": "1", 
      "type": "positiveInt",
      "isPrimitive": true }, 
    { 
    /*The amount that is to be dispensed for one fill.
     */  "name": "quantity", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*Identifies the period time over which the supplied product is expected to be used, or the length of time the dispense is expected to last.  In some situations, this attribute may be used instead of quantity to identify the amount supplied by how long it is expected to last, rather than the physical quantity issued, e.g. 90 days supply of medication (based on an ordered dosage) When possible, it is always better to specify quantity, as this tends to be more precise. expectedSupplyDuration will always be an estimate that can be influenced by external factors.
     */  "name": "expectedSupplyDuration", 
    
      "min": "0", 
      "max": "1", 
      "type": "Duration",
      "isPrimitive": false }, 
  ]
},
"MedicationOrder.Substitution": {
    /*An order for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationOrder" rather than "MedicationPrescription" to generalize the use across inpatient and outpatient settings as well as for care plans, etc.
     */
  "name": "MedicationOrder.Substitution",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A code signifying whether a different drug should be dispensed from what was prescribed.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Indicates the reason for the substitution, or why substitution must or must not be performed.
     */  "name": "reason", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
  ]
},
"MedicationOrderStatus": {
    /*A code specifying the state of the prescribing event. Describes the lifecycle of the prescription.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "MedicationOrderStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "MedicationOrderStatus-list" }, 
  ],
  "elems": [
  ]
},
"MedicationStatement": {
    /*A record of a medication that is being consumed by a patient.   A medication statements may indicate that the patient may be taking the medication now, or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from e.g. the patients’ memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains.

The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the Medication Statement information may come from the patient’s memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication Administration is more formal and is not missing detailed information.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "MedicationStatement",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*External identifier - FHIR will generate its own internal IDs (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The person or animal who is /was taking the medication.
     */  "name": "patient", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The person who provided the information about the taking of this medication.
     */  "name": "informationSource", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The date when the medication statement was asserted by the information source.
     */  "name": "dateAsserted", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*A code representing the patient or other source’s judgment about the state of the medication used that this statement is about.  Generally this will be active or completed.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "MedicationStatementStatus",
      "isPrimitive": true }, 
    { 
    /*Set this to true if the record is saying that the medication was NOT taken.
     */  "name": "wasNotTaken", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*A code indicating why the medication was not taken.
     */  "name": "reasonNotTaken", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*A reason for why the medication is being/was taken.
     */
        {   "name": "reasonForUseCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "reasonForUseReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    [ /* Choice */ 
    /*The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the 'wasNotGiven' attribute is true).
     */
        {   "name": "effectiveDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "effectivePeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
    ], 
    { 
    /*Provides extra information about the medication statement that is not conveyed by the other attributes.
     */  "name": "note", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Allows linking the MedicationStatement to the underlying MedicationOrder, or to other information that supports the MedicationStatement.
     */  "name": "supportingInformation", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
     */
        {   "name": "medicationCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "medicationReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*Indicates how the medication is/was used by the patient.
     */  "name": "dosage", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "MedicationStatement.Dosage",
      "isPrimitive": false }, 
  ]
},
"MedicationStatement.Dosage": {
    /*A record of a medication that is being consumed by a patient.   A medication statements may indicate that the patient may be taking the medication now, or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from e.g. the patients’ memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains.

The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the Medication Statement information may come from the patient’s memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication Administration is more formal and is not missing detailed information.
     */
  "name": "MedicationStatement.Dosage",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Free text dosage information as reported about a patient's medication use. When coded dosage information is present, the free text may still be present for display to humans.
     */  "name": "text", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The timing schedule for giving the medication to the patient.  The Schedule data type allows many different expressions, for example.  "Every  8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:";  "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */  "name": "timing", 
    
      "min": "0", 
      "max": "1", 
      "type": "Timing",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).  

Specifically if 'boolean' datatype is selected, then the following logic applies:  If set to True, this indicates that the medication is only taken when needed, within the specified schedule.
     */
        {   "name": "asNeededBoolean", 
        
          "min": "1", 
          "max": "1", 
          "type": "boolean",
          "isPrimitive": true }, 
        {   "name": "asNeededCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
    ], 
    [ /* Choice */ 
    /*A coded specification of or a reference to the anatomic site where the medication first enters the body.
     */
        {   "name": "siteCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "siteReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*A code specifying the route or physiological path of administration of a therapeutic agent into or onto a subject.
     */  "name": "route", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A coded value indicating the method by which the medication is intended to be or was introduced into or on the body.  This attribute will most often NOT be populated.  It is most commonly used for injections.  Examples: Slow Push, Deep IV.  One of the reasons this attribute is not used often, is that the method is often pre-coordinated with the route and/or form of administration.  This means the codes used in route or form may pre-coordinate the method in the route code or the form code.  The implementation decision about what coding system to use for route or form code will determine how frequently the method code will be populated e.g. if route or form code pre-coordinate method code, then this attribute will not be populated often; if there is no pre-coordination then method code may  be used frequently.
     */  "name": "method", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*The amount of therapeutic or other substance given at one administration event.
     */
        {   "name": "quantityQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "SimpleQuantity",
          "isPrimitive": false }, 
        {   "name": "quantityRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
    ], 
    [ /* Choice */ 
    /*Identifies the speed with which the medication was or will be introduced into the patient. Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.   Currently we do not specify a default of '1' in the denominator, but this is being discussed. Other examples: 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
     */
        {   "name": "rateRatio", 
        
          "min": "1", 
          "max": "1", 
          "type": "Ratio",
          "isPrimitive": false }, 
        {   "name": "rateRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
    ], 
    { 
    /*The maximum total quantity of a therapeutic substance that may be administered to a subject over the period of time. E.g. 1000mg in 24 hours.
     */  "name": "maxDosePerPeriod", 
    
      "min": "0", 
      "max": "1", 
      "type": "Ratio",
      "isPrimitive": false }, 
  ]
},
"MedicationStatementStatus": {
    /*A set of codes indicating the current status of a MedicationStatementIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "MedicationStatementStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "MedicationStatementStatus-list" }, 
  ],
  "elems": [
  ]
},
"MessageHeader": {
    /*The header for a message exchange that is either requesting or responding to an action.  The Reference(s) that are the subject of the action as well as other Information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "MessageHeader",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The time that the message was sent.
     */  "name": "timestamp", 
    
      "min": "1", 
      "max": "1", 
      "type": "instant",
      "isPrimitive": true }, 
    { 
    /*Code that identifies the event this message represents and connects it with its definition. Events defined as part of the FHIR specification have the system value "http://hl7.org/fhir/message-events".
     */  "name": "event", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Information about the message that this message is a response to.  Only present if this message is a response.
     */  "name": "response", 
    
      "min": "0", 
      "max": "1", 
      "type": "MessageHeader.Response",
      "isPrimitive": false }, 
    { 
    /*The source application from which this message originated.
     */  "name": "source", 
    
      "min": "1", 
      "max": "1", 
      "type": "MessageHeader.Source",
      "isPrimitive": false }, 
    { 
    /*The destination application which the message is intended for.
     */  "name": "destination", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "MessageHeader.Destination",
      "isPrimitive": false }, 
    { 
    /*The person or device that performed the data entry leading to this message. Where there is more than one candidate, pick the most proximal to the message. Can provide other enterers in extensions.
     */  "name": "enterer", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The logical author of the message - the person or device that decided the described event should happen. Where there is more than one candidate, pick the most proximal to the MessageHeader. Can provide other authors in extensions.
     */  "name": "author", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.
     */  "name": "receiver", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The person or organization that accepts overall responsibility for the contents of the message. The implication is that the message event happened under the policies of the responsible party.
     */  "name": "responsible", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Coded indication of the cause for the event - indicates  a reason for the occurance of the event that is a focus of this message.
     */  "name": "reason", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The actual data of the message - a reference to the root/focus class of the event.
     */  "name": "data", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"MessageHeader.Response": {
    /*The header for a message exchange that is either requesting or responding to an action.  The Reference(s) that are the subject of the action as well as other Information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
     */
  "name": "MessageHeader.Response",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The id of the message that this message is a response to.
     */  "name": "identifier", 
    
      "min": "1", 
      "max": "1", 
      "type": "id",
      "isPrimitive": true }, 
    { 
    /*Code that identifies the type of response to the message - whether it was successful or not, and whether it should be resent or not.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "ResponseType",
      "isPrimitive": true }, 
    { 
    /*Full details of any issues found in the message.
     */  "name": "details", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"MessageHeader.Source": {
    /*The header for a message exchange that is either requesting or responding to an action.  The Reference(s) that are the subject of the action as well as other Information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
     */
  "name": "MessageHeader.Source",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Human-readable name for the source system.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*May include configuration or other information useful in debugging.
     */  "name": "software", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Can convey versions of multiple systems in situations where a message passes through multiple hands.
     */  "name": "version", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*An e-mail, phone, website or other contact point to use to resolve issues with message communications.
     */  "name": "contact", 
    
      "min": "0", 
      "max": "1", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
    { 
    /*Identifies the routing target to send acknowledgements to.
     */  "name": "endpoint", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
  ]
},
"MessageHeader.Destination": {
    /*The header for a message exchange that is either requesting or responding to an action.  The Reference(s) that are the subject of the action as well as other Information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
     */
  "name": "MessageHeader.Destination",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Human-readable name for the target system.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Identifies the target end system in situations where the initial message transmission is to an intermediary system.
     */  "name": "target", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Indicates where the message should be routed to.
     */  "name": "endpoint", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
  ]
},
"ResponseType": {
    /*The kind of response to a messageIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ResponseType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ResponseType-list" }, 
  ],
  "elems": [
  ]
},
"NamingSystem": {
    /*A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "NamingSystem",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The descriptive name of this particular identifier type or code system.
     */  "name": "name", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Indicates whether the namingsystem is "ready for use" or not.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*Indicates the purpose for the namingsystem - what kinds of things does it make unique?
     */  "name": "kind", 
    
      "min": "1", 
      "max": "1", 
      "type": "NamingSystemType",
      "isPrimitive": true }, 
    { 
    /*The name of the individual or organization that published the naming system.
     */  "name": "publisher", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contacts to assist a user in finding and communicating with the publisher.
     */  "name": "contact", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "NamingSystem.Contact",
      "isPrimitive": false }, 
    { 
    /*The name of the organization that is responsible for issuing identifiers or codes for this namespace and ensuring their non-collision.
     */  "name": "responsible", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The date  (and optionally time) when the system was registered or published. The date must change when the business version changes, if it does, and it must change if the status code changes. in addition, it should change when the substantiative content of the registration changes.
     */  "name": "date", 
    
      "min": "1", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Categorizes a namingsystem for easier search by grouping related namingsystems.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Details about what the namespace identifies including scope, granularity, version labeling, etc.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of naming systems.
     */  "name": "useContext", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.
     */  "name": "usage", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Indicates how the system may be identified when referenced in electronic exchange.
     */  "name": "uniqueId", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "NamingSystem.UniqueId",
      "isPrimitive": false }, 
    { 
    /*For namingsystems that are retired, indicates the namingsystem that should be used in their place (if any).
     */  "name": "replacedBy", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"NamingSystem.Contact": {
    /*A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
     */
  "name": "NamingSystem.Contact",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The name of an individual to contact regarding the naming system.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contact details for individual (if a name was provided) or the publisher.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
  ]
},
"NamingSystem.UniqueId": {
    /*A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
     */
  "name": "NamingSystem.UniqueId",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifies the unique identifier scheme used for this particular identifier.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "NamingSystemIdentifierType",
      "isPrimitive": true }, 
    { 
    /*The string that should be sent over the wire to identify the code system or identifier system.
     */  "name": "value", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Indicates whether this identifier is the "preferred" identifier of this type.
     */  "name": "preferred", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Identifies the period of time over which this identifier is considered appropriate to refer to the namingsystem.  Outside of this window, the identifier might be non-deterministic.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
  ]
},
"NamingSystemIdentifierType": {
    /*Identifies the style of unique identifier used to identify a namepaceIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "NamingSystemIdentifierType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "NamingSystemIdentifierType-list" }, 
  ],
  "elems": [
  ]
},
"NamingSystemType": {
    /*Identifies the purpose of the namingsystemIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "NamingSystemType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "NamingSystemType-list" }, 
  ],
  "elems": [
  ]
},
"NutritionOrder": {
    /*A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "NutritionOrder",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
     */  "name": "patient", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
     */  "name": "orderer", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifiers assigned to this order by the order sender or by the order receiver.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*An encounter that provides additional information about the healthcare context in which this request is made.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The date and time that this nutrition order was requested.
     */  "name": "dateTime", 
    
      "min": "1", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The workflow status of the nutrition order/request.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "NutritionOrderStatus",
      "isPrimitive": true }, 
    { 
    /*A link to a record of allergies or Intolerances  which should be included in the nutrition order.
     */  "name": "allergyIntolerance", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*This modifier is used to convey order-specific modifiers about the type of food that should be given. These can be derived from patient allergies, intolerances, or preferences such as Halal, Vegan or Kosher. This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
     */  "name": "foodPreferenceModifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*This modifier is used to convey order-specific modifiers about the type of food that should NOT be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced allergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patient’s diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
     */  "name": "excludeFoodModifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Diet given orally in contrast to enteral (tube) feeding.
     */  "name": "oralDiet", 
    
      "min": "0", 
      "max": "1", 
      "type": "NutritionOrder.OralDiet",
      "isPrimitive": false }, 
    { 
    /*Oral nutritional products given in order to add further nutritional value to the patient's diet.
     */  "name": "supplement", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "NutritionOrder.Supplement",
      "isPrimitive": false }, 
    { 
    /*Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
     */  "name": "enteralFormula", 
    
      "min": "0", 
      "max": "1", 
      "type": "NutritionOrder.EnteralFormula",
      "isPrimitive": false }, 
  ]
},
"NutritionOrder.OralDiet": {
    /*A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
     */
  "name": "NutritionOrder.OralDiet",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
     */  "name": "type", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The time period and frequency at which the diet should be given.
     */  "name": "schedule", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Timing",
      "isPrimitive": false }, 
    { 
    /*Class that defines the quantity and type of nutrient modifications required for the oral diet.
     */  "name": "nutrient", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "NutritionOrder.Nutrient",
      "isPrimitive": false }, 
    { 
    /*Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
     */  "name": "texture", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "NutritionOrder.Texture",
      "isPrimitive": false }, 
    { 
    /*The required consistency (e.g., honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
     */  "name": "fluidConsistencyType", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Free text or additional instructions or information pertaining to the oral diet.
     */  "name": "instruction", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"NutritionOrder.Nutrient": {
    /*A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
     */
  "name": "NutritionOrder.Nutrient",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The nutrient that is being modified such as carbohydrate or sodium.
     */  "name": "modifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The quantity of the specified nutrient to include in diet.
     */  "name": "amount", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
  ]
},
"NutritionOrder.Texture": {
    /*A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
     */
  "name": "NutritionOrder.Texture",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Any texture modifications (for solid foods) that should be made, e.g. easy to chew, chopped, ground, and pureed.
     */  "name": "modifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The food type(s) (e.g., meats, all foods)  that the texture modification applies to.  This could be all foods types.
     */  "name": "foodType", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
  ]
},
"NutritionOrder.Supplement": {
    /*A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
     */
  "name": "NutritionOrder.Supplement",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The product or brand name of the nutritional supplement such as "Acme Protein Shake".
     */  "name": "productName", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The time period and frequency at which the supplement(s) should be given.
     */  "name": "schedule", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Timing",
      "isPrimitive": false }, 
    { 
    /*The amount of the nutritional supplement to be given.
     */  "name": "quantity", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*Free text or additional instructions or information pertaining to the oral supplement.
     */  "name": "instruction", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"NutritionOrder.EnteralFormula": {
    /*A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
     */
  "name": "NutritionOrder.EnteralFormula",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
     */  "name": "baseFormulaType", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
     */  "name": "baseFormulaProductName", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
     */  "name": "additiveType", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The product or brand name of the type of modular component to be added to the formula.
     */  "name": "additiveProductName", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The amount of energy (Calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula the provides 24 Calories per fluid ounce or an adult may require an enteral formula that provides 1.5 Calorie/mL.
     */  "name": "caloricDensity", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*The route or physiological path of administration into the patient 's gastrointestinal  tract for purposes of providing the formula feeding, e.g., nasogastric tube.
     */  "name": "routeofAdministration", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Formula administration instructions as structured data.  This repeating structure allows for changing the administration rate or volume over time for both bolus and continuous feeding.  An example of this would be an instruction to increase the rate of continuous feeding every 2 hours.
     */  "name": "administration", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "NutritionOrder.Administration",
      "isPrimitive": false }, 
    { 
    /*The maximum total quantity of formula that may be administered to a subject over the period of time, e.g., 1440 mL over 24 hours.
     */  "name": "maxVolumeToDeliver", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*Free text formula administration, feeding instructions or additional instructions or information.
     */  "name": "administrationInstruction", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"NutritionOrder.Administration": {
    /*A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
     */
  "name": "NutritionOrder.Administration",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The time period and frequency at which the enteral formula should be delivered to the patient.
     */  "name": "schedule", 
    
      "min": "0", 
      "max": "1", 
      "type": "Timing",
      "isPrimitive": false }, 
    { 
    /*The volume of formula to provide to the patient per the specified administration schedule.
     */  "name": "quantity", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*The rate of administration of formula via a feeding pump, e.g., 60 mL per hour, according to the specified schedule.
     */
        {   "name": "rateQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "SimpleQuantity",
          "isPrimitive": false }, 
        {   "name": "rateRatio", 
        
          "min": "1", 
          "max": "1", 
          "type": "Ratio",
          "isPrimitive": false }, 
    ], 
  ]
},
"NutritionOrderStatus": {
    /*Codes specifying the state of the request. Describes the lifecycle of the nutrition order.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "NutritionOrderStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "NutritionOrderStatus-list" }, 
  ],
  "elems": [
  ]
},
"Observation": {
    /*Measurements and simple assertions made about a patient, device or other subject.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Observation",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A unique identifier for the simple observation instance.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The status of the result value.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "ObservationStatus",
      "isPrimitive": true }, 
    { 
    /*A code that classifies the the general type of observation being made.  This is used  for searching, sorting and display purposes.
     */  "name": "category", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Describes what was observed. Sometimes this is called the observation "name".
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The patient, or group of patients, location, or device whose characteristics (direct or indirect) are described by the observation and into whose record the observation is placed.  Comments: Indirect characteristics may be those of a specimen, fetus, donor,  other observer (for example a relative or EMT), or any observation made about the subject.
     */  "name": "subject", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The healthcare event  ( e.g. a patient and healthcare provider interaction ) during which this observation is made.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself.
     */
        {   "name": "effectiveDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "effectivePeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
    ], 
    { 
    /*The date and time this observation was made available to providers, typically after the results have been reviewed and verified.
     */  "name": "issued", 
    
      "min": "0", 
      "max": "1", 
      "type": "instant",
      "isPrimitive": true }, 
    { 
    /*Who was responsible for asserting the observed value as "true".
     */  "name": "performer", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*The information determined as a result of making the observation, if the information has a simple value.
     */
        {   "name": "valueQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "Quantity",
          "isPrimitive": false }, 
        {   "name": "valueCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "valueString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
        {   "name": "valueRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
        {   "name": "valueRatio", 
        
          "min": "1", 
          "max": "1", 
          "type": "Ratio",
          "isPrimitive": false }, 
        {   "name": "valueSampledData", 
        
          "min": "1", 
          "max": "1", 
          "type": "SampledData",
          "isPrimitive": false }, 
        {   "name": "valueAttachment", 
        
          "min": "1", 
          "max": "1", 
          "type": "Attachment",
          "isPrimitive": false }, 
        {   "name": "valueTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "time",
          "isPrimitive": true }, 
        {   "name": "valueDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "valuePeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
    ], 
    { 
    /*Provides a reason why the expected value in the element Observation.value[x] is missing.
     */  "name": "dataAbsentReason", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The assessment made based on the result of the observation.  Intended as a simple compact code often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result. Otherwise known as abnormal flag.
     */  "name": "interpretation", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*May include statements about significant, unexpected or unreliable values, or information about the source of the value where this may be relevant to the interpretation of the result.
     */  "name": "comments", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Indicates the site on the subject's body where the observation was made ( i.e. the target site).
     */  "name": "bodySite", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Indicates the mechanism used to perform the observation.
     */  "name": "method", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The specimen that was used when this observation was made.
     */  "name": "specimen", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The device used to generate the observation data.
     */  "name": "device", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Guidance on how to interpret the value by comparison to a normal or recommended range.
     */  "name": "referenceRange", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Observation.ReferenceRange",
      "isPrimitive": false }, 
    { 
    /*A  reference to another resource ( usually another Observation but could  also be a QuestionnaireAnswer) whose relationship is defined by the relationship type code.
     */  "name": "related", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Observation.Related",
      "isPrimitive": false }, 
    { 
    /*Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for for genetics observations.
     */  "name": "component", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Observation.Component",
      "isPrimitive": false }, 
  ]
},
"Observation.ReferenceRange": {
    /*Measurements and simple assertions made about a patient, device or other subject.
     */
  "name": "Observation.ReferenceRange",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9).   If the low bound is omitted,  it is assumed to be meaningless. (e.g. reference range is <=2.3).
     */  "name": "low", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9).   If the high bound is omitted,  it is assumed to be meaningless. (e.g. reference range is >= 2.3).
     */  "name": "high", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*Code for the meaning of the reference range.
     */  "name": "meaning", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.
     */  "name": "age", 
    
      "min": "0", 
      "max": "1", 
      "type": "Range",
      "isPrimitive": false }, 
    { 
    /*Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of 'normals'.
     */  "name": "text", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"Observation.Related": {
    /*Measurements and simple assertions made about a patient, device or other subject.
     */
  "name": "Observation.Related",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A code specifying the kind of relationship that exists with the target resource.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "ObservationRelationshipType",
      "isPrimitive": true }, 
    { 
    /*A reference to the observation or questionnaireanswer resource that is related to this observation.
     */  "name": "target", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"Observation.Component": {
    /*Measurements and simple assertions made about a patient, device or other subject.
     */
  "name": "Observation.Component",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Describes what was observed. Sometimes this is called the observation "code".
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*The information determined as a result of making the observation, if the information has a simple value.
     */
        {   "name": "valueQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "Quantity",
          "isPrimitive": false }, 
        {   "name": "valueCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "valueString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
        {   "name": "valueRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
        {   "name": "valueRatio", 
        
          "min": "1", 
          "max": "1", 
          "type": "Ratio",
          "isPrimitive": false }, 
        {   "name": "valueSampledData", 
        
          "min": "1", 
          "max": "1", 
          "type": "SampledData",
          "isPrimitive": false }, 
        {   "name": "valueAttachment", 
        
          "min": "1", 
          "max": "1", 
          "type": "Attachment",
          "isPrimitive": false }, 
        {   "name": "valueTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "time",
          "isPrimitive": true }, 
        {   "name": "valueDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "valuePeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
    ], 
    { 
    /*Provides a reason why the expected value in the element Observation.value[x] is missing.
     */  "name": "dataAbsentReason", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Guidance on how to interpret the value by comparison to a normal or recommended range.
     */  "name": "referenceRange", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Observation.ReferenceRange",
      "isPrimitive": false }, 
  ]
},
"ObservationRelationshipType": {
    /*Codes specifying how two observations are relatedIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ObservationRelationshipType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ObservationRelationshipType-list" }, 
  ],
  "elems": [
  ]
},
"ObservationStatus": {
    /*Codes providing the status of an observationIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ObservationStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ObservationStatus-list" }, 
  ],
  "elems": [
  ]
},
"OperationDefinition": {
    /*A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "OperationDefinition",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An absolute URL that is used to identify this operation definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this operation definition is (or will be) published.
     */  "name": "url", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*The identifier that is used to identify this version of the profile when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.
     */  "name": "version", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A free text natural language name identifying the operation.
     */  "name": "name", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The status of the profile.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*Whether this is operation or named query.
     */  "name": "kind", 
    
      "min": "1", 
      "max": "1", 
      "type": "OperationKind",
      "isPrimitive": true }, 
    { 
    /*This profile was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */  "name": "experimental", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*The name of the individual or organization that published the operation definition.
     */  "name": "publisher", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contacts to assist a user in finding and communicating with the publisher.
     */  "name": "contact", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "OperationDefinition.Contact",
      "isPrimitive": false }, 
    { 
    /*The date that this version of the profile was published. The date must change when the business version changes, if it does, and it must change if the status code changes. in addition, it should change when the substantiative content of the Operation Definition changes.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*A free text natural language description of the profile and its use.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Explains why this operation definition is needed and why it's been constrained as it has.
     */  "name": "requirements", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Operations that are idempotent (see [HTTP specification definition of idempotent](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)) may be invoked by performing an HTTP GET operation instead of a POST.
     */  "name": "idempotent", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*The name used to invoke the operation.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*Additional information about how to use this operation or named query.
     */  "name": "notes", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Indicates that this operation definition is a constraining profile on the base.
     */  "name": "base", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
     */  "name": "system", 
    
      "min": "1", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a resource type for the context).
     */  "name": "type", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*Indicates whether this operation can be invoked on a particular instance of one of the given types.
     */  "name": "instance", 
    
      "min": "1", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*The parameters for the operation/query.
     */  "name": "parameter", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "OperationDefinition.Parameter",
      "isPrimitive": false }, 
  ]
},
"OperationDefinition.Contact": {
    /*A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
     */
  "name": "OperationDefinition.Contact",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The name of an individual to contact regarding the operation definition.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contact details for individual (if a name was provided) or the publisher.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
  ]
},
"OperationDefinition.Parameter": {
    /*A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
     */
  "name": "OperationDefinition.Parameter",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The name of used to identify the parameter.
     */  "name": "name", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*Whether this is an input or an output parameter.
     */  "name": "use", 
    
      "min": "1", 
      "max": "1", 
      "type": "OperationParameterUse",
      "isPrimitive": true }, 
    { 
    /*The minimum number of times this parameter SHALL appear in the request or response.
     */  "name": "min", 
    
      "min": "1", 
      "max": "1", 
      "type": "integer",
      "isPrimitive": true }, 
    { 
    /*The maximum number of times this element is permitted to appear in the request or response.
     */  "name": "max", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Describes the meaning or use of this parameter.
     */  "name": "documentation", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The type for this parameter.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*A profile the specifies the rules that this parameter must conform to.
     */  "name": "profile", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
     */  "name": "binding", 
    
      "min": "0", 
      "max": "1", 
      "type": "OperationDefinition.Binding",
      "isPrimitive": false }, 
    { 
    /*The parts of a Tuple Parameter.
     */  "name": "part", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "OperationDefinition.Parameter",
      "isPrimitive": false }, 
  ]
},
"OperationDefinition.Binding": {
    /*A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
     */
  "name": "OperationDefinition.Binding",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
     */  "name": "strength", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    [ /* Choice */ 
    /*Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
     */
        {   "name": "valueSetUri", 
        
          "min": "1", 
          "max": "1", 
          "type": "uri",
          "isPrimitive": true }, 
        {   "name": "valueSetReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
  ]
},
"OperationParameterUse": {
    /*Whether an operation parameter is an input or an output parameterIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "OperationParameterUse",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "OperationParameterUse-list" }, 
  ],
  "elems": [
  ]
},
"OperationKind": {
    /*Whether an operation is a normal operation or a queryIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "OperationKind",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "OperationKind-list" }, 
  ],
  "elems": [
  ]
},
"OperationOutcome": {
    /*A collection of error, warning or information messages that result from a system action.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "OperationOutcome",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An error, warning or information message that results from a system action.
     */  "name": "issue", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "OperationOutcome.Issue",
      "isPrimitive": false }, 
  ]
},
"OperationOutcome.Issue": {
    /*A collection of error, warning or information messages that result from a system action.
     */
  "name": "OperationOutcome.Issue",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Indicates whether the issue indicates a variation from successful processing.
     */  "name": "severity", 
    
      "min": "1", 
      "max": "1", 
      "type": "IssueSeverity",
      "isPrimitive": true }, 
    { 
    /*Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "IssueType",
      "isPrimitive": true }, 
    { 
    /*Additional details about the error. This may be a text description of the error, or a system code that identifies the error.
     */  "name": "details", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Additional diagnostic information about the issue.  Typically, this may be a description of how a value is erroneous, or a stack dump to help trace the issue.
     */  "name": "diagnostics", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A simple XPath limited to element names, repetition indicators and the default child access that identifies one of the elements in the resource that caused this issue to be raised.
     */  "name": "location", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"IssueType": {
    /*A code that describes the type of issueIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "IssueType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "IssueType-list" }, 
  ],
  "elems": [
  ]
},
"IssueSeverity": {
    /*How the issue affects the success of the actionIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "IssueSeverity",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "IssueSeverity-list" }, 
  ],
  "elems": [
  ]
},
"Order": {
    /*A request to perform an action.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Order",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifiers assigned to this order by the orderer or by the receiver.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*When the order was made.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Patient this order is about.
     */  "name": "subject", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Who initiated the order.
     */  "name": "source", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Who is intended to fulfill the order.
     */  "name": "target", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*Text - why the order was made.
     */
        {   "name": "reasonCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "reasonReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*When order should be fulfilled.
     */  "name": "when", 
    
      "min": "0", 
      "max": "1", 
      "type": "Order.When",
      "isPrimitive": false }, 
    { 
    /*What action is being ordered.
     */  "name": "detail", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"Order.When": {
    /*A request to perform an action.
     */
  "name": "Order.When",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Code specifies when request should be done. The code may simply be a priority code.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A formal schedule.
     */  "name": "schedule", 
    
      "min": "0", 
      "max": "1", 
      "type": "Timing",
      "isPrimitive": false }, 
  ]
},
"OrderResponse": {
    /*A response to an order.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "OrderResponse",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifiers assigned to this order. The identifiers are usually assigned by the system responding to the order, but they may be provided or added to by other systems.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*A reference to the order that this is in response to.
     */  "name": "request", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The date and time at which this order response was made (created/posted).
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The person, organization, or device credited with making the response.
     */  "name": "who", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*What this response says about the status of the original order.
     */  "name": "orderStatus", 
    
      "min": "1", 
      "max": "1", 
      "type": "OrderStatus",
      "isPrimitive": true }, 
    { 
    /*Additional description about the response - e.g. a text description provided by a human user when making decisions about the order.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Links to resources that provide details of the outcome of performing the order. E.g. Diagnostic Reports in a response that is made to an order that referenced a diagnostic order.
     */  "name": "fulfillment", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"OrderStatus": {
    /*The status of the response to an orderIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "OrderStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "OrderStatus-list" }, 
  ],
  "elems": [
  ]
},
"Organization": {
    /*A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, etc.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Organization",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifier for the organization that is used to identify the organization across multiple disparate systems.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Whether the organization's record is still in active use.
     */  "name": "active", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*The kind of organization that this is.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A name associated with the organization.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A contact detail for the organization.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
    { 
    /*An address for the organization.
     */  "name": "address", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Address",
      "isPrimitive": false }, 
    { 
    /*The organization of which this organization forms a part.
     */  "name": "partOf", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Contact for the organization for a certain purpose.
     */  "name": "contact", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Organization.Contact",
      "isPrimitive": false }, 
  ]
},
"Organization.Contact": {
    /*A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, etc.
     */
  "name": "Organization.Contact",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Indicates a purpose for which the contact can be reached.
     */  "name": "purpose", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A name associated with the contact.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "HumanName",
      "isPrimitive": false }, 
    { 
    /*A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
    { 
    /*Visiting or postal addresses for the contact.
     */  "name": "address", 
    
      "min": "0", 
      "max": "1", 
      "type": "Address",
      "isPrimitive": false }, 
  ]
},
"Parameters": {
    /*This special resource type is used to represent [operation](operations.html] request and response. It has no other use, and there is no RESTful end=point associated with it.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Parameters",
  "base": "Resource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A parameter passed to or received from the operation.
     */  "name": "parameter", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Parameters.Parameter",
      "isPrimitive": false }, 
  ]
},
"Parameters.Parameter": {
    /*This special resource type is used to represent [operation](operations.html] request and response. It has no other use, and there is no RESTful end=point associated with it.
     */
  "name": "Parameters.Parameter",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The name of the parameter (reference to the operation definition).
     */  "name": "name", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    [ /* Choice */ 
    /*If the parameter is a data type.
     */
        {   "name": "valueBoolean", 
        
          "min": "1", 
          "max": "1", 
          "type": "boolean",
          "isPrimitive": true }, 
        {   "name": "valueInteger", 
        
          "min": "1", 
          "max": "1", 
          "type": "integer",
          "isPrimitive": true }, 
        {   "name": "valueDecimal", 
        
          "min": "1", 
          "max": "1", 
          "type": "decimal",
          "isPrimitive": true }, 
        {   "name": "valueBase64Binary", 
        
          "min": "1", 
          "max": "1", 
          "type": "base64Binary",
          "isPrimitive": true }, 
        {   "name": "valueInstant", 
        
          "min": "1", 
          "max": "1", 
          "type": "instant",
          "isPrimitive": true }, 
        {   "name": "valueString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
        {   "name": "valueUri", 
        
          "min": "1", 
          "max": "1", 
          "type": "uri",
          "isPrimitive": true }, 
        {   "name": "valueDate", 
        
          "min": "1", 
          "max": "1", 
          "type": "date",
          "isPrimitive": true }, 
        {   "name": "valueDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "valueTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "time",
          "isPrimitive": true }, 
        {   "name": "valueCode", 
        
          "min": "1", 
          "max": "1", 
          "type": "code",
          "isPrimitive": true }, 
        {   "name": "valueOid", 
        
          "min": "1", 
          "max": "1", 
          "type": "oid",
          "isPrimitive": true }, 
        {   "name": "valueUuid", 
        
          "min": "1", 
          "max": "1", 
          "type": "uuid",
          "isPrimitive": true }, 
        {   "name": "valueId", 
        
          "min": "1", 
          "max": "1", 
          "type": "id",
          "isPrimitive": true }, 
        {   "name": "valueUnsignedInt", 
        
          "min": "1", 
          "max": "1", 
          "type": "unsignedInt",
          "isPrimitive": true }, 
        {   "name": "valuePositiveInt", 
        
          "min": "1", 
          "max": "1", 
          "type": "positiveInt",
          "isPrimitive": true }, 
        {   "name": "valueMarkdown", 
        
          "min": "1", 
          "max": "1", 
          "type": "markdown",
          "isPrimitive": true }, 
        {   "name": "valueAnnotation", 
        
          "min": "1", 
          "max": "1", 
          "type": "Annotation",
          "isPrimitive": false }, 
        {   "name": "valueAttachment", 
        
          "min": "1", 
          "max": "1", 
          "type": "Attachment",
          "isPrimitive": false }, 
        {   "name": "valueIdentifier", 
        
          "min": "1", 
          "max": "1", 
          "type": "Identifier",
          "isPrimitive": false }, 
        {   "name": "valueCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "valueCoding", 
        
          "min": "1", 
          "max": "1", 
          "type": "Coding",
          "isPrimitive": false }, 
        {   "name": "valueQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "Quantity",
          "isPrimitive": false }, 
        {   "name": "valueRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
        {   "name": "valuePeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
        {   "name": "valueRatio", 
        
          "min": "1", 
          "max": "1", 
          "type": "Ratio",
          "isPrimitive": false }, 
        {   "name": "valueReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
        {   "name": "valueSampledData", 
        
          "min": "1", 
          "max": "1", 
          "type": "SampledData",
          "isPrimitive": false }, 
        {   "name": "valueSignature", 
        
          "min": "1", 
          "max": "1", 
          "type": "Signature",
          "isPrimitive": false }, 
        {   "name": "valueHumanName", 
        
          "min": "1", 
          "max": "1", 
          "type": "HumanName",
          "isPrimitive": false }, 
        {   "name": "valueAddress", 
        
          "min": "1", 
          "max": "1", 
          "type": "Address",
          "isPrimitive": false }, 
        {   "name": "valueContactPoint", 
        
          "min": "1", 
          "max": "1", 
          "type": "ContactPoint",
          "isPrimitive": false }, 
        {   "name": "valueTiming", 
        
          "min": "1", 
          "max": "1", 
          "type": "Timing",
          "isPrimitive": false }, 
        {   "name": "valueMeta", 
        
          "min": "1", 
          "max": "1", 
          "type": "Meta",
          "isPrimitive": false }, 
        {   "name": "valueElementDefinition", 
        
          "min": "1", 
          "max": "1", 
          "type": "ElementDefinition",
          "isPrimitive": false }, 
    ], 
    { 
    /*If the parameter is a whole resource.
     */  "name": "resource", 
    
      "min": "0", 
      "max": "1", 
      "type": "ResourceContainer",
      "isPrimitive": false }, 
    { 
    /*A named part of a parameter. In many implementation context, a set of named parts is known as a "Tuple".
     */  "name": "part", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Parameters.Parameter",
      "isPrimitive": false }, 
  ]
},
"Patient": {
    /*Demographics and other administrative information about an individual or animal receiving care or other health-related services.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Patient",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An identifier for this patient.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Whether this patient record is in active use.
     */  "name": "active", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*A name associated with the individual.
     */  "name": "name", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "HumanName",
      "isPrimitive": false }, 
    { 
    /*A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
    { 
    /*Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.
     */  "name": "gender", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*The date of birth for the individual.
     */  "name": "birthDate", 
    
      "min": "0", 
      "max": "1", 
      "type": "date",
      "isPrimitive": true }, 
    [ /* Choice */ 
    /*Indicates if the individual is deceased or not.
     */
        {   "name": "deceasedBoolean", 
        
          "min": "1", 
          "max": "1", 
          "type": "boolean",
          "isPrimitive": true }, 
        {   "name": "deceasedDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
    ], 
    { 
    /*Addresses for the individual.
     */  "name": "address", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Address",
      "isPrimitive": false }, 
    { 
    /*This field contains a patient's most recent marital (civil) status.
     */  "name": "maritalStatus", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*Indicates whether the patient is part of a multiple or indicates the actual birth order.
     */
        {   "name": "multipleBirthBoolean", 
        
          "min": "1", 
          "max": "1", 
          "type": "boolean",
          "isPrimitive": true }, 
        {   "name": "multipleBirthInteger", 
        
          "min": "1", 
          "max": "1", 
          "type": "integer",
          "isPrimitive": true }, 
    ], 
    { 
    /*Image of the patient.
     */  "name": "photo", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Attachment",
      "isPrimitive": false }, 
    { 
    /*A contact party (e.g. guardian, partner, friend) for the patient.
     */  "name": "contact", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Patient.Contact",
      "isPrimitive": false }, 
    { 
    /*This patient is known to be an animal.
     */  "name": "animal", 
    
      "min": "0", 
      "max": "1", 
      "type": "Patient.Animal",
      "isPrimitive": false }, 
    { 
    /*Languages which may be used to communicate with the patient about his or her health.
     */  "name": "communication", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Patient.Communication",
      "isPrimitive": false }, 
    { 
    /*Patient's nominated care provider.
     */  "name": "careProvider", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Organization that is the custodian of the patient record.
     */  "name": "managingOrganization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Link to another patient resource that concerns the same actual patient.
     */  "name": "link", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Patient.Link",
      "isPrimitive": false }, 
  ]
},
"Patient.Contact": {
    /*Demographics and other administrative information about an individual or animal receiving care or other health-related services.
     */
  "name": "Patient.Contact",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The nature of the relationship between the patient and the contact person.
     */  "name": "relationship", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A name associated with the contact person.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "HumanName",
      "isPrimitive": false }, 
    { 
    /*A contact detail for the person, e.g. a telephone number or an email address.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
    { 
    /*Address for the contact person.
     */  "name": "address", 
    
      "min": "0", 
      "max": "1", 
      "type": "Address",
      "isPrimitive": false }, 
    { 
    /*Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.
     */  "name": "gender", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*Organization on behalf of which the contact is acting or for which the contact is working.
     */  "name": "organization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The period during which this contact person or organization is valid to be contacted relating to this patient.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
  ]
},
"Patient.Animal": {
    /*Demographics and other administrative information about an individual or animal receiving care or other health-related services.
     */
  "name": "Patient.Animal",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifies the high level taxonomic categorization of the kind of animal.
     */  "name": "species", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Identifies the detailed categorization of the kind of animal.
     */  "name": "breed", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Indicates the current state of the animal's reproductive organs.
     */  "name": "genderStatus", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
  ]
},
"Patient.Communication": {
    /*Demographics and other administrative information about an individual or animal receiving care or other health-related services.
     */
  "name": "Patient.Communication",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case. E.g. "en" for English, or "en-US" for American English versus "en-EN" for England English.
     */  "name": "language", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Indicates whether or not the Patient prefers this language (over other languages he masters up a certain level).
     */  "name": "preferred", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
  ]
},
"Patient.Link": {
    /*Demographics and other administrative information about an individual or animal receiving care or other health-related services.
     */
  "name": "Patient.Link",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The other patient resource that the link refers to.
     */  "name": "other", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The type of link between this patient resource and another patient resource.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "LinkType",
      "isPrimitive": true }, 
  ]
},
"LinkType": {
    /*The type of link between this patient resource and another patient resource.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "LinkType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "LinkType-list" }, 
  ],
  "elems": [
  ]
},
"PaymentNotice": {
    /*This resource provides the status of the payment for goods and services rendered, and the request and response resource references.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "PaymentNotice",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The Response Business Identifier.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */  "name": "ruleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The style (standard) and version of the original material which was converted into this resource.
     */  "name": "originalRuleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The date when this resource was created.
     */  "name": "created", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The Insurer who is target  of the request.
     */  "name": "target", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The practitioner who is responsible for the services rendered to the patient.
     */  "name": "provider", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The organization which is responsible for the services rendered to the patient.
     */  "name": "organization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Reference of resource to reverse.
     */  "name": "request", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Reference of response to resource to reverse.
     */  "name": "response", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The payment status, typically paid: payment sent, cleared: payment received.
     */  "name": "paymentStatus", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
  ]
},
"PaymentReconciliation": {
    /*This resource provides payment details and claim references supporting a bulk payment.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "PaymentReconciliation",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The Response Business Identifier.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Original request resource reference.
     */  "name": "request", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Transaction status: error, complete.
     */  "name": "outcome", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*A description of the status of the adjudication.
     */  "name": "disposition", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */  "name": "ruleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The style (standard) and version of the original material which was converted into this resource.
     */  "name": "originalRuleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The date when the enclosed suite of services were performed or completed.
     */  "name": "created", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The period of time for which payments have been gathered into this bulk payment for settlement.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*The Insurer who produced this adjudicated response.
     */  "name": "organization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The practitioner who is responsible for the services rendered to the patient.
     */  "name": "requestProvider", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The organization which is responsible for the services rendered to the patient.
     */  "name": "requestOrganization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*List of individual settlement amounts and the corresponding transaction.
     */  "name": "detail", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "PaymentReconciliation.Detail",
      "isPrimitive": false }, 
    { 
    /*The form to be used for printing the content.
     */  "name": "form", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Total payment amount.
     */  "name": "total", 
    
      "min": "1", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
    { 
    /*Suite of notes.
     */  "name": "note", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "PaymentReconciliation.Note",
      "isPrimitive": false }, 
  ]
},
"PaymentReconciliation.Detail": {
    /*This resource provides payment details and claim references supporting a bulk payment.
     */
  "name": "PaymentReconciliation.Detail",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Code to indicate the nature of the payment, adjustment, funds advance, etc.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The claim or financial resource.
     */  "name": "request", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The claim response resource.
     */  "name": "responce", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The Organization which submitted the invoice or financial transaction.
     */  "name": "submitter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The organization which is receiving the payment.
     */  "name": "payee", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The date of the invoice or financial resource.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "date",
      "isPrimitive": true }, 
    { 
    /*Amount paid for this detail.
     */  "name": "amount", 
    
      "min": "0", 
      "max": "1", 
      "type": "Money",
      "isPrimitive": false }, 
  ]
},
"PaymentReconciliation.Note": {
    /*This resource provides payment details and claim references supporting a bulk payment.
     */
  "name": "PaymentReconciliation.Note",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The note purpose: Print/Display.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The note text.
     */  "name": "text", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"Person": {
    /*Demographics and administrative information about a person independent of a specific health-related context.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Person",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifier for a person within a particular scope.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*A name associated with the person.
     */  "name": "name", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "HumanName",
      "isPrimitive": false }, 
    { 
    /*A contact detail for the person, e.g. a telephone number or an email address.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
    { 
    /*Administrative Gender.
     */  "name": "gender", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*The birth date for the person.
     */  "name": "birthDate", 
    
      "min": "0", 
      "max": "1", 
      "type": "date",
      "isPrimitive": true }, 
    { 
    /*One or more addresses for the person.
     */  "name": "address", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Address",
      "isPrimitive": false }, 
    { 
    /*An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
     */  "name": "photo", 
    
      "min": "0", 
      "max": "1", 
      "type": "Attachment",
      "isPrimitive": false }, 
    { 
    /*The Organization that is the custodian of the person record.
     */  "name": "managingOrganization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Whether this person's record is in active use.
     */  "name": "active", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Link to a resource that concerns the same actual person.
     */  "name": "link", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Person.Link",
      "isPrimitive": false }, 
  ]
},
"Person.Link": {
    /*Demographics and administrative information about a person independent of a specific health-related context.
     */
  "name": "Person.Link",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The resource to which this actual person is associated.
     */  "name": "target", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Level of assurance that this link is actually associated with the target resource.
     */  "name": "assurance", 
    
      "min": "0", 
      "max": "1", 
      "type": "IdentityAssuranceLevel",
      "isPrimitive": true }, 
  ]
},
"IdentityAssuranceLevel": {
    /*The level of confidence that this link represents the same actual person, based on NIST Authentication LevelsIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "IdentityAssuranceLevel",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "IdentityAssuranceLevel-list" }, 
  ],
  "elems": [
  ]
},
"Practitioner": {
    /*A person who is directly or indirectly involved in the provisioning of healthcare.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Practitioner",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An identifier that applies to this person in this role.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Whether this practitioner's record is in active use.
     */  "name": "active", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*A name associated with the person.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "HumanName",
      "isPrimitive": false }, 
    { 
    /*A contact detail for the practitioner, e.g. a telephone number or an email address.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
    { 
    /*The postal address where the practitioner can be found or visited or to which mail can be delivered.
     */  "name": "address", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Address",
      "isPrimitive": false }, 
    { 
    /*Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
     */  "name": "gender", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*The date of birth for the practitioner.
     */  "name": "birthDate", 
    
      "min": "0", 
      "max": "1", 
      "type": "date",
      "isPrimitive": true }, 
    { 
    /*Image of the person.
     */  "name": "photo", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Attachment",
      "isPrimitive": false }, 
    { 
    /*The list of Roles/Organizations that the Practitioner is associated with.
     */  "name": "practitionerRole", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Practitioner.PractitionerRole",
      "isPrimitive": false }, 
    { 
    /*Qualifications obtained by training and certification.
     */  "name": "qualification", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Practitioner.Qualification",
      "isPrimitive": false }, 
    { 
    /*A language the practitioner is able to use in patient communication.
     */  "name": "communication", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
  ]
},
"Practitioner.PractitionerRole": {
    /*A person who is directly or indirectly involved in the provisioning of healthcare.
     */
  "name": "Practitioner.PractitionerRole",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The Organization where the Practitioner performs the roles associated.
     */  "name": "managingOrganization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Roles which this practitioner is authorized to perform for the organization.
     */  "name": "role", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Specific specialty of the practitioner.
     */  "name": "specialty", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*The location(s) at which this practitioner provides care.
     */  "name": "location", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The list of healthcare services that this worker provides for this role's Organization/Location(s).
     */  "name": "healthcareService", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"Practitioner.Qualification": {
    /*A person who is directly or indirectly involved in the provisioning of healthcare.
     */
  "name": "Practitioner.Qualification",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An identifier that applies to this person's qualification in this role.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Coded representation of the qualification.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Period during which the qualification is valid.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*Organization that regulates and issues the qualification.
     */  "name": "issuer", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"Procedure": {
    /*An action that is or was performed on a patient. This can be a physical 'thing' like an operation, or less invasive like counseling or hypnotherapy.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Procedure",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*This records identifiers associated with this procedure that are defined by business processed and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The person on whom the procedure was performed.
     */  "name": "subject", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*A code specifying the state of the procedure record. Generally this will be in-progress or completed state.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "ProcedureStatus",
      "isPrimitive": true }, 
    { 
    /*A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure").
     */  "name": "category", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The specific procedure that is performed. Use text if the exact nature of the procedure can't be coded (e.g. "Laparoscopic Appendectomy").
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Set this to true if the record is saying that the procedure was NOT performed.
     */  "name": "notPerformed", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*A code indicating why the procedure was not performed.
     */  "name": "reasonNotPerformed", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Detailed and structured anatomical location information. Multiple locations are allowed - e.g. multiple punch biopsies of a lesion.
     */  "name": "bodySite", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*The reason why the procedure was performed. This may be due to a Condition, may be coded entity of some type, or may simply be present as text.
     */
        {   "name": "reasonCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "reasonReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*Limited to 'real' people rather than equipment.
     */  "name": "performer", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Procedure.Performer",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*The date(time)/period over which the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured.
     */
        {   "name": "performedDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "performedPeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
    ], 
    { 
    /*The encounter during which the procedure was performed.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The location where the procedure actually happened.  e.g. a newborn at home, a tracheostomy at a restaurant.
     */  "name": "location", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*What was the outcome of the procedure - did it resolve reasons why the procedure was performed?
     */  "name": "outcome", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*This could be a histology result. There could potentially be multiple reports - e.g. if this was a procedure that made multiple biopsies.
     */  "name": "report", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Any complications that occurred during the procedure, or in the immediate post-operative period. These are generally tracked separately from the notes, which typically will describe the procedure itself rather than any 'post procedure' issues.
     */  "name": "complication", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*If the procedure required specific follow up - e.g. removal of sutures. The followup may be represented as a simple note, or potentially could be more complex in which case the CarePlan resource can be used.
     */  "name": "followUp", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A reference to a resource that contains about this procedure's request.
     */  "name": "request", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Any other notes about the procedure - e.g. the operative notes.
     */  "name": "notes", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Annotation",
      "isPrimitive": false }, 
    { 
    /*A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
     */  "name": "focalDevice", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Procedure.FocalDevice",
      "isPrimitive": false }, 
    { 
    /*Identifies medications, devices and other substance used as part of the procedure.
     */  "name": "used", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"Procedure.Performer": {
    /*An action that is or was performed on a patient. This can be a physical 'thing' like an operation, or less invasive like counseling or hypnotherapy.
     */
  "name": "Procedure.Performer",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The practitioner who was involved in the procedure.
     */  "name": "actor", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*E.g. surgeon, anaethetist, endoscopist.
     */  "name": "role", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
  ]
},
"Procedure.FocalDevice": {
    /*An action that is or was performed on a patient. This can be a physical 'thing' like an operation, or less invasive like counseling or hypnotherapy.
     */
  "name": "Procedure.FocalDevice",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The kind of change that happened to the device during the procedure.
     */  "name": "action", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The device that was manipulated (changed) during the procedure.
     */  "name": "manipulated", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"ProcedureStatus": {
    /*A code specifying the state of the procedure recordIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ProcedureStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ProcedureStatus-list" }, 
  ],
  "elems": [
  ]
},
"ProcedureRequest": {
    /*A request for a procedure to be performed. May be a proposal or an order.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ProcedureRequest",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifiers assigned to this order by the order or by the receiver.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The patient who will receive the procedure or a group of subjects.
     */  "name": "subject", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The specific procedure that is ordered. Use text if the exact nature of the procedure can't be coded.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Indicates the sites on the subject's body where the procedure should be performed ( i.e. the target sites).
     */  "name": "bodySite", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*The reason why the procedure is proposed or ordered. This procedure request may be motivated by a Condition for instance.
     */
        {   "name": "reasonCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "reasonReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    [ /* Choice */ 
    /*The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
        {   "name": "scheduledDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "scheduledPeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
        {   "name": "scheduledTiming", 
        
          "min": "1", 
          "max": "1", 
          "type": "Timing",
          "isPrimitive": false }, 
    ], 
    { 
    /*The encounter within which the procedure proposal or request was created.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*E.g. surgeon, anaethetist, endoscopist.
     */  "name": "performer", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The status of the order.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "ProcedureRequestStatus",
      "isPrimitive": true }, 
    { 
    /*Any other notes associated with this proposal or order - e.g., provider instructions.
     */  "name": "notes", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Annotation",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.
     */
        {   "name": "asNeededBoolean", 
        
          "min": "1", 
          "max": "1", 
          "type": "boolean",
          "isPrimitive": true }, 
        {   "name": "asNeededCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
    ], 
    { 
    /*The time when the request was made.
     */  "name": "orderedOn", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The healthcare professional responsible for proposing or ordering the procedure.
     */  "name": "orderer", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The clinical priority associated with this order.
     */  "name": "priority", 
    
      "min": "0", 
      "max": "1", 
      "type": "ProcedureRequestPriority",
      "isPrimitive": true }, 
  ]
},
"ProcedureRequestStatus": {
    /*The status of the requestIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ProcedureRequestStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ProcedureRequestStatus-list" }, 
  ],
  "elems": [
  ]
},
"ProcedureRequestPriority": {
    /*The priority of the requestIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ProcedureRequestPriority",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ProcedureRequestPriority-list" }, 
  ],
  "elems": [
  ]
},
"ProcessRequest": {
    /*This resource provides the target, request and response, and action details for an action to be performed by the target on or about existing resources.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ProcessRequest",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The type of procesing action being requested, for example Reversal, Readjudication, StatusRequest,PendedRequest.
     */  "name": "action", 
    
      "min": "1", 
      "max": "1", 
      "type": "ActionList",
      "isPrimitive": true }, 
    { 
    /*The ProcessRequest Business Identifier.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */  "name": "ruleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The style (standard) and version of the original material which was converted into this resource.
     */  "name": "originalRuleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The date when this resource was created.
     */  "name": "created", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The organization which is target  of the request.
     */  "name": "target", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The practitioner who is responsible for the action specified in thise request.
     */  "name": "provider", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The organization which is responsible for the action speccified in thise request.
     */  "name": "organization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Reference of resource which is the target or subject of this action.
     */  "name": "request", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Reference of a prior response to resource which is the target or subject of this action.
     */  "name": "response", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*If true remove all history excluding audit.
     */  "name": "nullify", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*A reference to supply which authenticates the process.
     */  "name": "reference", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated.
     */  "name": "item", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ProcessRequest.Item",
      "isPrimitive": false }, 
    { 
    /*Names of resource types to include.
     */  "name": "include", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Names of resource types to exclude.
     */  "name": "exclude", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A period of time during which the fulfilling resources would have been created.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
  ]
},
"ProcessRequest.Item": {
    /*This resource provides the target, request and response, and action details for an action to be performed by the target on or about existing resources.
     */
  "name": "ProcessRequest.Item",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A service line number.
     */  "name": "sequenceLinkId", 
    
      "min": "1", 
      "max": "1", 
      "type": "integer",
      "isPrimitive": true }, 
  ]
},
"ActionList": {
    /*List of allowable action which this resource can requestIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ActionList",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ActionList-list" }, 
  ],
  "elems": [
  ]
},
"ProcessResponse": {
    /*This resource provides processing status, errors and notes from the processing of a resource.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ProcessResponse",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The Response Business Identifier.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Original request resource reference.
     */  "name": "request", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Transaction status: error, complete, held.
     */  "name": "outcome", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*A description of the status of the adjudication or processing.
     */  "name": "disposition", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */  "name": "ruleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The style (standard) and version of the original material which was converted into this resource.
     */  "name": "originalRuleset", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The date when the enclosed suite of services were performed or completed.
     */  "name": "created", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The organization who produced this adjudicated response.
     */  "name": "organization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The practitioner who is responsible for the services rendered to the patient.
     */  "name": "requestProvider", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The organization which is responsible for the services rendered to the patient.
     */  "name": "requestOrganization", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The form to be used for printing the content.
     */  "name": "form", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Suite of processing note or additional requirements is the processing has been held.
     */  "name": "notes", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ProcessResponse.Notes",
      "isPrimitive": false }, 
    { 
    /*Processing errors.
     */  "name": "error", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
  ]
},
"ProcessResponse.Notes": {
    /*This resource provides processing status, errors and notes from the processing of a resource.
     */
  "name": "ProcessResponse.Notes",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The note purpose: Print/Display.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The note text.
     */  "name": "text", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"Provenance": {
    /*Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g., Document Completion - has the artifact been legally authenticated), all of which may impact Security, Privacy, and Trust policies.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Provenance",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The Reference(s) that were generated or updated by  the activity described in this resource. A provenance can point to more than one target if multiple resources were created/updated by the same activity.
     */  "name": "target", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The period during which the activity occurred.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*The instant of time at which the activity was recorded.
     */  "name": "recorded", 
    
      "min": "1", 
      "max": "1", 
      "type": "instant",
      "isPrimitive": true }, 
    { 
    /*The reason that the activity was taking place.
     */  "name": "reason", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.
     */  "name": "activity", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Where the activity occurred, if relevant.
     */  "name": "location", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Policy or plan the activity was defined by. Typically, a single activity may have multiple applicable policy documents, such as patient consent, guarantor funding, etc.
     */  "name": "policy", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*An agent takes a role in an activity such that the agent can be assigned some degree of responsibility for the activity taking place. An agent can be a person, an organization, software, or other entities that may be ascribed responsibility.
     */  "name": "agent", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Provenance.Agent",
      "isPrimitive": false }, 
    { 
    /*An entity used in this activity.
     */  "name": "entity", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Provenance.Entity",
      "isPrimitive": false }, 
    { 
    /*A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated.
     */  "name": "signature", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Signature",
      "isPrimitive": false }, 
  ]
},
"Provenance.Agent": {
    /*Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g., Document Completion - has the artifact been legally authenticated), all of which may impact Security, Privacy, and Trust policies.
     */
  "name": "Provenance.Agent",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The function of the agent with respect to the activity.
     */  "name": "role", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The individual, device or organization that participated in the event.
     */  "name": "actor", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The identify of the agent as known by the authorization system.
     */  "name": "userId", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*A relationship between two the agents referenced in this resource. This is defined to allow for explicit description of the delegation between agents - e.g. this human author used this device, or one person acted on another's behest.
     */  "name": "relatedAgent", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Provenance.RelatedAgent",
      "isPrimitive": false }, 
  ]
},
"Provenance.RelatedAgent": {
    /*Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g., Document Completion - has the artifact been legally authenticated), all of which may impact Security, Privacy, and Trust policies.
     */
  "name": "Provenance.RelatedAgent",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The type of relationship between agents.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*An internal reference to another agent listed in this provenance by it's id.
     */  "name": "target", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
  ]
},
"Provenance.Entity": {
    /*Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g., Document Completion - has the artifact been legally authenticated), all of which may impact Security, Privacy, and Trust policies.
     */
  "name": "Provenance.Entity",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*How the entity was used during the activity.
     */  "name": "role", 
    
      "min": "1", 
      "max": "1", 
      "type": "ProvenanceEntityRole",
      "isPrimitive": true }, 
    { 
    /*The type of the entity. If the entity is a resource, then this is a resource type.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.
     */  "name": "reference", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*Human-readable description of the entity.
     */  "name": "display", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The entity is attributed to an agent to express the agent's responsibility for that entity, possibly along with other agents. This description can be understood as shorthand for saying that the agent was responsible for the activity which generated the entity.
     */  "name": "agent", 
    
      "min": "0", 
      "max": "1", 
      "type": "Provenance.Agent",
      "isPrimitive": false }, 
  ]
},
"ProvenanceEntityRole": {
    /*How an entity was used in an activityIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ProvenanceEntityRole",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ProvenanceEntityRole-list" }, 
  ],
  "elems": [
  ]
},
"Questionnaire": {
    /*A structured set of questions intended to guide the collection of answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the underlying questions.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Questionnaire",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*This records identifiers associated with this question set that are defined by business processed and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The version number assigned by the publisher for business reasons.  It may remain the same when the resource is updated.
     */  "name": "version", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The lifecycle status of the questionnaire as a whole.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "QuestionnaireStatus",
      "isPrimitive": true }, 
    { 
    /*The date that this questionnaire was last changed.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Organization or person responsible for developing and maintaining the questionnaire.
     */  "name": "publisher", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contact details to assist a user in finding and communicating with the publisher.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
    { 
    /*Identifies the types of subjects that can be the subject of the questionnaire.
     */  "name": "subjectType", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*A collection of related questions (or further groupings of questions).
     */  "name": "group", 
    
      "min": "1", 
      "max": "1", 
      "type": "Questionnaire.Group",
      "isPrimitive": false }, 
  ]
},
"Questionnaire.Group": {
    /*A structured set of questions intended to guide the collection of answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the underlying questions.
     */
  "name": "Questionnaire.Group",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An identifier that is unique within the questionnaire allowing linkage to the equivalent group in a QuestionnaireResponse resource.
     */  "name": "linkId", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The human-readable name for this section of the questionnaire.
     */  "name": "title", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Identifies a how this group of questions is known in a particular terminology such as LOINC.
     */  "name": "concept", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Additional text for the group, used for display purposes.
     */  "name": "text", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*If true, indicates that the group must be present and have required questions within it answered.  If false, the group may be skipped when answering the questionnaire.
     */  "name": "required", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Whether the group may occur multiple times in the instance, containing multiple sets of answers.
     */  "name": "repeats", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*A sub-group within a group. The ordering of groups within this group is relevant.
     */  "name": "group", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Questionnaire.Group",
      "isPrimitive": false }, 
    { 
    /*Set of questions within this group. The order of questions within the group is relevant.
     */  "name": "question", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Questionnaire.Question",
      "isPrimitive": false }, 
  ]
},
"Questionnaire.Question": {
    /*A structured set of questions intended to guide the collection of answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the underlying questions.
     */
  "name": "Questionnaire.Question",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An identifier that is unique within the questionnaire allowing linkage to the equivalent group in a [[[QuestionnaireResponse]]] resource.
     */  "name": "linkId", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Identifies a how this question is known in a particular terminology such as LOINC.
     */  "name": "concept", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The actual question as shown to the user to prompt them for an answer.
     */  "name": "text", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The expected format of the answer, e.g. the type of input (string, integer) or whether a (multiple) choice is expected.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "AnswerFormat",
      "isPrimitive": true }, 
    { 
    /*If true, indicates that the question must be answered and have required groups within it also present.  If false, the question and any contained groups may be skipped when answering the questionnaire.
     */  "name": "required", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*If true, the question may have more than one answer.
     */  "name": "repeats", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Reference to a valueset containing the a list of codes representing permitted answers for the question.
     */  "name": "options", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*For a "choice" question, identifies one of the permitted answers for the question.
     */  "name": "option", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*Nested group, containing nested question for this question. The order of groups within the question is relevant.
     */  "name": "group", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Questionnaire.Group",
      "isPrimitive": false }, 
  ]
},
"QuestionnaireStatus": {
    /*Lifecycle status of the questionnaireIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "QuestionnaireStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "QuestionnaireStatus-list" }, 
  ],
  "elems": [
  ]
},
"AnswerFormat": {
    /*The expected format of an answerIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AnswerFormat",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "AnswerFormat-list" }, 
  ],
  "elems": [
  ]
},
"QuestionnaireResponse": {
    /*A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the underlying questions.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "QuestionnaireResponse",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A business identifier assigned to a particular completed (or partially completed) questionnaire.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Indicates the Questionnaire resource that defines the form for which answers are being provided.
     */  "name": "questionnaire", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The lifecycle status of the questionnaire response as a whole.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "QuestionnaireResponseStatus",
      "isPrimitive": true }, 
    { 
    /*The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information.
     */  "name": "subject", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Person who received the answers to the questions in the QuestionnaireResponse and recorded them in the system.
     */  "name": "author", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The date and/or time that this version of the questionnaire response was authored.
     */  "name": "authored", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The person who answered the questions about the subject.
     */  "name": "source", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Encounter during which this set of questionnaire response were collected. When there were multiple encounters, this is the one considered most relevant to the context of the answers.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*A group of questions to a possibly similarly grouped set of questions in the questionnaire response.
     */  "name": "group", 
    
      "min": "0", 
      "max": "1", 
      "type": "QuestionnaireResponse.Group",
      "isPrimitive": false }, 
  ]
},
"QuestionnaireResponse.Group": {
    /*A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the underlying questions.
     */
  "name": "QuestionnaireResponse.Group",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifies the group from the Questionnaire that corresponds to this group in the QuestionnaireResponse resource.
     */  "name": "linkId", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Text that is displayed above the contents of the group.
     */  "name": "title", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Additional text for the group, used for display purposes.
     */  "name": "text", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*More specific subject this section's answers are about, details the subject given in QuestionnaireResponse.
     */  "name": "subject", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*A sub-group within a group. The ordering of groups within this group is relevant.
     */  "name": "group", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "QuestionnaireResponse.Group",
      "isPrimitive": false }, 
    { 
    /*Set of questions within this group. The order of questions within the group is relevant.
     */  "name": "question", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "QuestionnaireResponse.Question",
      "isPrimitive": false }, 
  ]
},
"QuestionnaireResponse.Question": {
    /*A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the underlying questions.
     */
  "name": "QuestionnaireResponse.Question",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifies the question from the Questionnaire that corresponds to this question in the QuestionnaireResponse resource.
     */  "name": "linkId", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The actual question as shown to the user to prompt them for an answer.
     */  "name": "text", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The respondent's answer(s) to the question.
     */  "name": "answer", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "QuestionnaireResponse.Answer",
      "isPrimitive": false }, 
  ]
},
"QuestionnaireResponse.Answer": {
    /*A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the underlying questions.
     */
  "name": "QuestionnaireResponse.Answer",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    [ /* Choice */ 
    /*The answer (or one of the answers) provided by the respondant to the question.
     */
        {   "name": "valueBoolean", 
        
          "min": "1", 
          "max": "1", 
          "type": "boolean",
          "isPrimitive": true }, 
        {   "name": "valueDecimal", 
        
          "min": "1", 
          "max": "1", 
          "type": "decimal",
          "isPrimitive": true }, 
        {   "name": "valueInteger", 
        
          "min": "1", 
          "max": "1", 
          "type": "integer",
          "isPrimitive": true }, 
        {   "name": "valueDate", 
        
          "min": "1", 
          "max": "1", 
          "type": "date",
          "isPrimitive": true }, 
        {   "name": "valueDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "valueInstant", 
        
          "min": "1", 
          "max": "1", 
          "type": "instant",
          "isPrimitive": true }, 
        {   "name": "valueTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "time",
          "isPrimitive": true }, 
        {   "name": "valueString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
        {   "name": "valueUri", 
        
          "min": "1", 
          "max": "1", 
          "type": "uri",
          "isPrimitive": true }, 
        {   "name": "valueAttachment", 
        
          "min": "1", 
          "max": "1", 
          "type": "Attachment",
          "isPrimitive": false }, 
        {   "name": "valueCoding", 
        
          "min": "1", 
          "max": "1", 
          "type": "Coding",
          "isPrimitive": false }, 
        {   "name": "valueQuantity", 
        
          "min": "1", 
          "max": "1", 
          "type": "Quantity",
          "isPrimitive": false }, 
        {   "name": "valueReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*Nested group, containing nested question for this question. The order of groups within the question is relevant.
     */  "name": "group", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "QuestionnaireResponse.Group",
      "isPrimitive": false }, 
  ]
},
"QuestionnaireResponseStatus": {
    /*Lifecycle status of the questionnaire responseIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "QuestionnaireResponseStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "QuestionnaireResponseStatus-list" }, 
  ],
  "elems": [
  ]
},
"ReferralRequest": {
    /*Used to record and send details about a request for referral service or transfer of a patient to the care of another provider or provider organisation.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ReferralRequest",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The workflow status of the referral or transfer of care request.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "ReferralStatus",
      "isPrimitive": true }, 
    { 
    /*Business Id that uniquely identifies the referral/care transfer request instance.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Date/DateTime of creation for draft requests and date of activation for active requests.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*An indication of the type of referral (or where applicable the type of transfer of care) request.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Indication of the clinical domain or discipline to which the referral or transfer of care request is sent.
     */  "name": "specialty", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*An indication of the urgency of referral (or where applicable the type of transfer of care) request.
     */  "name": "priority", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The patient who is the subject of a referral or transfer of care request.
     */  "name": "patient", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The healthcare provider or provider organization who/which initaited the referral/transfer of care request. Can also be  Patient (a self referral).
     */  "name": "requester", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The healthcare provider(s) or provider organization(s) who/which is to receive the referral/transfer of care request.
     */  "name": "recipient", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The encounter at which the request for referral or transfer of care is initiated.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Date/DateTime the request for referral or transfer of care is sent by the author.
     */  "name": "dateSent", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Description of clinical condition indicating why referral/transfer of care is requested.
     */  "name": "reason", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The reason gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The service(s) that is/are requested to be provided to the patient.
     */  "name": "serviceRequested", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Any additional (administrative, financial or clinical) information required to support request for referral or transfer of care.
     */  "name": "supportingInformation", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The period of time within which the services identified in the referral/transfer of care is specified or required to occur.
     */  "name": "fulfillmentTime", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
  ]
},
"ReferralStatus": {
    /*The status of the referralIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ReferralStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ReferralStatus-list" }, 
  ],
  "elems": [
  ]
},
"RelatedPerson": {
    /*Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "RelatedPerson",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifier for a person within a particular scope.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The patient this person is related to.
     */  "name": "patient", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The nature of the relationship between a patient and the related person.
     */  "name": "relationship", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A name associated with the person.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "HumanName",
      "isPrimitive": false }, 
    { 
    /*A contact detail for the person, e.g. a telephone number or an email address.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
    { 
    /*Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
     */  "name": "gender", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*The date on which the related person was born.
     */  "name": "birthDate", 
    
      "min": "0", 
      "max": "1", 
      "type": "date",
      "isPrimitive": true }, 
    { 
    /*Address where the related person can be contacted or visited.
     */  "name": "address", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Address",
      "isPrimitive": false }, 
    { 
    /*Image of the person.
     */  "name": "photo", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Attachment",
      "isPrimitive": false }, 
    { 
    /*The period of time that this relationship is considered to be valid. If there are no dates defined, then the interval is unknown.
     */  "name": "period", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
  ]
},
"RiskAssessment": {
    /*An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "RiskAssessment",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The patient or group the risk assessment applies to.
     */  "name": "subject", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The date (and possibly time) the risk assessment was performed.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
     */  "name": "condition", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The encounter where the assessement was performed.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The provider or software application that performed the assessment.
     */  "name": "performer", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Business identifier assigned to the risk assessment.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The algorithm, processs or mechanism used to evaluate the risk.
     */  "name": "method", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Indicates the source data considered as part of the assessment (FamilyHistory, Observations, Procedures, Conditions, etc.).
     */  "name": "basis", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Describes the expected outcome for the subject.
     */  "name": "prediction", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "RiskAssessment.Prediction",
      "isPrimitive": false }, 
    { 
    /*A description of the steps that might be taken to reduce the identified risk(s).
     */  "name": "mitigation", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"RiskAssessment.Prediction": {
    /*An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
     */
  "name": "RiskAssessment.Prediction",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
     */  "name": "outcome", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*How likely is the outcome (in the specified timeframe).
     */
        {   "name": "probabilityDecimal", 
        
          "min": "1", 
          "max": "1", 
          "type": "decimal",
          "isPrimitive": true }, 
        {   "name": "probabilityRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
        {   "name": "probabilityCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
    ], 
    { 
    /*Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
     */  "name": "relativeRisk", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    [ /* Choice */ 
    /*Indicates the period of time or age range of the subject to which the specified probability applies.
     */
        {   "name": "whenPeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
        {   "name": "whenRange", 
        
          "min": "1", 
          "max": "1", 
          "type": "Range",
          "isPrimitive": false }, 
    ], 
    { 
    /*Additional information explaining the basis for the prediction.
     */  "name": "rationale", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"Schedule": {
    /*A container for slot(s) of time that may be available for booking appointments.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Schedule",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*External Ids for this item.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The schedule type can be used for the categorization of healthcare services or other appointment types.
     */  "name": "type", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The resource this Schedule resource is providing availability information for. These are expected to usually be one of HealthcareService, Location, Practitioner, Device, Patient or RelatedPerson.
     */  "name": "actor", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The period of time that the slots that are attached to this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
     */  "name": "planningHorizon", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*Comments on the availability to describe any extended information. Such as custom constraints on the slot(s) that may be associated.
     */  "name": "comment", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"SearchParameter": {
    /*A Search Parameter that defines a named search item that can be used to search/filter on a resource.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "SearchParameter",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An absolute URL that is used to identify this search parameter when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this search parameter is (or will be) published.
     */  "name": "url", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*A free text natural language name identifying the search parameter.
     */  "name": "name", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The status of this search parameter definition.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*A flag to indicate that this search parameter definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */  "name": "experimental", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*The name of the individual or organization that published the search parameter.
     */  "name": "publisher", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contacts to assist a user in finding and communicating with the publisher.
     */  "name": "contact", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "SearchParameter.Contact",
      "isPrimitive": false }, 
    { 
    /*The date  (and optionally time) when the search parameter definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. in addition, it should change when the substantiative content of the search parameter changes.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The Scope and Usage that this search parameter was created to meet.
     */  "name": "requirements", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The code used in the URL or the parameter name in a parameters resource for this search parameter.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*The base resource type that this search parameter refers to.
     */  "name": "base", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*The type of value a search parameter refers to, and how the content is interpreted.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*A description of the search parameters and how it used.
     */  "name": "description", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*An XPath expression that returns a set of elements for the search parameter.
     */  "name": "xpath", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*How the search parameter relates to the set of elements returned by evaluating the xpath query.
     */  "name": "xpathUsage", 
    
      "min": "0", 
      "max": "1", 
      "type": "XPathUsageType",
      "isPrimitive": true }, 
    { 
    /*Types of resource (if a resource is referenced).
     */  "name": "target", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "code",
      "isPrimitive": true }, 
  ]
},
"SearchParameter.Contact": {
    /*A Search Parameter that defines a named search item that can be used to search/filter on a resource.
     */
  "name": "SearchParameter.Contact",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The name of an individual to contact regarding the search parameter.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contact details for individual (if a name was provided) or the publisher.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
  ]
},
"XPathUsageType": {
    /*How a search parameter relates to the set of elements returned by evaluating the its xpath queryIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "XPathUsageType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "XPathUsageType-list" }, 
  ],
  "elems": [
  ]
},
"Slot": {
    /*A slot of time on a schedule that may be available for booking appointments.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Slot",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*External Ids for this item.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The schedule resource that this slot defines an interval of status information.
     */  "name": "schedule", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*busy | free | busy-unavailable | busy-tentative.
     */  "name": "freeBusyType", 
    
      "min": "1", 
      "max": "1", 
      "type": "SlotStatus",
      "isPrimitive": true }, 
    { 
    /*Date/Time that the slot is to begin.
     */  "name": "start", 
    
      "min": "1", 
      "max": "1", 
      "type": "instant",
      "isPrimitive": true }, 
    { 
    /*Date/Time that the slot is to conclude.
     */  "name": "end", 
    
      "min": "1", 
      "max": "1", 
      "type": "instant",
      "isPrimitive": true }, 
    { 
    /*This slot has already been overbooked, appointments are unlikely to be accepted for this time.
     */  "name": "overbooked", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Comments on the slot to describe any extended information. Such as custom constraints on the slot.
     */  "name": "comment", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"SlotStatus": {
    /*The free/busy status of a slotIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "SlotStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "SlotStatus-list" }, 
  ],
  "elems": [
  ]
},
"Specimen": {
    /*Sample for analysis.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Specimen",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Id for specimen.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The availability of the specimen.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "SpecimenStatus",
      "isPrimitive": true }, 
    { 
    /*The kind of material that forms the specimen.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Reference to the parent (source) specimen which is used when the specimen was either derived from or a component of a another specimen.
     */  "name": "parent", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Where the specimen came from. This may be from the patient(s) or from the environment or a device.
     */  "name": "subject", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
     */  "name": "accessionIdentifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Time when specimen was received for processing or testing.
     */  "name": "receivedTime", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Details concerning the specimen collection.
     */  "name": "collection", 
    
      "min": "0", 
      "max": "1", 
      "type": "Specimen.Collection",
      "isPrimitive": false }, 
    { 
    /*Details concerning treatment and processing steps for the specimen.
     */  "name": "treatment", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Specimen.Treatment",
      "isPrimitive": false }, 
    { 
    /*The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
     */  "name": "container", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Specimen.Container",
      "isPrimitive": false }, 
  ]
},
"Specimen.Collection": {
    /*Sample for analysis.
     */
  "name": "Specimen.Collection",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Person who collected the specimen.
     */  "name": "collector", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*To communicate any details or issues encountered during the specimen collection procedure.
     */  "name": "comment", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
    [ /* Choice */ 
    /*Time when specimen was collected from subject - the physiologically relevant time.
     */
        {   "name": "collectedDateTime", 
        
          "min": "1", 
          "max": "1", 
          "type": "dateTime",
          "isPrimitive": true }, 
        {   "name": "collectedPeriod", 
        
          "min": "1", 
          "max": "1", 
          "type": "Period",
          "isPrimitive": false }, 
    ], 
    { 
    /*The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
     */  "name": "quantity", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*A coded value specifying the technique that is used to perform the procedure.
     */  "name": "method", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Anatomical location from which the specimen was collected (if subject is a patient). This is the target site.  This element is not used for environmental specimens.
     */  "name": "bodySite", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
  ]
},
"Specimen.Treatment": {
    /*Sample for analysis.
     */
  "name": "Specimen.Treatment",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Textual description of procedure.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A coded value specifying the procedure used to process the specimen.
     */  "name": "procedure", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Material used in the processing step.
     */  "name": "additive", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"Specimen.Container": {
    /*Sample for analysis.
     */
  "name": "Specimen.Container",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Textual description of the container.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The type of container associated with the specimen (e.g. slide, aliquot, etc).
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The capacity (volume or other measure) the container may contain.
     */  "name": "capacity", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
     */  "name": "specimenQuantity", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*Introduced substance to preserve, maintain or enhance the specimen. examples: Formalin, Citrate, EDTA.
     */
        {   "name": "additiveCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "additiveReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
  ]
},
"SpecimenStatus": {
    /*Codes providing the status/availability of a specimenIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "SpecimenStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "SpecimenStatus-list" }, 
  ],
  "elems": [
  ]
},
"StructureDefinition": {
    /*A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions, and constraints on resources and data types.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "StructureDefinition",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An absolute URL that is used to identify this structure definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this structure definition is (or will be) published.
     */  "name": "url", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*Formal identifier that is used to identify this StructureDefinition when it is represented in other formats, or referenced in a specification, model, design or an instance  (should be globally unique OID, UUID, or URI), (if it's not possible to use the literal URI).
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The identifier that is used to identify this version of the StructureDefinition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the StructureDefinition author manually.
     */  "name": "version", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A free text natural language name identifying the StructureDefinition.
     */  "name": "name", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Defined so that applications can use this name when displaying the value of the extension to the user.
     */  "name": "display", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The status of the StructureDefinition.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*This StructureDefinition was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */  "name": "experimental", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*The name of the individual or organization that published the structure definition.
     */  "name": "publisher", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contacts to assist a user in finding and communicating with the publisher.
     */  "name": "contact", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "StructureDefinition.Contact",
      "isPrimitive": false }, 
    { 
    /*The date that this version of the StructureDefinition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. in addition, it should change when the substantiative content of the structure definition changes.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*A free text natural language description of the StructureDefinition and its use.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of structure definitions.
     */  "name": "useContext", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Explains why this structure definition is needed and why it's been constrained as it has.
     */  "name": "requirements", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.
     */  "name": "copyright", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A set of terms from external terminologies that may be used to assist with indexing and searching of templates.
     */  "name": "code", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.0 for this version.
     */  "name": "fhirVersion", 
    
      "min": "0", 
      "max": "1", 
      "type": "id",
      "isPrimitive": true }, 
    { 
    /*An external specification that the content is mapped to.
     */  "name": "mapping", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "StructureDefinition.Mapping",
      "isPrimitive": false }, 
    { 
    /*Defines the kind of structure that this definition is describing.
     */  "name": "kind", 
    
      "min": "1", 
      "max": "1", 
      "type": "StructureDefinitionKind",
      "isPrimitive": true }, 
    { 
    /*The type of type that is being constrained - a data type, an extension, a resource, including abstract ones. If this field is present, it indicates that the structure definition is a constraint. If it is not present, then the structure definition is the definition of a base structure.
     */  "name": "constrainedType", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*Whether structure this definition describes is abstract or not  - that is, whether an actual exchanged item can ever be of this type.
     */  "name": "abstract", 
    
      "min": "1", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*If this is an extension, Identifies the context within FHIR resources where the extension can be used.
     */  "name": "contextType", 
    
      "min": "0", 
      "max": "1", 
      "type": "ExtensionContext",
      "isPrimitive": true }, 
    { 
    /*Identifies the types of resource or data type elements to which the extension can be applied.
     */  "name": "context", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*An absolute URI that is the base structure from which this set of constraints is derived.
     */  "name": "base", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*A snapshot view is expressed in a stand alone form that can be used and interpreted without considering the base StructureDefinition.
     */  "name": "snapshot", 
    
      "min": "0", 
      "max": "1", 
      "type": "StructureDefinition.Snapshot",
      "isPrimitive": false }, 
    { 
    /*A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
     */  "name": "differential", 
    
      "min": "0", 
      "max": "1", 
      "type": "StructureDefinition.Differential",
      "isPrimitive": false }, 
  ]
},
"StructureDefinition.Contact": {
    /*A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions, and constraints on resources and data types.
     */
  "name": "StructureDefinition.Contact",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The name of an individual to contact regarding the structure definition.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contact details for individual (if a name was provided) or the publisher.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
  ]
},
"StructureDefinition.Mapping": {
    /*A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions, and constraints on resources and data types.
     */
  "name": "StructureDefinition.Mapping",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An Internal id that is used to identify this mapping set when specific mappings are made.
     */  "name": "identity", 
    
      "min": "1", 
      "max": "1", 
      "type": "id",
      "isPrimitive": true }, 
    { 
    /*An absolute URI that identifies the specification that this mapping is expressed to.
     */  "name": "uri", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*A name for the specification that is being mapped to.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
     */  "name": "comments", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"StructureDefinition.Snapshot": {
    /*A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions, and constraints on resources and data types.
     */
  "name": "StructureDefinition.Snapshot",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Captures constraints on each element within the resource.
     */  "name": "element", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "ElementDefinition",
      "isPrimitive": false }, 
  ]
},
"StructureDefinition.Differential": {
    /*A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions, and constraints on resources and data types.
     */
  "name": "StructureDefinition.Differential",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Captures constraints on each element within the resource.
     */  "name": "element", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "ElementDefinition",
      "isPrimitive": false }, 
  ]
},
"StructureDefinitionKind": {
    /*Defines the type of structure that a definition is describingIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "StructureDefinitionKind",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "StructureDefinitionKind-list" }, 
  ],
  "elems": [
  ]
},
"ExtensionContext": {
    /*How an extension context is interpretedIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ExtensionContext",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ExtensionContext-list" }, 
  ],
  "elems": [
  ]
},
"Subscription": {
    /*The subscription resource is used to define a push based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system is able to take an appropriate action.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Subscription",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The rules that the server should use to determine when to generate notifications for this subscription.
     */  "name": "criteria", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
     */  "name": "contact", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
    { 
    /*A description of why this subscription is defined.
     */  "name": "reason", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The status of the subscription, which marks the server state for managing the subscription.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "SubscriptionStatus",
      "isPrimitive": true }, 
    { 
    /*A record of the last error that occurred when the server processed a notification.
     */  "name": "error", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Details where to send notifications when resources are received that meet the criteria.
     */  "name": "channel", 
    
      "min": "1", 
      "max": "1", 
      "type": "Subscription.Channel",
      "isPrimitive": false }, 
    { 
    /*The time for the server to turn the subscription off.
     */  "name": "end", 
    
      "min": "0", 
      "max": "1", 
      "type": "instant",
      "isPrimitive": true }, 
    { 
    /*A tag to add to any resource that matches the criteria, after the subscription is processed.
     */  "name": "tag", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Coding",
      "isPrimitive": false }, 
  ]
},
"Subscription.Channel": {
    /*The subscription resource is used to define a push based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system is able to take an appropriate action.
     */
  "name": "Subscription.Channel",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The type of channel to send notififcations on.
     */  "name": "type", 
    
      "min": "1", 
      "max": "1", 
      "type": "SubscriptionChannelType",
      "isPrimitive": true }, 
    { 
    /*The uri that describes tha actual end point to send messages to.
     */  "name": "endpoint", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*The mime type to send the payload in - either application/xml+fhir, or application/json+fhir. If the mime type is blank, then there is no payload in the notification, just a notification.
     */  "name": "payload", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Additional headers / information to send as part of the notification.
     */  "name": "header", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"SubscriptionStatus": {
    /*The status of a subscriptionIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "SubscriptionStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "SubscriptionStatus-list" }, 
  ],
  "elems": [
  ]
},
"SubscriptionChannelType": {
    /*The type of method used to execute a subscriptionIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "SubscriptionChannelType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "SubscriptionChannelType-list" }, 
  ],
  "elems": [
  ]
},
"Substance": {
    /*A homogeneous material with a definite composition.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "Substance",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Unique identifier for the substance.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*A code that classifies the the general type of substance.  This is used  for searching, sorting and display purposes.
     */  "name": "category", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A code (or set of codes) that identify this substance.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*A description of the substance - its appearance, handling requirements, and other usage notes.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
     */  "name": "instance", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Substance.Instance",
      "isPrimitive": false }, 
    { 
    /*A substance can be composed of other substances.
     */  "name": "ingredient", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Substance.Ingredient",
      "isPrimitive": false }, 
  ]
},
"Substance.Instance": {
    /*A homogeneous material with a definite composition.
     */
  "name": "Substance.Instance",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifier associated with the package/container (usually a label affixed directly).
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
     */  "name": "expiry", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The amount of the substance.
     */  "name": "quantity", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
  ]
},
"Substance.Ingredient": {
    /*A homogeneous material with a definite composition.
     */
  "name": "Substance.Ingredient",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The amount of the ingredient in the substance - a concentration ratio.
     */  "name": "quantity", 
    
      "min": "0", 
      "max": "1", 
      "type": "Ratio",
      "isPrimitive": false }, 
    { 
    /*Another substance that is a component of this substance.
     */  "name": "substance", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"SupplyDelivery": {
    /*Record of delivery of what is supply.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "SupplyDelivery",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifier assigned by the dispensing facility when the item(s) is dispensed.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*A code specifying the state of the dispense event.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "SupplyDeliveryStatus",
      "isPrimitive": true }, 
    { 
    /*A link to a resource representing the person whom the delivered item is for.
     */  "name": "patient", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The amount of supply that has been dispensed. Includes unit of measure.
     */  "name": "quantity", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*Identifies the medication or substance or device being dispensed. This is either a link to a resource representing the details of the item or a simple attribute carrying a code that identifies the item from a known list.
     */  "name": "suppliedItem", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The individual responsible for dispensing the medication, supplier or device.
     */  "name": "supplier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The time the dispense event occurred.
     */  "name": "whenPrepared", 
    
      "min": "0", 
      "max": "1", 
      "type": "Period",
      "isPrimitive": false }, 
    { 
    /*The time the dispensed item was sent or handed to the patient (or agent).
     */  "name": "time", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Identification of the facility/location where the Supply was shipped to, as part of the dispense event.
     */  "name": "destination", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Identifies the person who picked up the Supply.
     */  "name": "receiver", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"SupplyDeliveryStatus": {
    /*Status of the Supply deliveryIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "SupplyDeliveryStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "SupplyDeliveryStatus-list" }, 
  ],
  "elems": [
  ]
},
"SupplyRequest": {
    /*A record of a request for a medication, substance or device used in the healthcare setting.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "SupplyRequest",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A link to a resource representing the person whom the ordered item is for.
     */  "name": "patient", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The Practitioner , Organization or Patient who initiated this order for the Supply.
     */  "name": "source", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*When the request was made.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*Unique identifier for this supply request.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Status of the supply request.
     */  "name": "status", 
    
      "min": "0", 
      "max": "1", 
      "type": "SupplyRequestStatus",
      "isPrimitive": true }, 
    { 
    /*Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
     */  "name": "kind", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*The item that is requested to be supplied.
     */  "name": "orderedItem", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Who is intended to fulfill the request.
     */  "name": "supplier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*Why the supply item was requested.
     */
        {   "name": "reasonCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "reasonReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*When the request should be fulfilled.
     */  "name": "when", 
    
      "min": "0", 
      "max": "1", 
      "type": "SupplyRequest.When",
      "isPrimitive": false }, 
  ]
},
"SupplyRequest.When": {
    /*A record of a request for a medication, substance or device used in the healthcare setting.
     */
  "name": "SupplyRequest.When",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Fulfilment code.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Formal fulfillment schedule.
     */  "name": "schedule", 
    
      "min": "0", 
      "max": "1", 
      "type": "Timing",
      "isPrimitive": false }, 
  ]
},
"SupplyRequestStatus": {
    /*Status of the supply requestIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "SupplyRequestStatus",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "SupplyRequestStatus-list" }, 
  ],
  "elems": [
  ]
},
"TestScript": {
    /*TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "TestScript",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An absolute URL that is used to identify this Test Script. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this Test Script is (or will be) published.
     */  "name": "url", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*The identifier that is used to identify this version of the TestScript. This is an arbitrary value managed by the TestScript author manually.
     */  "name": "version", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A free text natural language name identifying the TestScript.
     */  "name": "name", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The status of the TestScript.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*Identifier for the TestScript assigned for external purposes outside the context of FHIR.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*This TestScript was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */  "name": "experimental", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*The name of the individual or organization that published the Test Script.
     */  "name": "publisher", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contacts to assist a user in finding and communicating with the publisher.
     */  "name": "contact", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "TestScript.Contact",
      "isPrimitive": false }, 
    { 
    /*The date that this version of the TestScript was published. The date must change when the business version changes, if it does, and it must change if the status code changes. in addition, it should change when the substantiative content of the test cases change.
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*A free text natural language description of the TestScript and its use.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of Test Scripts.
     */  "name": "useContext", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*Explains why this Test Script is needed and why it's been constrained as it has.
     */  "name": "requirements", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A copyright statement relating to the Test Script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.
     */  "name": "copyright", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The required capability must exist and is assumed to function correctly on the FHIR server being tested.
     */  "name": "metadata", 
    
      "min": "0", 
      "max": "1", 
      "type": "TestScript.Metadata",
      "isPrimitive": false }, 
    { 
    /*If the tests apply to more than one FHIR server (e.g. cross-server interoperability tests) then multiserver=true. Defaults to false if value is unspecified.
     */  "name": "multiserver", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
     */  "name": "fixture", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "TestScript.Fixture",
      "isPrimitive": false }, 
    { 
    /*Reference to the profile to be used for validation.
     */  "name": "profile", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*Variable is set based either on element value in response body or on header field value in the response headers.
     */  "name": "variable", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "TestScript.Variable",
      "isPrimitive": false }, 
    { 
    /*A series of required setup operations before tests are executed.
     */  "name": "setup", 
    
      "min": "0", 
      "max": "1", 
      "type": "TestScript.Setup",
      "isPrimitive": false }, 
    { 
    /*A test in this script.
     */  "name": "test", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "TestScript.Test",
      "isPrimitive": false }, 
    { 
    /*A series of operations required to clean up after the all the tests are executed (successfully or otherwise).
     */  "name": "teardown", 
    
      "min": "0", 
      "max": "1", 
      "type": "TestScript.Teardown",
      "isPrimitive": false }, 
  ]
},
"TestScript.Contact": {
    /*TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.
     */
  "name": "TestScript.Contact",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The name of an individual to contact regarding the Test Script.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contact details for individual (if a name was provided) or the publisher.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
  ]
},
"TestScript.Metadata": {
    /*TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.
     */
  "name": "TestScript.Metadata",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A link to the FHIR specification that this test is covering.
     */  "name": "link", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "TestScript.Link",
      "isPrimitive": false }, 
    { 
    /*Capabilties that must exist and is assumed to function correctly on the FHIR server being tested.
     */  "name": "capability", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "TestScript.Capability",
      "isPrimitive": false }, 
  ]
},
"TestScript.Link": {
    /*TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.
     */
  "name": "TestScript.Link",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*URL to a particular requirement or feature within the FHIR specification.
     */  "name": "url", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*Short description of the link.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"TestScript.Capability": {
    /*TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.
     */
  "name": "TestScript.Capability",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.
     */  "name": "required", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.
     */  "name": "validated", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Description of the capabilities that this test script is requiring the server to support.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Which server these requirements apply to.
     */  "name": "destination", 
    
      "min": "0", 
      "max": "1", 
      "type": "integer",
      "isPrimitive": true }, 
    { 
    /*Links to the FHIR specification that describes this interaction and the resources involved in more detail.
     */  "name": "link", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*Minimum conformance required of server for test script to execute successfully.   If server does not meet at a minimum the reference conformance definition, then all tests in this script are skipped.
     */  "name": "conformance", 
    
      "min": "1", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"TestScript.Fixture": {
    /*TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.
     */
  "name": "TestScript.Fixture",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section.
     */  "name": "autocreate", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Whether or not to implicitly delete the fixture during teardown If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section.
     */  "name": "autodelete", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Reference to the resource (containing the contents of the resource needed for operations).
     */  "name": "resource", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
  ]
},
"TestScript.Variable": {
    /*TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.
     */
  "name": "TestScript.Variable",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Descriptive name for this variable.
     */  "name": "name", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Will be used to grab the HTTP header field value from the headers that sourceId is pointing to.
     */  "name": "headerField", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*XPath or JSONPath against the fixture body.  When variables are defined, either headerField must be specified or path, but not both.
     */  "name": "path", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Fixture to evaluate the XPath/JSONPath expression or the headerField  against within this variable.
     */  "name": "sourceId", 
    
      "min": "0", 
      "max": "1", 
      "type": "id",
      "isPrimitive": true }, 
  ]
},
"TestScript.Setup": {
    /*TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.
     */
  "name": "TestScript.Setup",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Capabilties that must exist and is assumed to function correctly on the FHIR server being tested.
     */  "name": "metadata", 
    
      "min": "0", 
      "max": "1", 
      "type": "TestScript.Metadata",
      "isPrimitive": false }, 
    { 
    /*Action would contain either an operation or an assertion.
     */  "name": "action", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "TestScript.Action",
      "isPrimitive": false }, 
  ]
},
"TestScript.Action": {
    /*TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.
     */
  "name": "TestScript.Action",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The operation to perform.
     */  "name": "operation", 
    
      "min": "0", 
      "max": "1", 
      "type": "TestScript.Operation",
      "isPrimitive": false }, 
    { 
    /*Evaluates the results of previous operations to determine if the server under test behaves appropriately.
     */  "name": "assert", 
    
      "min": "0", 
      "max": "1", 
      "type": "TestScript.Assert",
      "isPrimitive": false }, 
  ]
},
"TestScript.Operation": {
    /*TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.
     */
  "name": "TestScript.Operation",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Server interaction or operation type.
     */  "name": "type", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The type of the resource.  See http://hl7-fhir.github.io/resourcelist.html.
     */  "name": "resource", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*The label would be used for tracking/logging purposes by test engines.
     */  "name": "label", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The description would be used by test engines for tracking and reporting purposes.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The content-type or mime-type to use for RESTful operation in the 'Accept' header.
     */  "name": "accept", 
    
      "min": "0", 
      "max": "1", 
      "type": "ContentType",
      "isPrimitive": true }, 
    { 
    /*The content-type or mime-type to use for RESTful operation in the 'Content-Type' header.
     */  "name": "contentType", 
    
      "min": "0", 
      "max": "1", 
      "type": "ContentType",
      "isPrimitive": true }, 
    { 
    /*Which server to perform the operation on.
     */  "name": "destination", 
    
      "min": "0", 
      "max": "1", 
      "type": "integer",
      "isPrimitive": true }, 
    { 
    /*Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.
     */  "name": "encodeRequestUrl", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Path plus parameters after [type].  Used to set parts of the request URL explicitly.
     */  "name": "params", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Header elements would be used to set HTTP headers.
     */  "name": "requestHeader", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "TestScript.RequestHeader",
      "isPrimitive": false }, 
    { 
    /*The fixture id (maybe new) to map to the response.
     */  "name": "responseId", 
    
      "min": "0", 
      "max": "1", 
      "type": "id",
      "isPrimitive": true }, 
    { 
    /*The id of the fixture used as the body of a PUT or POST request.
     */  "name": "sourceId", 
    
      "min": "0", 
      "max": "1", 
      "type": "id",
      "isPrimitive": true }, 
    { 
    /*Id of fixture used for extracting the [id],  [type], and [vid] for GET requests.
     */  "name": "targetId", 
    
      "min": "0", 
      "max": "1", 
      "type": "id",
      "isPrimitive": true }, 
    { 
    /*Complete request URL.
     */  "name": "url", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"TestScript.RequestHeader": {
    /*TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.
     */
  "name": "TestScript.RequestHeader",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The HTTP header field e.g. "Accept".
     */  "name": "field", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The value of the header e.g. "application/xml".
     */  "name": "value", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"TestScript.Assert": {
    /*TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.
     */
  "name": "TestScript.Assert",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The label would be used for tracking/logging purposes by test engines.
     */  "name": "label", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The description would be used by test engines for tracking and reporting purposes.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The direction to use for the assertion.
     */  "name": "direction", 
    
      "min": "0", 
      "max": "1", 
      "type": "AssertionDirectionType",
      "isPrimitive": true }, 
    { 
    /*Id of fixture used to compare the "sourceId/path" evaluations to.
     */  "name": "compareToSourceId", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*XPath or JSONPath expression against fixture used to compare the "sourceId/path" evaluations to.
     */  "name": "compareToSourcePath", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The content-type or mime-type to use for RESTful operation in the 'Content-Type' header.
     */  "name": "contentType", 
    
      "min": "0", 
      "max": "1", 
      "type": "ContentType",
      "isPrimitive": true }, 
    { 
    /*The HTTP header field name e.g. 'Location'.
     */  "name": "headerField", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The ID of a fixture.  Asserts that the response contains at a minimumId the fixture specified by minimumId.
     */  "name": "minimumId", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Whether or not the test execution performs validation on the bundle navigation links.
     */  "name": "navigationLinks", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*The operator type.
     */  "name": "operator", 
    
      "min": "0", 
      "max": "1", 
      "type": "AssertionOperatorType",
      "isPrimitive": true }, 
    { 
    /*The XPath or JSONPath expression to be evaluated against the fixture representing the response received from server.
     */  "name": "path", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The type of the resource.  See http://hl7-fhir.github.io/resourcelist.html.
     */  "name": "resource", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.
     */  "name": "response", 
    
      "min": "0", 
      "max": "1", 
      "type": "AssertionResponseTypes",
      "isPrimitive": true }, 
    { 
    /*The value of the HTTP response code to be tested.
     */  "name": "responseCode", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Fixture to evaluate the XPath/JSONPath expression or the headerField  against.
     */  "name": "sourceId", 
    
      "min": "0", 
      "max": "1", 
      "type": "id",
      "isPrimitive": true }, 
    { 
    /*The ID of the Profile to validate against.
     */  "name": "validateProfileId", 
    
      "min": "0", 
      "max": "1", 
      "type": "id",
      "isPrimitive": true }, 
    { 
    /*The value to compare to.
     */  "name": "value", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Whether or not the test execution will produce a warning only on error for this assert.
     */  "name": "warningOnly", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
  ]
},
"TestScript.Test": {
    /*TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.
     */
  "name": "TestScript.Test",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The name of this testused for tracking/logging purposes by test engines.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A short description of the test used by test engines for tracking and reporting purposes.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Capabilties that must exist and is assumed to function correctly on the FHIR server being tested.
     */  "name": "metadata", 
    
      "min": "0", 
      "max": "1", 
      "type": "TestScript.Metadata",
      "isPrimitive": false }, 
    { 
    /*Action would contain either an operation or an assertion.
     */  "name": "action", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "TestScript.Action1",
      "isPrimitive": false }, 
  ]
},
"TestScript.Action1": {
    /*TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.
     */
  "name": "TestScript.Action1",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An operation would involve a REST request to a server.
     */  "name": "operation", 
    
      "min": "0", 
      "max": "1", 
      "type": "TestScript.Operation",
      "isPrimitive": false }, 
    { 
    /*Evaluates the results of previous operations to determine if the server under test behaves appropriately.
     */  "name": "assert", 
    
      "min": "0", 
      "max": "1", 
      "type": "TestScript.Assert",
      "isPrimitive": false }, 
  ]
},
"TestScript.Teardown": {
    /*TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.
     */
  "name": "TestScript.Teardown",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The teardown action will only contain an operation.
     */  "name": "action", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "TestScript.Action2",
      "isPrimitive": false }, 
  ]
},
"TestScript.Action2": {
    /*TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.
     */
  "name": "TestScript.Action2",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An operation would involve a REST request to a server.
     */  "name": "operation", 
    
      "min": "0", 
      "max": "1", 
      "type": "TestScript.Operation",
      "isPrimitive": false }, 
  ]
},
"ContentType": {
    /*The content or mime type.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ContentType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "ContentType-list" }, 
  ],
  "elems": [
  ]
},
"AssertionDirectionType": {
    /*The type of direction to use for assertion.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AssertionDirectionType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "AssertionDirectionType-list" }, 
  ],
  "elems": [
  ]
},
"AssertionOperatorType": {
    /*The type of operator to use for assertion.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AssertionOperatorType",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "AssertionOperatorType-list" }, 
  ],
  "elems": [
  ]
},
"AssertionResponseTypes": {
    /*The type of response code to use for assertion.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "AssertionResponseTypes",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "AssertionResponseTypes-list" }, 
  ],
  "elems": [
  ]
},
"ValueSet": {
    /*A value set specifies a set of codes drawn from one or more code systems.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "ValueSet",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An absolute URL that is used to identify this value set when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this value set is (or will be) published.
     */  "name": "url", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*Formal identifier that is used to identify this value set when it is represented in other formats, or referenced in a specification, model, design or an instance.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "1", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*Used to identify this version of the value set when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.
     */  "name": "version", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A free text natural language name describing the value set.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The status of the value set.
     */  "name": "status", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*This valueset was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */  "name": "experimental", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*The name of the individual or organization that published the value set.
     */  "name": "publisher", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contacts to assist a user in finding and communicating with the publisher.
     */  "name": "contact", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ValueSet.Contact",
      "isPrimitive": false }, 
    { 
    /*The date that the value set status was last changed. The date must change when the business version changes, if it does, and it must change if the status code changes. in addition, it should change when the substantiative content of the implementation guide changes (e.g. the 'content logical definition').
     */  "name": "date", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*If a Locked Date is defined, then the Content Logical Definition must be evaluated using the current version of all referenced code system(s) and value sets as of the Locked Date.
     */  "name": "lockedDate", 
    
      "min": "0", 
      "max": "1", 
      "type": "date",
      "isPrimitive": true }, 
    { 
    /*A free text natural language description of the use of the value set - reason for definition, "the semantic space" to be included in the value set, conditions of use, etc. The description may include a list of expected usages for the value set and can also describe the approach taken to build the value set.
     */  "name": "description", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of value set definitions.
     */  "name": "useContext", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "CodeableConcept",
      "isPrimitive": false }, 
    { 
    /*If this is set to 'true', then no new versions of the content logical definition can be created.  Note: Other metadata might still change.
     */  "name": "immutable", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Explains why this value set is needed and why it's been constrained as it has.
     */  "name": "requirements", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*A copyright statement relating to the value set and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the value set.
     */  "name": "copyright", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Whether this is intended to be used with an extensible binding or not.
     */  "name": "extensible", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*A definition of an code system, inlined into the value set (as a packaging convenience). Note that the inline code system may be used from other value sets by referring to it's (codeSystem.system) directly.
     */  "name": "codeSystem", 
    
      "min": "0", 
      "max": "1", 
      "type": "ValueSet.CodeSystem",
      "isPrimitive": false }, 
    { 
    /*A set of criteria that provide the content logical definition of the value set by including or excluding codes from outside this value set.
     */  "name": "compose", 
    
      "min": "0", 
      "max": "1", 
      "type": "ValueSet.Compose",
      "isPrimitive": false }, 
    { 
    /*A value set can also be "expanded", where the value set is turned into a simple collection of enumerated codes. This element holds the expansion, if it has been performed.
     */  "name": "expansion", 
    
      "min": "0", 
      "max": "1", 
      "type": "ValueSet.Expansion",
      "isPrimitive": false }, 
  ]
},
"ValueSet.Contact": {
    /*A value set specifies a set of codes drawn from one or more code systems.
     */
  "name": "ValueSet.Contact",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The name of an individual to contact regarding the value set.
     */  "name": "name", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Contact details for individual (if a name was provided) or the publisher.
     */  "name": "telecom", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ContactPoint",
      "isPrimitive": false }, 
  ]
},
"ValueSet.CodeSystem": {
    /*A value set specifies a set of codes drawn from one or more code systems.
     */
  "name": "ValueSet.CodeSystem",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An absolute URI that is used to reference this code system, including in [Coding]{datatypes.html#Coding}.system.
     */  "name": "system", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*The version of this code system that defines the codes. Note that the version is optional because a well maintained code system does not suffer from versioning, and therefore the version does not need to be maintained. However many code systems are not well maintained, and the version needs to be defined and tracked.
     */  "name": "version", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*If code comparison is case sensitive when codes within this system are compared to each other.
     */  "name": "caseSensitive", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*Concepts that are in the code system. The concept definitions are inherently heirarchical, but the definitions must be consulted to determine what the meaning of the heirachical relationships are.
     */  "name": "concept", 
    
      "min": "1", 
      "max": "unbounded", 
      "type": "ValueSet.Concept",
      "isPrimitive": false }, 
  ]
},
"ValueSet.Concept": {
    /*A value set specifies a set of codes drawn from one or more code systems.
     */
  "name": "ValueSet.Concept",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A code - a text symbol - that uniquely identifies the concept within the code system.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*If this code is not for use as a real concept.
     */  "name": "abstract", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*A human readable string that is the recommended default way to present this concept to a user.
     */  "name": "display", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The formal definition of the concept. The value set resource does not make formal definitions required, because of the prevalence of legacy systems. However, but they are highly recommended, as without them there is no formal meaning associated with the concept.
     */  "name": "definition", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Additional representations for the concept - other languages, aliases, specialized purposes, used for particular purposes, etc.
     */  "name": "designation", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ValueSet.Designation",
      "isPrimitive": false }, 
    { 
    /*Child Concepts - a heirarchy of concepts. The nature of the relationships is variable (is-a / contains / categorises) and can only be determined by examining the definitions of the concepts.
     */  "name": "concept", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ValueSet.Concept",
      "isPrimitive": false }, 
  ]
},
"ValueSet.Designation": {
    /*A value set specifies a set of codes drawn from one or more code systems.
     */
  "name": "ValueSet.Designation",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The language this designation is defined for.
     */  "name": "language", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*A code that details how this designation would be used.
     */  "name": "use", 
    
      "min": "0", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The text value for this designation.
     */  "name": "value", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"ValueSet.Compose": {
    /*A value set specifies a set of codes drawn from one or more code systems.
     */
  "name": "ValueSet.Compose",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Includes the contents of the referenced value set as a part of the contents of this value set. This is an absolute URI that is a reference to ValueSet.uri.
     */  "name": "import", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*Include one or more codes from a code system.
     */  "name": "include", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ValueSet.Include",
      "isPrimitive": false }, 
    { 
    /*Exclude one or more codes from the value set.
     */  "name": "exclude", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ValueSet.Include",
      "isPrimitive": false }, 
  ]
},
"ValueSet.Include": {
    /*A value set specifies a set of codes drawn from one or more code systems.
     */
  "name": "ValueSet.Include",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An absolute URI which is the code system from which the selected codes come from.
     */  "name": "system", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*The version of the code system that the codes are selected from.
     */  "name": "version", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Specifies a concept to be included or excluded.
     */  "name": "concept", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ValueSet.Concept1",
      "isPrimitive": false }, 
    { 
    /*Select concepts by specify a matching criteria based on the properties (including relationships) defined by the system. If multiple filters are specified, they SHALL all be true.
     */  "name": "filter", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ValueSet.Filter",
      "isPrimitive": false }, 
  ]
},
"ValueSet.Concept1": {
    /*A value set specifies a set of codes drawn from one or more code systems.
     */
  "name": "ValueSet.Concept1",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Specifies a code for the concept to be included or excluded.
     */  "name": "code", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*The text to display to the user for this concept in the context of this valueset. If no display is provided, then applications using the value set use the display specified for the code by the system.
     */  "name": "display", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Additional representations for this concept when used in this value set - other languages, aliases, specialized purposes, used for particular purposes, etc.
     */  "name": "designation", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ValueSet.Designation",
      "isPrimitive": false }, 
  ]
},
"ValueSet.Filter": {
    /*A value set specifies a set of codes drawn from one or more code systems.
     */
  "name": "ValueSet.Filter",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*A code that identifies a property defined in the code system.
     */  "name": "property", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*The kind of operation to perform as a part of the filter criteria.
     */  "name": "op", 
    
      "min": "1", 
      "max": "1", 
      "type": "FilterOperator",
      "isPrimitive": true }, 
    { 
    /*The match value may be either a code defined by the system, or a string value which is used a regex match on the literal string of the property value.
     */  "name": "value", 
    
      "min": "1", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
  ]
},
"ValueSet.Expansion": {
    /*A value set specifies a set of codes drawn from one or more code systems.
     */
  "name": "ValueSet.Expansion",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An identifier that uniquely identifies this expansion of the valueset. Systems may re-use the same identifier as long as the expansion and the definition remain the same, but are not required to do so.
     */  "name": "identifier", 
    
      "min": "1", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*The time at which the expansion was produced by the expanding system.
     */  "name": "timestamp", 
    
      "min": "1", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*The total nober of concepts in the expansion. If the number of concept nodes in this resource is less than the stated number, then the server can return more using the offset parameter.
     */  "name": "total", 
    
      "min": "0", 
      "max": "1", 
      "type": "integer",
      "isPrimitive": true }, 
    { 
    /*If paging is being used, the offset at which this resource starts - e.g. this resource is a partial view into the expansion. If paging is not being used, this element SHALL not be present.
     */  "name": "offset", 
    
      "min": "0", 
      "max": "1", 
      "type": "integer",
      "isPrimitive": true }, 
    { 
    /*A Parameter that controlled the expansion process. These parameters may be used by users of expanded value sets to check whether the expansion is suitable for a particular purpose, or to pick the correct expansion.
     */  "name": "parameter", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ValueSet.Parameter",
      "isPrimitive": false }, 
    { 
    /*The codes that are contained in the value set expansion.
     */  "name": "contains", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ValueSet.Contains",
      "isPrimitive": false }, 
  ]
},
"ValueSet.Parameter": {
    /*A value set specifies a set of codes drawn from one or more code systems.
     */
  "name": "ValueSet.Parameter",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*The name of the parameter.
     */  "name": "name", 
    
      "min": "1", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    [ /* Choice */ 
    /*The value of the parameter.
     */
        {   "name": "valueString", 
        
          "min": "1", 
          "max": "1", 
          "type": "string",
          "isPrimitive": true }, 
        {   "name": "valueBoolean", 
        
          "min": "1", 
          "max": "1", 
          "type": "boolean",
          "isPrimitive": true }, 
        {   "name": "valueInteger", 
        
          "min": "1", 
          "max": "1", 
          "type": "integer",
          "isPrimitive": true }, 
        {   "name": "valueDecimal", 
        
          "min": "1", 
          "max": "1", 
          "type": "decimal",
          "isPrimitive": true }, 
        {   "name": "valueUri", 
        
          "min": "1", 
          "max": "1", 
          "type": "uri",
          "isPrimitive": true }, 
        {   "name": "valueCode", 
        
          "min": "1", 
          "max": "1", 
          "type": "code",
          "isPrimitive": true }, 
    ], 
  ]
},
"ValueSet.Contains": {
    /*A value set specifies a set of codes drawn from one or more code systems.
     */
  "name": "ValueSet.Contains",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*An absolute URI which is the code system in which the code for this item in the expansion is defined.
     */  "name": "system", 
    
      "min": "0", 
      "max": "1", 
      "type": "uri",
      "isPrimitive": true }, 
    { 
    /*If true, this entry is included in the expansion for navigational purposes, and the user cannot select the code directly as a proper value.
     */  "name": "abstract", 
    
      "min": "0", 
      "max": "1", 
      "type": "boolean",
      "isPrimitive": true }, 
    { 
    /*The version of this code system that defined this code and/or display. This should only be used with code systems that do not enforce concept permanence.
     */  "name": "version", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*The code for this item in the expansion heirarchy. If this code is missing the entry in the heirarchy is a place holder (abstract) and doesn't represent a valid code in the value set.
     */  "name": "code", 
    
      "min": "0", 
      "max": "1", 
      "type": "code",
      "isPrimitive": true }, 
    { 
    /*The recommended display for this item in the expansion.
     */  "name": "display", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Other codes and entries contained under this entry in the heirarchy.
     */  "name": "contains", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "ValueSet.Contains",
      "isPrimitive": false }, 
  ]
},
"FilterOperator": {
    /*The kind of operation to perform as a part of a property based filterIf the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "FilterOperator",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "FilterOperator-list" }, 
  ],
  "elems": [
  ]
},
"VisionPrescription": {
    /*An authorization for the supply of glasses and/or contact lenses to a patient.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "VisionPrescription",
  "base": "DomainResource", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Business identifier which may be used by other parties to reference or identify the prescription.
     */  "name": "identifier", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "Identifier",
      "isPrimitive": false }, 
    { 
    /*The date (and perhaps time) when the prescription was written.
     */  "name": "dateWritten", 
    
      "min": "0", 
      "max": "1", 
      "type": "dateTime",
      "isPrimitive": true }, 
    { 
    /*A link to a resource representing the person to whom the Vision products will be supplied.
     */  "name": "patient", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*The healthcare professional responsible for authorizing the prescription.
     */  "name": "prescriber", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    { 
    /*A link to a resource that identifies the particular occurrence of contact between patient and health care provider.
     */  "name": "encounter", 
    
      "min": "0", 
      "max": "1", 
      "type": "Reference",
      "isPrimitive": false }, 
    [ /* Choice */ 
    /*Can be the reason or the indication for writing the prescription.
     */
        {   "name": "reasonCodeableConcept", 
        
          "min": "1", 
          "max": "1", 
          "type": "CodeableConcept",
          "isPrimitive": false }, 
        {   "name": "reasonReference", 
        
          "min": "1", 
          "max": "1", 
          "type": "Reference",
          "isPrimitive": false }, 
    ], 
    { 
    /*Deals with details of the dispense part of the supply specification.
     */  "name": "dispense", 
    
      "min": "0", 
      "max": "unbounded", 
      "type": "VisionPrescription.Dispense",
      "isPrimitive": false }, 
  ]
},
"VisionPrescription.Dispense": {
    /*An authorization for the supply of glasses and/or contact lenses to a patient.
     */
  "name": "VisionPrescription.Dispense",
  "base": "BackboneElement", 
  "attrs": [
  ],
  "elems": [
    { 
    /*Identifies the type of Vision correction product which is required for the patient.
     */  "name": "product", 
    
      "min": "1", 
      "max": "1", 
      "type": "Coding",
      "isPrimitive": false }, 
    { 
    /*The eye for which the lens applies.
     */  "name": "eye", 
    
      "min": "0", 
      "max": "1", 
      "type": "VisionEyes",
      "isPrimitive": true }, 
    { 
    /*Lens power measured in diopters (0.25 units).
     */  "name": "sphere", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*Power adjustment for astigmatism measured in diopters (0.25 units).
     */  "name": "cylinder", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*Adjustment for astigmatism measured in integer degrees.
     */  "name": "axis", 
    
      "min": "0", 
      "max": "1", 
      "type": "integer",
      "isPrimitive": true }, 
    { 
    /*Amount of prism to compensate for eye alignment in fractional units.
     */  "name": "prism", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*The relative base, or reference lens edge, for the prism.
     */  "name": "base", 
    
      "min": "0", 
      "max": "1", 
      "type": "VisionBase",
      "isPrimitive": true }, 
    { 
    /*Power adjustment for multifocal lenses measured in diopters (0.25 units).
     */  "name": "add", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*Contact lens power measured in diopters (0.25 units).
     */  "name": "power", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*Back Curvature measured in millimeters.
     */  "name": "backCurve", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*Contact lens diameter measured in millimeters.
     */  "name": "diameter", 
    
      "min": "0", 
      "max": "1", 
      "type": "decimal",
      "isPrimitive": true }, 
    { 
    /*The recommended maximum wear period for the lens.
     */  "name": "duration", 
    
      "min": "0", 
      "max": "1", 
      "type": "SimpleQuantity",
      "isPrimitive": false }, 
    { 
    /*Special color or pattern.
     */  "name": "color", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Brand recommendations or restrictions.
     */  "name": "brand", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
    { 
    /*Notes for special requirements such as coatings and lens materials.
     */  "name": "notes", 
    
      "min": "0", 
      "max": "1", 
      "type": "string",
      "isPrimitive": true }, 
  ]
},
"VisionBase": {
    /*A coded concept listing the base codes.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "VisionBase",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "VisionBase-list" }, 
  ],
  "elems": [
  ]
},
"VisionEyes": {
    /*A coded concept listing the eye codes.If the element is present, it must have either a @value, an @id, or extensions
     */
  "name": "VisionEyes",
  "base": "Element", 
  "attrs": [
    { 
      "name": "value", 
      "type": "VisionEyes-list" }, 
  ],
  "elems": [
  ]
},
  };
    
    //
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
  var processingInstruction = "<?xml version='1.0' encoding='UTF-8'?>\n";
  this.out(processingInstruction);
  this.processChildren(obj, 0, null, this.getDef(obj.resourceType), obj.resourceType);
  var result = this.getResult();
  result = processingInstruction + result.substring(processingInstruction.length).replace(/<(.+)>/m, '<$1 xmlns="http://h7.org/fhir">');
  return result;
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

  if (typeof(theObj) == 'object' && "fhir_comments" in theObj)
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
    
    if (typeof(theObj) == 'object' && elem.name in theObj)
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
//

    
}

module.exports = {
    'FHIRConverter': FHIRConverter,
    'toXML': this.toXML,
};