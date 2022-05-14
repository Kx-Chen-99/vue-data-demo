<template>
  <div>
    <q-stepper v-model="step" color="primary" animated>
      <q-step :name="1" title="选择Benchmark" :done="step > 1">
        <q-list dense v-for="item in Benchmark" :key="item.benchmark">
          <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-radio v-model="benchmark" :val="item.benchmark" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{item.benchmark}}</q-item-label>
            </q-item-section>
            <q-item-section side>{{item.discribe}}</q-item-section>
          </q-item>
        </q-list>
        <q-stepper-navigation>
          <q-btn v-if="benchmark" @click="step = 2" color="primary" label="Continue" class="flex justify-end"/>
        </q-stepper-navigation>
      </q-step>

      <q-step :name="2" title="选择CPU" :done="step > 2">
        <q-table
          row-key="System"
          :rows="rows"
          :columns="columns"
          :filter="filter"
          class="my-sticky-header-table"
          selection="multiple"
          v-model:selected="selected"
        >
          <template v-slot:top>
            <q-input bg-color="" dark standout dense v-model="filter" placeholder="Search">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
        </q-table>
        <q-stepper-navigation>
          <q-btn v-if="selected.length > 1" @click="step = 3" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="生成分析报告">
        <div class="text-center text-h4 q-pb-md">CPU分析报告</div>
        <div class="row q-pb-lg">
          <div class="col">CPU测评基准：{{benchmark}}</div>
          <div class="col">报告生成时间：{{now}}</div>
        </div>
        <div class="q-pt-lg text-center text-h5">CPU参数详情</div>
        <q-table
          class="q-mb-lg"
          flat
          dense
          bordered
          :rows="selected"
          :columns="columns1"
          row-key="System"
          separator="vertical"
        />
        <div class="q-pt-lg text-center text-h5">CPU在各基准下的得分详情</div>
        <q-table
          flat
          dense
          bordered
          :rows="selected"
          :columns="columns2"
          row-key="System"
          separator="vertical"
          class="q-mb-lg"
        />
        <div class="q-pt-md text-center text-h5">CPU各基准得分比较</div>
        <stacked-line :selectInfo="selected" class="q-pb-lg" />
        <div class="q-pt-md text-center text-h5">各基准含义</div>
        <q-list bordered dense class="">
<!--          <q-item>-->
<!--            <q-item-section class="text-center text-h5">111</q-item-section>-->
<!--          </q-item>-->
<!--          <q-separator />-->
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>基准</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>含义</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>基准</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>含义</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>500 Base</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>Perl翻译</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>502 Base</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>GNU C编译器</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>505 Base</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>路线规划</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>520 Base</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>离散事件模拟——计算机网络</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>523 Base</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>通过XSLT进行XML到HTML的转换</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>525 Base</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>视频压缩</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>531 Base</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>人工智能：alpha-beta树搜索（国际象棋）</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>541 Base</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>人工智能：蒙特卡洛树搜索（Go）</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>548 Base</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>人工智能：递归解决方案生成器（Sudoku）</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>557 Base</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label>一般数据压缩</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Download" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
<!--      <q-step :name="4" title="Create an ad">-->
<!--        Try out different ad text to see what brings in the most customers, and learn how to-->
<!--        enhance your ads using features like ad extensions. If you run into any problems with-->
<!--        your ads, find out how to tell if they're running and how to resolve approval issues.-->
<!--        <q-stepper-navigation>-->
<!--          <q-btn color="primary" label="Finish" />-->
<!--          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />-->
<!--        </q-stepper-navigation>-->
<!--      </q-step>-->
    </q-stepper>
  </div>
</template>

<script>
import moment from "moment";
import stackedLine from "./components/stackedLine";

