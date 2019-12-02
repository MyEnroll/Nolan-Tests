new Vue({
    el: '#chart',
    components: {
      apexchart: VueApexCharts,
    },
    data: {
      series: [44, 55, 13, 43, 22],
      chartOptions: {
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    },

  })