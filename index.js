#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var program = require('commander');
var anychart_nodejs = require('anychart-nodejs');

program
    .version('0.0.2')
    .option('-i, --input [value]', 'path to input data file with chart, stage or svg.', 'chart.js')
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
      //exporting input data
      anychart_nodejs.exportTo(data, program.type).then(function(image) {
        var fileName = program.output + '.' + program.type;
        var dirName = path.dirname(fileName);
        if (!fs.existsSync(dirName))
            fs.mkdirSync(dirName);

        //writing image data to file
        fs.writeFile(fileName, image, function(err) {
          if (err) {
            console.log(err);
          } else {
            console.log('Written to ' + fileName + ' file');
          }
        });
      }, function(err) {
        console.log(err);
      });
    }
  });
}
