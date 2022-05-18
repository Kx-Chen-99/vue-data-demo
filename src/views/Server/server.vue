<template>
  <q-card>
<!--    <detail />-->
    <q-tabs dense v-model="tab" class="text-black bg-grey-3" align="justify" narrow-indicator>
      <q-tab name="detail" label="CPU对比分析报告" />
      <q-tab name="ml" label="CPU综合性能得分预测" />
    </q-tabs>
    <q-tab-panels v-model="tab">
      <q-tab-panel name="detail">
        <detail />
      </q-tab-panel>
      <q-tab-panel name="ml">
        <machine-learning />
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import detail from "./detail";
import machineLearning from "./machineLearning";

export default {
  name: "server",
  components: {
    detail,
    machineLearning,
  },
  data () {
    return {
      tab: 'detail',
    }
  },
}
</script>
