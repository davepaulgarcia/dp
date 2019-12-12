import {
  Line,
  mixins
} from 'vue-chartjs';

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['chartData'],
  data() {
    return {
      options: { //Chart.js options
        elements: {
          point:{
            radius: 0
          }
        },
        tooltips: {
          // Disable the on-canvas tooltip
          enabled: false,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        scales: {
          yAxes: [{
            display: false,
            ticks: {
              beginAtZero: true,
              max: 30 + 5
            },
            gridLines: {
              display: false
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              display: false,
              tickMarkLength: 0
            },
          }]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false
      },
      gradient: null,
      periodYear: []
    }
  },
  methods:{
    loadData(month, data){
      this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

      this.gradient.addColorStop(0   , 'rgba(212, 204, 239, 0.9)')
      this.gradient.addColorStop(0.5 , 'rgba(212, 204, 239, 0.25)');
      this.gradient.addColorStop(1   , 'rgba(212, 204, 239, 0)');
      this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: "",
            borderColor: '#D4CCEF',
            pointBackgroundColor: '#D4CCEF',
            pointBorderColor: '#D4CCEF',
            borderWidth: 3,
            backgroundColor: this.gradient,
            data: [20, 30, 18, 24, 13, 15]
          },
        ]
      }, this.options)
    },
  },
  mounted(){
    this.loadData();
  }
}
