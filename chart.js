// create data set on our data
chartData = {
  title: 'Company Profit Dynamic in Regions by Year',
  header: ['#', 'Florida', 'Texas', 'Nevada', 'Arizona'],
  rows: [
    ['2001', 128.14, -90.54, -43.76, -122.56],
    ['2002', 112.61, 104.19, 61.34, -87.12],
    ['2003', -123.21, 135.12, -34.17, 54.32]
  ]
};

// create column chart
chart = anychart.column3d();
chart.background(null);

// set chart data
chart.data(chartData);

// set chart title text settings
chart.title().padding([0, 0, 5, 0]);
chart.interactivity().hoverMode('single');

chart.xAxis(0)
    .stroke(null)
    .title('Profit in Dollars');
chart.xAxis(1)
    .stroke(null)
    .orientation('top');
chart.yAxis().labels().format('{%Value}k');

// turn on legend
chart.legend()
    .enabled(true)
    .fontSize(13)
    .padding([0, 0, 20, 0]);

// set tooltip settings
chart.tooltip().format('{%SeriesName} : {%Value}{groupsSeparator: }k.');

chart.labels()
    .enabled(true)
    .fontColor('#393838');

// set bars settings
chart.barsPadding(0.1)
    .barGroupsPadding(0.9);

// set container id for the chart
chart.container('container');

// initiate chart drawing
chart.draw();