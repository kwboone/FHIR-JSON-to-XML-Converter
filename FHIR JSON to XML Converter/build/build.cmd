REM
REM This command line script will download the current edition of the FHIR Schema into ..\schema
REM It will then apply an XSLT Script to convert the Schema to the conversion JavaScript in ..\dist
REM
REM It expects to be run from the build folder, and to have curl.exe, java.exe and jar.exe in your PATH
REM and Xalan jar files to be in your classpath.  
REM

@ECHO OFF

REM Create the schema folder if it is not present
IF NOT EXIST ..\schema MD ..\schema

IF "%1"=="-x" GOTO SKIPLOAD
REM Get the Schemas from http://hl7-fhir.github.io/fhir-all-xsd.zip
curl http://hl7-fhir.github.io/fhir-all-xsd.zip -o ..\schema\fhir-all-xsd.zip

REM Extract fhir-single.xsd

:SKIPLOAD
cd ..\schema

IF "%1"=="-l" GOTO SKIPEXTRACT
IF "%1"=="-x" GOTO SKIPEXTRACT
jar xf fhir-all-xsd.zip fhir-single.xsd
:SKIPEXTRACT

REM Create the script
java org.apache.xalan.xslt.Process -IN fhir-single.xsd -XSL ..\src\processFHIRSchema.xsl -OUT ..\dist\fhir-convert.js

REM Return to the build directory
cd ..\build

