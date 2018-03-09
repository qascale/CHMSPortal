// CHART SPLINE
// ----------------------------------- 
(function (window, document, $, undefined) {

    $(function () {

        var data = [{
           
            "label": "Sale",
            "color": "#1f92fe",
            "data": [
              ["Mar", 21],
              ["Apr", 12],
              ["May", 27],
              ["Jun", 24],
              ["Jul", 16],
              ["Aug", 39],
              ["Sep", 15]
            ]
        }];

        var datav2 = [{
            "label": "Hours",
            "color": "#23b7e5",
            "data": [
              ["Jan", 70],
              ["Feb", 20],
              ["Mar", 70],
              ["Apr", 85],
              ["May", 59],
              ["Jun", 93],
              ["Jul", 66],
              ["Aug", 86],
              ["Sep", 60],
              ["Oct", 60],
              ["Nov", 12],
              ["Dec", 50]
            ]
        }, {
            "label": "Commits",
            "color": "#7266ba",
            "data": [
              ["Jan", 20],
              ["Feb", 70],
              ["Mar", 30],
              ["Apr", 50],
              ["May", 85],
              ["Jun", 43],
              ["Jul", 96],
              ["Aug", 36],
              ["Sep", 80],
              ["Oct", 10],
              ["Nov", 72],
              ["Dec", 31]
            ]
        }];

        var datav3 = [{
            "label": "Home",
            "color": "#1ba3cd",
            "data": [
              ["1", 38],
              ["2", 40],
              ["3", 42],
              ["4", 48],
              ["5", 50],
              ["6", 70],
              ["7", 145],
              ["8", 70],
              ["9", 59],
              ["10", 48],
              ["11", 38],
              ["12", 29],
              ["13", 30],
              ["14", 22],
              ["15", 28]
            ]
        }, {
            "label": "Overall",
            "color": "#3a3f51",
            "data": [
              ["1", 16],
              ["2", 18],
              ["3", 17],
              ["4", 16],
              ["5", 30],
              ["6", 110],
              ["7", 19],
              ["8", 18],
              ["9", 110],
              ["10", 19],
              ["11", 16],
              ["12", 10],
              ["13", 20],
              ["14", 10],
              ["15", 20]
            ]
        }];

        var options = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 4
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.5
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 150, // optional: use it for a clear represetation
                tickColor: '#eee',
                //position: 'right' or 'left',
                tickFormatter: function (v) {
                    return v/* + ' visitors'*/;
                }
            },
            shadowSize: 0
        };

        var chart = $('.chart-spline');
        if (chart.length)
            $.plot(chart, data, options);

        var chartv2 = $('.chart-splinev2');
        if (chartv2.length)
            $.plot(chartv2, datav2, options);

        var chartv3 = $('.chart-splinev3');
        if (chartv3.length)
            $.plot(chartv3, datav3, options);

    });

})(window, document, window.jQuery);

