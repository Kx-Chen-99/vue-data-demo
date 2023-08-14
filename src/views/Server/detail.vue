<template>
  <div>
    <q-stepper v-model="step" color="primary" animated>
      <q-step :name="1" title="简介" :done="step > 1">
        <div class="text-center text-h5">CPU对比分析报告</div>
        <div class="text-center text-body2 text-grey q-pb-xs">基于SPEC CPU2017提供的CPU数值化对比，并生成CPU对比报告</div>
        <q-separator />
        <div class="q-pa-md q-gutter-y-xs text-body1">
          <div>使用此功能，你可以：</div>
          <div>1、根据需求查找CPU</div>
          <div>2、对多款CPU进行数值化对比</div>
          <div>3、生成数据分析报告</div>
        </div>
        <div class="q-pa-md q-gutter-y-xs text-body1">
          <div>简易操作指南：</div>
          <div>1、选择Benchmark：SPEC CPU2017的8个测评标准</div>
          <div>2、选择CPU：请至少选择2款CPU进行数据对比分析</div>
          <div>3、生成分析报告：可以查看并下载</div>
        </div>
        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue" class="flex justify-end"/>
        </q-stepper-navigation>
      </q-step>

      <q-step :name="2" title="选择Benchmark" :done="step > 2">
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
          <q-btn v-if="benchmark" @click="step = 3" color="primary" label="Continue"/>
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="选择CPU" :done="step > 3">
        <q-table
          row-key="processor"
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
          <q-btn v-if="selected.length > 1" @click="step = 4" color="primary" label="Continue" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="4" title="生成分析报告">
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
          <q-btn @click="step = 4" color="primary" label="Download" />
          <q-btn flat @click="step = 3" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import moment from "moment";
import stackedLine from "./components/stackedLine.vue";

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
      ],
      filter: '',
      columns: [
        { name: 'processor', label: 'CPU', align: 'left',field: 'processor', sortable: true },
        { name: 'cores', label: 'cores', field: 'cores', sortable: true },
        { name: 'chips', label: 'chips', field: 'chips', sortable: true },
        { name: 'firstLevelCache', label: '1st Level Cache', field: 'firstLevelCache', sortable: true },
        { name: 'secondLevelCache', label: '2nd Level Cache', field: 'secondLevelCache', sortable: true },
        { name: 'thirdLevelCache', label: '3rd Level Cache', field: 'thirdLevelCache', sortable: true },
        { name: 'memory', label: 'memory', field: 'memory', sortable: true },
        { name: 'storage', label: 'storage', field: 'storage', sortable: true },
        { name: 'baseline', label: 'base', field: 'baseline', sortable: true },
        { name: '500 Base', label: '500 Base', field: 'base500', sortable: true },
        { name: '502 Base', label: '502 Base', field: 'base502', sortable: true },
        { name: '505 Base', label: '505 Base', field: 'base505', sortable: true },
        { name: '520 Base', label: '520 Base', field: 'base520', sortable: true },
        { name: '523 Base', label: '523 Base', field: 'base523', sortable: true },
        { name: '525 Base', label: '525 Base', field: 'base525', sortable: true },
        { name: '531 Base', label: '531 Base', field: 'base531', sortable: true },
        { name: '541 Base', label: '541 Base', field: 'base541', sortable: true },
        { name: '548 Base', label: '548 Base', field: 'base548', sortable: true },
        { name: '557 Base', label: '557 Base', field: 'base557', sortable: true },
      ],
      columns1: [
        { name: 'processor', label: 'CPU', align: 'left',field: 'processor', sortable: true },
        { name: 'cores', label: 'cores', field: 'cores', sortable: true },
        { name: 'chips', label: 'chips', field: 'chips', sortable: true },
        { name: 'firstLevelCache', label: '1st Level Cache', field: 'firstLevelCache', sortable: true },
        { name: 'secondLevelCache', label: '2nd Level Cache', field: 'secondLevelCache', sortable: true },
        { name: 'thirdLevelCache', label: '3rd Level Cache', field: 'thirdLevelCache', sortable: true },
        { name: 'memory', label: 'memory', field: 'memory', sortable: true },
        { name: 'storage', label: 'storage', field: 'storage', sortable: true },
      ],
      columns2: [
        { name: 'processor', label: 'CPU', align: 'left',field: 'processor', sortable: true },
        { name: 'baseline', label: 'base', field: 'baseline', sortable: true },
        { name: '500 Base', label: '500 Base', field: 'base500', sortable: true },
        { name: '502 Base', label: '502 Base', field: 'base502', sortable: true },
        { name: '505 Base', label: '505 Base', field: 'base505', sortable: true },
        { name: '520 Base', label: '520 Base', field: 'base520', sortable: true },
        { name: '523 Base', label: '523 Base', field: 'base523', sortable: true },
        { name: '525 Base', label: '525 Base', field: 'base525', sortable: true },
        { name: '531 Base', label: '531 Base', field: 'base531', sortable: true },
        { name: '541 Base', label: '541 Base', field: 'base541', sortable: true },
        { name: '548 Base', label: '548 Base', field: 'base548', sortable: true },
        { name: '557 Base', label: '557 Base', field: 'base557', sortable: true },
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
      this.axios.get('/rint2017').then(res => {
        this.rows = res.data
      }).catch(err => {
        console.log(err)
      })
    },
  }
}
</script>

<!-- <style lang="scss" scoped>
.my-sticky-header-table
  /* height or max-height is important */
  max-height: 800px;

  .q-table__top,
  //.q-table__bottom,
  thead tr:first-child th {
    /* bg color is important for th; just specify one */
    background-color: rgba(2, 92, 196, 0.84);
    color: white;
    font-size: small;
  }

  thead tr th {
    position: sticky;
    z-index: 1;
  }
  thead tr:first-child th {
    top: 0;
  }

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th {
    /* height of all previous header rows */
    top: 48px;
  }
</style> -->
