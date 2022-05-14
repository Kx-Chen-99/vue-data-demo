<template>
  <div class="q-pt-md">
    <div id="stackedLine" style="width: 100%;height: 400px;"></div>
  </div>
</template>

<script>
export default {
  name: "stackedLine",
  data () {
    return {
      System: [],
      Base: [],
      Base500: [],
      Base502: [],
      Base505: [],
      Base520: [],
      Base523: [],
      Base525: [],
      Base531: [],
      Base541: [],
      Base548: [],
      Base557: [],
    }
  },
  props: {
    selectInfo: {
      type: Object,
    }
  },
  mounted() {
    this.draw()
  },
  methods: {
    draw() {
      for (const i in this.selectInfo) {
        this.System[i] = this.selectInfo[i].System
        this.Base[i] = this.selectInfo[i].Baseline
        this.Base500[i] = this.selectInfo[i].Base500
        this.Base502[i] = this.selectInfo[i].Base502
        this.Base505[i] = this.selectInfo[i].Base505
        this.Base520[i] = this.selectInfo[i].Base520
        this.Base523[i] = this.selectInfo[i].Base523
        this.Base525[i] = this.selectInfo[i].Base525
        this.Base531[i] = this.selectInfo[i].Base531
        this.Base541[i] = this.selectInfo[i].Base541
        this.Base548[i] = this.selectInfo[i].Base548
        this.Base557[i] = this.selectInfo[i].Base557
      }
      var echarts = require('echarts');
      var myChart = echarts.init(document.getElementById('stackedLine'));
      var option = {
        // title: {
        //   text: 'CPU各基准得分',
        //   textFont: 'large',
        //   left: 'center'
        // },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: this.System,
          // top: 'bottom'
          left: 'center',
          // orient: 'vertical',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Baseline', '500 Base', '502 Base', '505 Base', '520 Base', '523 Base', '525 Base', '531 Base', '541 Base', '548 Base', '557 Base']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: this.System[0],
            type: 'line',
            data: [
              this.Base[0],
              this.Base500[0],
              this.Base502[0],
              this.Base505[0],
              this.Base520[0],
              this.Base523[0],
              this.Base525[0],
              this.Base531[0],
              this.Base541[0],
              this.Base548[0],
              this.Base557[0],
            ]
          },
          {
            name: this.System[1],
            type: 'line',
            data: [
              this.Base[1],
              this.Base500[1],
              this.Base502[1],
              this.Base505[1],
              this.Base520[1],
              this.Base523[1],
              this.Base525[1],
              this.Base531[1],
              this.Base541[1],
              this.Base548[1],
              this.Base557[1],
            ]
          },
          {
            name: this.System[2],
            type: 'line',
            data: [
              this.Base[2],
              this.Base500[2],
              this.Base502[2],
              this.Base505[2],
              this.Base520[2],
              this.Base523[2],
              this.Base525[2],
              this.Base531[2],
              this.Base541[2],
              this.Base548[2],
              this.Base557[2],
            ]
          },
          {
            name: this.System[3],
            type: 'line',
            data: [
              this.Base[3],
              this.Base500[3],
              this.Base502[3],
              this.Base505[3],
              this.Base520[3],
              this.Base523[3],
              this.Base525[3],
              this.Base531[3],
              this.Base541[3],
              this.Base548[3],
              this.Base557[3],
            ]
          },
          {
            name: this.System[4],
            type: 'line',
            data: [
              this.Base[4],
              this.Base500[4],
              this.Base502[4],
              this.Base505[4],
              this.Base520[4],
              this.Base523[4],
              this.Base525[4],
              this.Base531[4],
              this.Base541[4],
              this.Base548[4],
              this.Base557[4],
            ]
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>
