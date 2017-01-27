[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://anychart.com)
# NodeJS image generation utility
This example shows how to export AnyChart charts to SVG or Image formats using NodeJS.

## Running
First of all you need to clone this repository
```
$ git clone git@github.com:anychart-integrations/nodejs-image-generation-utility.git
```
Then go to the example directory
```
$ cd ./nodejs-image-generation-utility
```
For runing example you have to install dependency. Just exec command below.
```
$ npm install
```
And to run with defaults you should just exec index.js file with nodejs. 
```
 $ node index.js 
 Written to image.png file
```

## Options
```
 -i, --input [value] - path to input data file with chart, stage or svg. Default: chart.js.
 -o, --output [value] - path to output image or svg file. Default: image
 -t, --type [value] - type of output data. Default: png
```

## Requirements
* jsdom (DOM environment for chart rendering)
* commander (for console API)
* anychart (anychart library)
* anychart-export (anychart export nodejs module)

## Further Learning
* [Documentation](https://docs.anychart.com)
* [JavaScript API Reference](https://api.anychart.com)
* [Code Playground](https://playground.anychart.com)
* [Technical Support](https://anychart.com/support)

## License
[© AnyChart.com - JavaScript charts](http://www.anychart.com). Released under the [Apache 2.0 License](https://github.com/anychart-integrations/nodejs-image-generation-utility/blob/master/LICENSE).
