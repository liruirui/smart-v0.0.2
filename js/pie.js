/**
 * Created by guolibin on 2015/8/19.
 */
$(function () {
    var chart;

    $(document).ready(function () {

        $('#pie-container').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: '工厂综合所有机器的时间比例分布图'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: '占总时间',
                data: [
                    ['刺绣时间',45.0],
                    ['断线停车时间',8.5],
                    ['其他停车时间',6.2]
                ]
            }]
        });
    });

});