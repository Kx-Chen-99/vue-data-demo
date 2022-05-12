<template>
  <q-card>
    <q-tabs v-model="tab" class="text-black bg-grey-3" align="left" narrow-indicator dense>
      <q-tab name="CPUComp" label="CPU综合性能得分Top10" />
      <q-tab name="CPUSingle" label="CPU单核性能得分Top10" />
      <q-tab name="CPUMult" label="CPU多核性能得分Top10" />
      <q-tab name="pie" label="随便画了个饼" />
      <q-btn-dropdown auto-close stretch flat label="其他">
        <q-list >
          <q-item clickable @click="tab = 'CPUComp'">
            <q-item-section>综合性能</q-item-section>
          </q-item>
          <q-item clickable @click="tab = 'CPUSingle'">
            <q-item-section>单核性能</q-item-section>
          </q-item>
          <q-item clickable @click="tab = 'CPUMult'">
            <q-item-section>多核性能</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-tabs>
    <q-tab-panels v-model="tab">
      <q-tab-panel name="CPUComp">
        <c-p-u-comp />
      </q-tab-panel>
      <q-tab-panel name="CPUSingle">
        <c-p-u-single />
      </q-tab-panel>
      <q-tab-panel name="CPUMult">
        <c-p-u-mult />
      </q-tab-panel>
      <q-tab-panel name="pie">
        <sponsor-pie />
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import sponsorPie from "./components/sponsorPie.vue";
import CPUComp from "./CPUTop10/CPUComp";
import CPUSingle from "./CPUTop10/CPUSingle";
import CPUMult from "./CPUTop10/CPUMult";

export default {
  name: "kanban",
  components: {
    CPUSingle,
    CPUComp,
    CPUMult,
    sponsorPie
  },
  data () {
    return {
      tab: 'CPUComp',
      data: '',
      // CPUbtn: 'comp',
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData () {
      this.axios.get('/data').then(res => {
        this.data = res.data.CPU
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="sass">
.link-color
  color: white
  background: #F2C037
</style>
