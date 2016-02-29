#!/usr/bin/env node
/**
 * Mike Carifio <mike@carif.io> (https://mike.carif.io/)
 */


var process = require('process');
var program = require('commander');
program.parse(process.argv);

var fhir2xml = require('../dist/node-fhir-convert'); // hacked version of fhir-convert.js that exports certain functions
var fs = require('fs');

program.args.forEach(function(pathname) {
    var json = JSON.parse(fs.readFileSync(pathname, "utf8"));
    fhir2xml.FHIRConverter(2);
    var xml = fhir2xml.toXML(json);
    console.log(xml);
});
