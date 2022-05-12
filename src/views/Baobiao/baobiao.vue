<template>
  <q-card>
    <q-tabs dense v-model="tab" class="text-black bg-grey-3" align="justify" narrow-indicator>
      <q-tab name="topList" label="各标准得分Top10" />
      <q-tab name="list" label="数据报表还能放什么" />
      <q-btn-dropdown auto-close stretch flat label="其他">
        <q-list dense>
          <q-item clickable @click="tab = 'movies'">
            <q-item-section>Movies</q-item-section>
          </q-item>
          <q-item clickable @click="tab = 'photos'">
            <q-item-section>Photos</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-tabs>
    <q-tab-panels v-model="tab">
      <q-tab-panel name="topList">
        <top-list />
      </q-tab-panel>
      <q-tab-panel name="list">
        111
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import topList from "./components/topList";

export default {
  name: "baobiao",
  components: {
    topList
  },
  data () {
    return {
      tab: 'topList',
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
