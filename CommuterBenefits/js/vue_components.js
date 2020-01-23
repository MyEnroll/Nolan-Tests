var CommuterInput = new Vue({
    el: '#commDC',
    data: {
        allMonthsTrans: null,
        janTrans: null,
        febTrans: null,
        marTrans: null,
        aprTrans: null,
        mayTrans: null,
        juneTrans: null,
        julyTrans: null,
        augTrans: null,
        sepTrans: null,
        octTrans: null,
        novTrans: null,
        decTrans: null,
        allMonthsPark: null,
        janPark: null,
        febPark: null,
        marPark: null,
        aprPark: null,
        mayPark: null,
        junePark: null,
        julyPark: null,
        augPark: null,
        sepPark: null,
        octPark: null,
        novPark: null,
        decPark: null,
        spendingHist: [28, 29, 33, 36, 32, 32, 33],
        spendingHist2: [12, 11, 14, 18, 17, 13, 13],
    },

    methods: {
        unlockMonth: function (event) {
            targetId = event.currentTarget.id;
            target = $('#' + targetId);
            $(target).css({
                'box-shadow': '0px 3px 8px rgba(0,0,0,.18)'
            })

            $('input').not(target).removeAttr('style');


        }
    },
    watch: {
        allMonthsTrans: function () {
            if (this.allMonthsTrans > 0 || this.allMonthsTrans != "") {
                this.janTrans = this.allMonthsTrans;
                this.febTrans = this.allMonthsTrans;
                this.marTrans = this.allMonthsTrans;
                this.aprTrans = this.allMonthsTrans;
                this.mayTrans = this.allMonthsTrans;
                this.juneTrans = this.allMonthsTrans;
                this.julyTrans = this.allMonthsTrans;
                this.augTrans = this.allMonthsTrans;
                this.sepTrans = this.allMonthsTrans;
                this.octTrans = this.allMonthsTrans;
                this.novTrans = this.allMonthsTrans;
                this.decTrans = this.allMonthsTrans;
            }
            // if (this.allMonthsTrans != "") {
            //     $('.monthTransInp').addClass('uk-disabled');
            // } else {
            //     $('.monthTransInp').removeAttr('disabled');
            // }
        },
        allMonthsPark: function () {
            this.janPark = this.allMonthsPark;
            this.febPark = this.allMonthsPark;
            this.marPark = this.allMonthsPark;
            this.aprPark = this.allMonthsPark;
            this.mayPark = this.allMonthsPark;
            this.junePark = this.allMonthsPark;
            this.julyPark = this.allMonthsPark;
            this.augPark = this.allMonthsPark;
            this.sepPark = this.allMonthsPark;
            this.octPark = this.allMonthsPark;
            this.novPark = this.allMonthsPark;
            this.decPark = this.allMonthsPark;
        }


    }
});
var chart = new Vue({
    el: '#transactionArea',
    components: {
        apexchart: VueApexCharts
    },
    data: {

        apexRange: CommuterInput.spendingHist,
        series: [{
            name: "High - 2013",
            data: CommuterInput.spendingHist
        }, ],
        chartOptions: {
            chart: {
                id: 'chart',
                toolbar: {
                    show: true,
                    tools: {
                        download: true,
                        selection: true,
                        zoom: true,
                        zoomin: true,
                        zoomout: true,
                        pan: true,
                    },
                    autoSelected: 'zoom'
                },
                type: 'line',
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
                animations: {
                    enabled: true,
                    easing: 'easeout',
                    dynamicAnimation: {
                        speed: 250
                    }
                },
            },
            colors: ['#77B6EA', '#545454'],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth'
            },
            title: {
                text: 'Average High & Low Temperature',
                align: 'left'
            },
            grid: {
                borderColor: '#e7e7e7',
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            markers: {
                size: 1
            },
            yaxis: {
                title: {
                    text: 'Temperature'
                },

            },
            legend: {
                position: 'top',
                horizontalAlign: 'center',
                floating: true,
                offsetY: -25,
                offsetX: -5
            }
        },


    },
    methods: {
        test: function () {
            alert(this.spendingHist2);
        },
        addData: function () {
            CommuterInput.spendingHist.push(Math.floor(Math.random() * (50 - 10 + 1)) + 10);
            //CommuterInput.spendingHist.shift();
            this.$refs.chart.updateOptions([])

        },
        removeData: function () {
            CommuterInput.spendingHist.pop();
            this.$refs.chart.updateOptions([])
        }
    },

})