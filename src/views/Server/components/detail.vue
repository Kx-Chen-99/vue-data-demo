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
          <q-btn @click="step = 2" color="primary" label="Continue" class="flex justify-end"/>
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
          <template v-slot:top-selection>
            <q-input bg-color="" dark standout dense v-model="filter" placeholder="Search">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
        </q-table>
        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="查看分析报告">
        This step won't show up because it is disabled.
        <q-stepper-navigation>
          <q-btn @click="step = 4" color="primary" label="Continue" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
      <q-step :name="4" title="Create an ad">
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.
        <q-stepper-navigation>
          <q-btn color="primary" label="Finish" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
export default {
  name: "detail",
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
        { name: 'Baseline', label: 'Base', field: 'Baseline', sortable: true },
      ],
      rows: [],
      selected: [],
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
    // getSelectedString () {
    //   return this.selected.value.length === 0 ? '' : `${this.selected.value.length} record${this.selected.value.length > 1 ? 's' : ''} selected of ${this.rows.length}`
    // }
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
