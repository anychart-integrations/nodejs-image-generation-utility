[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://anychart.com)
# NodeJS image generation utility
This example shows how to export AnyChart charts to SVG, PNG, Jpeg Image formats using NodeJS.

## Running
Clone this repository:
```
$ git clone git@github.com:anychart-integrations/nodejs-image-generation-utility.git
```
Navigate to the example folder:
```
$ cd ./nodejs-image-generation-utility
```
To run the example you have to install dependencies. Run the following command:
```
$ npm install
```
> **Note!**
> AnyChart NodeJS module requires ImageMagic to create JPG and PNG images. Visit Image Magic install page for details. Note for Windows users: you have to create environment variable as described in Image Magic: Advanced Windows Installation article.

To run the example with defaults you should just execute index.js file with nodejs: 
```
 $ node index.js 
 Written to image.png file
```
> **Note!**
> Please refrain from using percent values in chart. In node js DOM emulation there is some problems with this and resulting image may be differ from the planned.
## Options
```
 -i, --input [value] - path to the input data file with a chart, a stage or an SVG file. Default: chart.js.
 -o, --output [value] - path to the output file. Default: image
 -t, --type [value] - type of output data. Default: png
```

## Requirements
* jsdom (DOM environment for the chart rendering)
* commander (for the console API)
* anychart (AnyChart library)
* anychart-nodejs (AnyChart nodejs export module)

## Further Learning
* [Documentation](https://docs.anychart.com)
* [JavaScript API Reference](https://api.anychart.com)
* [Code Playground](https://playground.anychart.com)
* [Technical Support](https://anychart.com/support)

## License
[© AnyChart.com - JavaScript charts](http://www.anychart.com). Released under the [Apache 2.0 License](https://github.com/anychart-integrations/nodejs-image-generation-utility/blob/master/LICENSE).
