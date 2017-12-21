var fs = require('fs');
var jsdom = require('jsdom').jsdom;
var program = require('commander');

var document = jsdom('<body><div id="container"></div></body>');
var window = document.defaultView;

var anychart = require('anychart')(window);
// var anychart_nodejs = require('anychart-nodejs')(anychart);
var anychart_nodejs = require('../AnyChart-NodeJS')(anychart);

program
    .version('0.0.1')
    .option('-i, --input [value]', 'path to input data file with chart, stage or svg', 'chart.js')
    .option('-f, --dataType [value]', 'type of input data', 'javascript')
    .option('-o, --output [value]', 'path to output image or svg file.', 'tmp/image')
    .option('-t, --type [value]', 'type of output data.', 'pdf');

program.parse(process.argv);

if (!program.input) {
  console.log('Input data not found.');
} else {
  fs.readFile(program.input, 'utf8', function(err, data) {
    if (err) {
      console.log(err.message);
    } else {
      //export parameters
      var params = {
        type: program.type,
        dataType: program.dataType
      };

      //exporting input data
      anychart_nodejs.exportTo(data, params).then(function(image) {
        //writing image data to file
        var fileName = program.output + '.' + program.type;
        fs.writeFile(fileName, image, function(err) {
          if (err) {
            console.log(err.message);
          } else {
            console.log('Written to ' + fileName + ' file');
          }
          process.exit(0);
        });
      }, function(err) {
        console.log(err.message);
        process.exit(0);
      });
    }

  });
}

