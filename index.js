#!/usr/bin/env node

var fs = require('fs');
var program = require('commander');

// var anychart_nodejs = require('anychart-nodejs')(anychart);
var anychart_nodejs = require('../AnyChart-NodeJS');

program
    .version('0.0.1')
    .option('-i, --input [value]', 'path to input data file with chart, stage or svg.', 'chart.js')
    .option('-f, --format [value]', 'format (type) of input data. Possible values: svg, xml, javascript, json.', 'javascript')
    .option('-o, --output [value]', 'path to output image or svg file.', 'tmp/image')
    .option('-t, --type [value]', 'type of output data.', 'pdf');

program.parse(process.argv);

if (!program.input) {
  console.log('Input data not found.');
} else {
  fs.readFile(program.input, 'utf8', function(err, data) {
    if (err) {
      console.log(err);
    } else {
      //export parameters
      var params = {
        type: program.type,
        dataType: program.format
        // resources: [
        //   'https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.3.15/proj4.js',
        //   'https://cdn.anychart.com/geodata/1.2.0/countries/united_states_of_america/united_states_of_america.js'
        // ]
      };

      //exporting input data
      anychart_nodejs.exportTo(data, program.type).then(function(image) {
        //writing image data to file
        var fileName = program.output + '.' + program.type;
        fs.writeFile(fileName, image, function(err) {
          if (err) {
            console.log(err);
          } else {
            console.log('Written to ' + fileName + ' file');
          }
          process.exit(0);
        });
      }, function(err) {
        console.log(err);
        process.exit(0);
      });
    }
  });
}

