<template>
  <div>
    <q-stepper v-model="step" color="primary" animated>
      <q-step :name="1" title="简介" :done="step > 1">
        <div class="text-center text-h5">CPU综合性能得分预测</div>
        <div class="text-center text-body2 text-grey q-pb-xs">在CPU某个测评标准下，若测试程序强制中断，基于已测试完成的部分任务分数预测该基准下的总分数
        </div>
        <q-separator />
        <div class="q-pa-md q-gutter-y-xs text-body1">
          <div>使用此功能，你可以：</div>
          <div>1、选择某个测评标准作为预测基准分数</div>
          <div>2、通过提供不完整的分数序列预测总体分数</div>
          <div>3、与同一基准下的不同CPU进行对比</div>
        </div>
        <div class="q-pa-md q-gutter-y-xs text-body1">
          <div>简易操作指南：</div>
          <div>1、选择Benchmark：SPEC CPU2017的8个测评标准</div>
          <div>2、输入基准得分：请至少输入一个基准得分，输入的得分越具体，预测结果越准确</div>
          <div>3、生成预测报告：可以查看并下载</div>
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
          <q-btn v-if="benchmark" @click="step = 3" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="输入基准得分" :done="step > 3">
        <div class="q-pb-xs text-center text-h5">各基准含义</div>
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
        <div class="q-pt-lg q-pb-xs text-center text-h5">请输入各基准测试得分</div>
        <div>
          <div class="row items-center q-gutter-x-md q-py-sm">
            <div class="col-1">500 Base：</div>
            <div class="col q-pr-lg"><q-input dense outlined v-model="baseInfo.base500" label="500 Base" /></div>
            <div class="col-1">502 Base：</div>
            <div class="col"><q-input dense outlined v-model="baseInfo.base502" label="502 Base" /></div>
          </div>
          <div class="row items-center q-gutter-x-md q-py-sm">
            <div class="col-1">505 Base：</div>
            <div class="col q-pr-lg"><q-input dense outlined v-model="baseInfo.base505" label="505 Base" /></div>
            <div class="col-1">520 Base：</div>
            <div class="col"><q-input dense outlined v-model="baseInfo.base520" label="520 Base" /></div>
          </div>
          <div class="row items-center q-gutter-x-md q-py-sm">
            <div class="col-1">523 Base：</div>
            <div class="col q-pr-lg"><q-input dense outlined v-model="baseInfo.base523" label="523 Base" /></div>
            <div class="col-1">525 Base：</div>
            <div class="col"><q-input dense outlined v-model="baseInfo.base525" label="525 Base" /></div>
          </div>
          <div class="row items-center q-gutter-x-md q-py-sm">
            <div class="col-1">531 Base：</div>
            <div class="col q-pr-lg"><q-input dense outlined v-model="baseInfo.base531" label="531 Base" /></div>
            <div class="col-1">541 Base：</div>
            <div class="col"><q-input dense outlined v-model="baseInfo.base541" label="541 Base" /></div>
          </div>
          <div class="row items-center q-gutter-x-md q-py-sm">
            <div class="col-1">548 Base：</div>
            <div class="col q-pr-lg"><q-input dense outlined v-model="baseInfo.base548" label="548 Base" /></div>
            <div class="col-1">557 Base：</div>
            <div class="col"><q-input dense outlined v-model="baseInfo.base557" label="557 Base" /></div>
          </div>
        </div>
        <q-stepper-navigation>
          <q-btn @click="goPredict" color="primary" label="Continue" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="4" title="生成预测结果">
        <div class="text-center text-h4 q-pb-md">CPU得分预测</div>
        <div class="row q-pb-lg">
          <div class="col">CPU测评基准：{{benchmark}}</div>
          <div class="col">报告生成时间：{{now}}</div>
        </div>
        <div class="q-pt-lg text-center text-h5">预测情况</div>
        <q-list class="text-center q-my-md" separator bordered dense>
          <q-item>
            <q-item-section>500 Base</q-item-section>
            <q-item-section>502 Base</q-item-section>
            <q-item-section>505 Base</q-item-section>
            <q-item-section>520 Base</q-item-section>
            <q-item-section>523 Base</q-item-section>
            <q-item-section>525 Base</q-item-section>
            <q-item-section>531 Base</q-item-section>
            <q-item-section>541 Base</q-item-section>
            <q-item-section>548 Base</q-item-section>
            <q-item-section>557 Base</q-item-section>
            <q-item-section class="bg-blue">Baseline</q-item-section>
          </q-item>
          <q-item>
            <q-item-section>{{ this.baseInfo.base500 }}</q-item-section>
            <q-item-section>{{ this.baseInfo.base502 }}</q-item-section>
            <q-item-section>{{ this.baseInfo.base505 }}</q-item-section>
            <q-item-section>{{ this.baseInfo.base520 }}</q-item-section>
            <q-item-section>{{ this.baseInfo.base523 }}</q-item-section>
            <q-item-section>{{ this.baseInfo.base525 }}</q-item-section>
            <q-item-section>{{ this.baseInfo.base531 }}</q-item-section>
            <q-item-section>{{ this.baseInfo.base541 }}</q-item-section>
            <q-item-section>{{ this.baseInfo.base548 }}</q-item-section>
            <q-item-section>{{ this.baseInfo.base557 }}</q-item-section>
            <q-item-section>{{ this.baseline }}</q-item-section>
          </q-item>
        </q-list>
        <div class="q-pt-lg q-pb-md text-center text-h5">得分相近的CPU</div>
        <q-table
          flat
          dense
          bordered
          :rows="CPUs"
          :columns="columns1"
          row-key="processor"
          separator="vertical"
          class="q-mb-lg"
        />
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

export default {
  name: 'ml',
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
      baseInfo: { base500: 0, base502: 0, base505: 0, base520: 0, base523: 0, base525: 0, base531: 0, base541: 0, base548: 0, base557: 0 },
      now: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      baseline: 0,
      columns1: [
        { name: 'processor', label: 'CPU', align: 'left',field: 'processor', sortable: true },
        { name: 'baseline', label: 'base', field: 'baseline', sortable: true },
        { name: 'processorFre', label: 'processorFre', field: 'processorFre', sortable: true },
        { name: 'cores', label: 'cores', field: 'cores', sortable: true },
        { name: 'chips', label: 'chips', field: 'chips', sortable: true },
        { name: 'firstLevelCache', label: '1st Level Cache', field: 'firstLevelCache', sortable: true },
        { name: 'secondLevelCache', label: '2nd Level Cache', field: 'secondLevelCache', sortable: true },
        { name: 'thirdLevelCache', label: '3rd Level Cache', field: 'thirdLevelCache', sortable: true },
        { name: 'memory', label: 'memory', field: 'memory', sortable: true },
        // { name: 'storage', label: 'storage', field: 'storage', sortable: true },
      ],
      CPUs: [],
    }
  },
  methods: {
    goPredict () {
      this.step = 4
      this.axios.post('/ml', this.baseInfo).then(res => {
        this.baseline = res.data
      })
      this.axios.post('/predict', this.baseInfo).then(res => {
        this.CPUs = res.data
      })
    }
  }
}
</script>
