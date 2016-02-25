#!/usr/bin/env node
/**
 * Mike Carifio <mike@carif.io> (https://mike.carif.io/)
 */

var fhir2xml = require('../dist/node-fhir-convert'); // hacked version of fhir-convert.js that exports certain functions

var fs = require('fs');
var json = JSON.parse(fs.readFileSync('bugs-bunny-patient.json', "utf8"));

fhir2xml.FHIRConverter(2);
var xml = fhir2xml.toXML(json);
console.log(xml);