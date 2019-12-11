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
      labels: CompBreakdown.ChartLabels,
      responsive: [{
        breakpoint: 480,
        options: {

          legend: {
            position: 'bottom'
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