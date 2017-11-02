[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://anychart.com)
# Node.js charts exporting command-line utility
This example shows how to build server-side charts exporting command-line utility using AnyChart charting library and Node.js module. In this example we will show how to generate SVG, PNG, Jpeg Images.

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
> **Notice!**
> AnyChart NodeJS module requires [ImageMagic](https://www.imagemagick.org) to create JPG and PNG images.
Visit Image Magic [install](https://www.imagemagick.org/script/index.php) page for details.
**Note for Windows users:** you have to create environment variable as described in [Image Magic: Advanced Windows Installation](https://www.imagemagick.org/script/advanced-windows-installation.php) article.

To run the example with defaults you should just execute index.js file with nodejs: 
```
 $ node index.js 
 Written to image.png file
```
> **Notice!**
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
AnyChart NodeJS integration sample includes two parts:
- Code of the integration sample that allows to use Javascript library (in this case, AnyChart) with Node.js charts exporting command-line utility. You can use, edit, modify it, use it with other Javascript libraries without any restrictions. It is released under [Apache 2.0 License](https://github.com/anychart-integrations/nodejs-image-generation-utility/blob/master/LICENSE).
- AnyChart JavaScript library. It is released under Commercial license. You can test this plugin with the trial version of AnyChart. Our trial version is not limited by time and doesn't contain any feature limitations. Check details [here](https://www.anychart.com/buy/).

If you have any questions regarding licensing - please contact us. <sales@anychart.com>

[![Analytics](https://ga-beacon.appspot.com/UA-228820-4/Integrations/nodejs-image-generation-utility?pixel&useReferer)](https://github.com/igrigorik/ga-beacon)
