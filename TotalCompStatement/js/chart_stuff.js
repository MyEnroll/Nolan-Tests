// var app = new Vue({
//   el: '#chart',
//   components: {
//     apexchart: VueApexCharts,
//   },
//   data: {
//     series: [{
//       name: 'Employee Cost',
//       data: CompBreakdown.eeCostTotal
//     }, {
//       name: 'Employeer Cost',
//       data: CompBreakdown.erCostTotal
//     }],
//     chartOptions: {
//       plotOptions: {
//         bar: {
//           horizontal: false,
//           columnWidth: '75%'
//         },
//       },
//       dataLabels: {
//         enabled: false
//       },
//       stroke: {
//         show: true,
//         width: 2,
//         colors: ['transparent']
//       },

//       xaxis: {
//         categories: ['Employee Vs. Employer Cost'],
//       },
//       yaxis: {
//         title: {
//           text: '$'
//         }
//       },
//       fill: {
//         opacity: 1

//       },

//     }
//   }
// })
var chartAct = new Vue({
  el: '#chart',
  components: {
    apexchart: VueApexCharts,
  },
  data: {
    series: CompBreakdown.costArray,
    chartOptions: {
      id: 'costChart',
      title: {
        text: 'Total Comp. Breakdown',
        align: 'center',
        margin: 20,
        floating: false,
        style: {
          fontSize: '20px',
          color: '#263238'
        },
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        floating: false,
        fontSize: '14px',
        itemMargin: {
          horizontal: 5,
          vertical: 5
        },
        onItemClick: {
          toggleDataSeries: true
        },
        onItemHover: {
          highlightDataSeries: true
        },
      },
      labels: CompBreakdown.ChartLabels,
      responsive: [{
        breakpoint: 480,
        options: {
          plotOptions: {
            pie: {
              size: '100%'
            }
          }
        }
      }]
    }
  },
  methods: {
    reset: function () {
      this.series = CompBreakdown.costArray;
      this.chartOptions.labels = CompBreakdown.ChartLabels;

    },
  }

})