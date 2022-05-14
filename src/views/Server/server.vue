<template>
  <q-card>
    <detail />
<!--    <q-tabs dense v-model="tab" class="text-black bg-grey-3" align="justify" narrow-indicator>-->
<!--      <q-tab name="detail" label="CPU得分(细分)对比" />-->
<!--      <q-tab name="list" label="数据服务还能放什么" />-->
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
<!--    </q-tabs>-->
<!--    <q-tab-panels v-model="tab">-->
<!--      <q-tab-panel name="detail">-->
<!--        <detail />-->
<!--      </q-tab-panel>-->
<!--      <q-tab-panel name="list">-->
<!--        111-->
<!--      </q-tab-panel>-->
<!--    </q-tab-panels>-->
  </q-card>
</template>

<script>
import detail from "./detail";

export default {
  name: "server",
  components: {
    detail,
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