export default {
  name: "detail",
  components: {
    stackedLine
  },
  data () {
    return {
      step: 1,
      benchmark: '',
      Benchmark: [
        { benchmark: "CINT2017", discribe: "使用10个整数密集型基准，一次运行一个任务，耗时越短得分越高" },
        { benchmark: "CFP2017", discribe: "使用10个浮点密集型基准，一次运行一个任务，耗时越短得分越高" },
        { benchmark: "RINT2017", discribe: "使用10个整数密集型基准，一次运行多个任务，吞吐量越高得分越高" },
        { benchmark: "RFP2017", discribe: "使用13个浮点密集型基准，一次运行多个任务，吞吐量越高得分越高" },
        { benchmark: "CINT2006", discribe: "使用12个整数密集型基准，一次运行一个任务，耗时越短得分越高" },
        { benchmark: "CFP2006", discribe: "使用17个浮点密集型基准，一次运行一个任务，耗时越短得分越高" },
        { benchmark: "RINT2006", discribe: "使用12个整数密集型基准，一次运行多个任务，吞吐量越高得分越高" },
        { benchmark: "RFP2006", discribe: "使用17个浮点密集型基准，一次运行多个任务，吞吐量越高得分越高" },
        // { benchmark: "composite", discribe: "在运行单个 OS 映像的单个系统上运行的单个 JVM " },
        // { benchmark: "distributed", discribe: "在运行单个 OS 映像的单个系统上运行的多个 JVM " },
        // { benchmark: "multijvm", discribe: "运行单个或多个 OS 映像的一个或多个系统上运行的多个 JVM " },
        // { benchmark: "jvm2008", discribe: "111111" },
        // { benchmark: "power", discribe: "111111" },
      ],
      filter: '',
      columns: [
        { name: 'System', label: 'CPU', align: 'left',field: 'System', sortable: true },
        { name: 'Cores', label: 'Cores', field: 'Cores', sortable: true },
        { name: 'Chips', label: 'Chips', field: 'Chips', sortable: true },
        { name: 'Cache1', label: '1st Level Cache', field: 'Cache1', sortable: true },
        { name: 'Cache2', label: '2nd Level Cache', field: 'Cache2', sortable: true },
        { name: 'Cache3', label: '3rd Level Cache', field: 'Cache3', sortable: true },
        { name: 'Memory', label: 'Memory', field: 'Memory', sortable: true },
        { name: 'Storage', label: 'Storage', field: 'Storage', sortable: true },
        { name: 'Baseline', label: 'Base', field: 'Baseline', sortable: true },
        { name: '500 Base', label: '500 Base', field: 'Base500', sortable: true },
        { name: '502 Base', label: '502 Base', field: 'Base502', sortable: true },
        { name: '505 Base', label: '505 Base', field: 'Base505', sortable: true },
        { name: '520 Base', label: '520 Base', field: 'Base520', sortable: true },
        { name: '523 Base', label: '523 Base', field: 'Base523', sortable: true },
        { name: '525 Base', label: '525 Base', field: 'Base525', sortable: true },
        { name: '531 Base', label: '531 Base', field: 'Base531', sortable: true },
        { name: '541 Base', label: '541 Base', field: 'Base541', sortable: true },
        { name: '548 Base', label: '548 Base', field: 'Base548', sortable: true },
        { name: '557 Base', label: '557 Base', field: 'Base557', sortable: true },
      ],
      columns1: [
        { name: 'System', label: 'CPU', align: 'left',field: 'System', sortable: true },
        { name: 'Cores', label: 'Cores', field: 'Cores', sortable: true },
        { name: 'Chips', label: 'Chips', field: 'Chips', sortable: true },
        { name: 'Cache1', label: '1st Level Cache', field: 'Cache1', sortable: true },
        { name: 'Cache2', label: '2nd Level Cache', field: 'Cache2', sortable: true },
        { name: 'Cache3', label: '3rd Level Cache', field: 'Cache3', sortable: true },
        { name: 'Memory', label: 'Memory', field: 'Memory', sortable: true },
        { name: 'Storage', label: 'Storage', field: 'Storage', sortable: true },
      ],
      columns2: [
        { name: 'System', label: 'CPU', align: 'left',field: 'System', sortable: true },
        { name: 'Baseline', label: 'Base', field: 'Baseline', sortable: true },
        { name: '500 Base', label: '500 Base', field: 'Base500', sortable: true },
        { name: '502 Base', label: '502 Base', field: 'Base502', sortable: true },
        { name: '505 Base', label: '505 Base', field: 'Base505', sortable: true },
        { name: '520 Base', label: '520 Base', field: 'Base520', sortable: true },
        { name: '523 Base', label: '523 Base', field: 'Base523', sortable: true },
        { name: '525 Base', label: '525 Base', field: 'Base525', sortable: true },
        { name: '531 Base', label: '531 Base', field: 'Base531', sortable: true },
        { name: '541 Base', label: '541 Base', field: 'Base541', sortable: true },
        { name: '548 Base', label: '548 Base', field: 'Base548', sortable: true },
        { name: '557 Base', label: '557 Base', field: 'Base557', sortable: true },
      ],
      rows: [],
      selected: [],
      now: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData () {
      this.axios.get('/data').then(res => {
        this.rows = res.data.CPU
      }).catch(err => {
        console.log(err)
      })
    },
  }
}
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  max-height: 800px

  .q-table__top,
  //.q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: rgba(2, 92, 196, 0.84)
    color: white
    font-size: small

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
