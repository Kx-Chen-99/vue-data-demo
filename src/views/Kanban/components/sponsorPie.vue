<template>
  <div class="">
    <div id="sponsorPie" style="width: 50%;height: 300px;"></div>
  </div>
</template>

<script>
export default {
  name: "sponsorPie",
  mounted() {
    this.draw()
  },
  methods: {
    draw() {
      var echarts = require('echarts');
      var myChart = echarts.init(document.getElementById('sponsorPie'));
      var option = {
        title: {
          text: '各供应商的CPU市场占比',
          subtext: '计算方式=各供应商提供的CPU数量/总CPU数量',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          // orient: 'horizontal',
          orient: 'vertical',
          top: 'center',
          left: 'right'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'A' },
              { value: 735, name: 'B' },
              { value: 580, name: 'C' },
              { value: 484, name: 'D' },
              { value: 300, name: 'E' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>
