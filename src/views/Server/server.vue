<template>
  <q-card>
<!--    <detail />-->
    <q-tabs dense v-model="tab" class="text-black bg-grey-3" align="justify" narrow-indicator>
      <q-tab name="detail" label="CPU对比分析报告" />
      <q-tab name="ml" label="CPU综合性能得分预测" />
<!--      <q-btn-dropdown auto-close stretch flat label="其他">-->
<!--        <q-list dense>-->
<!--          <q-item clickable @click="tab = 'movies'">-->
<!--            <q-item-section>Movies</q-item-section>-->
<!--          </q-item>-->
<!--          <q-item clickable @click="tab = 'photos'">-->
<!--            <q-item-section>Photos</q-item-section>-->
<!--          </q-item>-->
<!--        </q-list>-->
<!--      </q-btn-dropdown>-->
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
      data: ''
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData () {
      this.axios.get('/data').then(res => {
        this.data = res.data.CPU
        // console.log(this.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
