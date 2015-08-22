/**
 * Created by guolibin on 2015/8/19.
 */
$(function () {

    var colors = Highcharts.getOptions().colors,
        categories = ['车间编号', '车间编号', '车间编号', '车间编号', '车间编号'],
        name = '车间编号（2015-8-19）',
        data = [{
            y: 55.11,
            color: colors[0]
        }, {
            y: 21.63,
            color: colors[1]
        }, {
            y: 11.94,
            color: colors[2]
        }, {
            y: 7.15,
            color: colors[3]
        }, {
            y: 2.14,
            color: colors[4],
        }];

    function setChart(name, categories, data, color) {
        chart.xAxis[0].setCategories(categories, false);
        chart.series[0].remove(false);
        chart.addSeries({
            name: name,
            data: data,
            color: color || 'white'
        }, false);
        chart.redraw();
    }

    var chart = $('#NNeedl').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '前五名产量机器的柱状报表'
        },
        subtitle:{
            text: "工厂各车间生产发布柱状图"
        },
        xAxis: {
            categories: categories
        },
        yAxis: {
            title: {
                text: '总生产针数'
            }
        },
        plotOptions: {
            column: {
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: colors[0],
                    style: {
                        fontWeight: 'bold'
                    },
                    formatter: function() {
                        return this.y +'%';
                    }
                }
            }
        },
        tooltip: {
            formatter: function() {
                var point = this.point,
                    s = this.x +':<b>'+ this.y +'</b><br>';
                if (point.drilldown) {
                    s += 'Click to view '+ point.category +' versions';
                } else {
                    s += '排名情况';
                }
                return s;
            }
        },
        series: [{
            name: name,
            data: data,
            color: 'white'
        }],
        exporting: {
            enabled: false
        }
    })
        .highcharts(); // return chart
});