// CHART AREA
// ----------------------------------- 
(function (window, document, $, undefined) {

    $(function () {

        var data = [{
            
            "label": "Total Count",
            "color": "#7dc7df",
            "data": [
              ["Mar", 13],
              ["Apr", 44],
              ["May", 44],
              ["Jun", 27],
              ["Jul", 38],
              ["Aug", 11],
              ["Sep", 39]
            ]
        }];

        var options = {
            series: {
                lines: {
                    show: true,
                    fill: 0.8
                },
                points: {
                    show: true,
                    radius: 4
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                tickColor: '#eee',
                // position: 'right' or 'left'
                tickFormatter: function (v) {
                    return v;
                }
            },
            shadowSize: 0
        };

        var chart = $('.chart-area');
        if (chart.length)
            $.plot(chart, data, options);

    });

})(window, document, window.jQuery);

// CHART BAR
// ----------------------------------- 
(function (window, document, $, undefined) {

    $(function () {

        var data = [{
            "label": "Sales",
            "color": "#9cd159",
            "data": [
              ["Jan", 27],
              ["Feb", 82],
              ["Mar", 56],
              ["Apr", 14],
              ["May", 28],
              ["Jun", 77],
              ["Jul", 23],
              ["Aug", 49],
              ["Sep", 81],
              ["Oct", 20]
            ]
        }];

        var options = {
            series: {
                bars: {
                    align: 'center',
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: 0.9
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                // position: 'right' or 'left'
                tickColor: '#eee'
            },
            shadowSize: 0
        };

        var chart = $('.chart-bar');
        if (chart.length)
            $.plot(chart, data, options);

    });

})(window, document, window.jQuery);


// CHART BAR STACKED
// ----------------------------------- 
(function (window, document, $, undefined) {

    $(function () {

        var data = [{
            "label": "Tweets",
            "color": "#51bff2",
            "data": [
              ["Jan", 56],
              ["Feb", 81],
              ["Mar", 97],
              ["Apr", 44],
              ["May", 24],
              ["Jun", 85],
              ["Jul", 94],
              ["Aug", 78],
              ["Sep", 52],
              ["Oct", 17],
              ["Nov", 90],
              ["Dec", 62]
            ]
        }, {
            "label": "Likes",
            "color": "#4a8ef1",
            "data": [
              ["Jan", 69],
              ["Feb", 135],
              ["Mar", 14],
              ["Apr", 100],
              ["May", 100],
              ["Jun", 62],
              ["Jul", 115],
              ["Aug", 22],
              ["Sep", 104],
              ["Oct", 132],
              ["Nov", 72],
              ["Dec", 61]
            ]
        }, {
            "label": "+1",
            "color": "#f0693a",
            "data": [
              ["Jan", 29],
              ["Feb", 36],
              ["Mar", 47],
              ["Apr", 21],
              ["May", 5],
              ["Jun", 49],
              ["Jul", 37],
              ["Aug", 44],
              ["Sep", 28],
              ["Oct", 9],
              ["Nov", 12],
              ["Dec", 35]
            ]
        }];

        var datav2 = [{
            "label": "Pending",
            "color": "#9289ca",
            "data": [
              ["Pj1", 86],
              ["Pj2", 136],
              ["Pj3", 97],
              ["Pj4", 110],
              ["Pj5", 62],
              ["Pj6", 85],
              ["Pj7", 115],
              ["Pj8", 78],
              ["Pj9", 104],
              ["Pj10", 82],
              ["Pj11", 97],
              ["Pj12", 110],
              ["Pj13", 62]
            ]
        }, {
            "label": "Assigned",
            "color": "#7266ba",
            "data": [
              ["Pj1", 49],
              ["Pj2", 81],
              ["Pj3", 47],
              ["Pj4", 44],
              ["Pj5", 100],
              ["Pj6", 49],
              ["Pj7", 94],
              ["Pj8", 44],
              ["Pj9", 52],
              ["Pj10", 17],
              ["Pj11", 47],
              ["Pj12", 44],
              ["Pj13", 100]
            ]
        }, {
            "label": "Completed",
            "color": "#564aa3",
            "data": [
              ["Pj1", 29],
              ["Pj2", 56],
              ["Pj3", 14],
              ["Pj4", 21],
              ["Pj5", 5],
              ["Pj6", 24],
              ["Pj7", 37],
              ["Pj8", 22],
              ["Pj9", 28],
              ["Pj10", 9],
              ["Pj11", 14],
              ["Pj12", 21],
              ["Pj13", 5]
            ]
        }];

        var options = {
            series: {
                stack: true,
                bars: {
                    align: 'center',
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: 0.9
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                // position: 'right' or 'left'
                tickColor: '#eee'
            },
            shadowSize: 0
        };

        var chart = $('.chart-bar-stacked');
        if (chart.length)
            $.plot(chart, data, options);

        var chartv2 = $('.chart-bar-stackedv2');
        if (chartv2.length)
            $.plot(chartv2, datav2, options);

    });

})(window, document, window.jQuery);

// CHART DONUT
// ----------------------------------- 
(function (window, document, $, undefined) {

    $(function () {

        var data = [{
            "color": "#39C558",
            "data": 60,
            "label": "ATISHAY LIMITED BHOPAL"
        },
          {
              "color": "#00b4ff",
              "data": 90,
              "label": "JEETENDRA YELLIGATY"
          },
          {
              "color": "#FFBE41",
              "data": 50,
              "label": "SAMEER MAHAJAN"
          }
        ];

        var options = {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0.5 // This makes the donut shape
                }
            }
        };

        var chart = $('.chart-donut');
        if (chart.length)
            $.plot(chart, data, options);

    });

})(window, document, window.jQuery);

// CHART LINE
// ----------------------------------- 
(function (window, document, $, undefined) {

    $(function () {

        var data = [{
            "label": "Total Count",
            "color": "#5ab1ef",
            "data": [
                ["Jan", 74],
                ["Feb", 50],
                ["Mar", 185],
                ["Apr", 199],
                ["May", 190],
                ["Jun", 194],
                ["Jul", 194],
                ["Aug", 184],
                ["Sep", 74]
            ]
        
        }];

        var options = {
            series: {
                lines: {
                    show: true,
                    fill: 0.01
                },
                points: {
                    show: true,
                    radius: 4
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#eee',
                mode: 'categories'
            },
            yaxis: {
                // position: 'right' or 'left'
                tickColor: '#eee'
            },
            shadowSize: 0
        };

        var chart = $('.chart-line');
        if (chart.length)
            $.plot(chart, data, options);

    });

})(window, document, window.jQuery);


// CHART PIE
// ----------------------------------- 
(function (window, document, $, undefined) {

    $(function () {

        var data = [{
            "label": "ATISHAY LIMITED BHOPAL",
            "color": "#4acab4",
            "data": 30
        }, {
            "label": "JEETENDRA YELLIGATY",
            "color": "#ffea88",
            "data": 40
        }, {
            "label": "SAMEER MAHAJAN",
            "color": "#ff8153",
            "data": 90
        }];

        var options = {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0,
                    label: {
                        show: true,
                        radius: 0.8,
                        formatter: function (label, series) {
                            return '<div class="flot-pie-label">' +
                            //label + ' : ' +
                            Math.round(series.percent) +
                            '%</div>';
                        },
                        background: {
                            opacity: 0.8,
                            color: '#222'
                        }
                    }
                }
            }
        };

        var chart = $('.chart-pie');
        if (chart.length)
            $.plot(chart, data, options);

    });

})(window, document, window.jQuery);
