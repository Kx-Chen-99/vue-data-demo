<template>
  <div class="row">
    <div class="col-4 q-pr-md">
      <q-card flat bordered>
        <q-card-section class="text-center">
          <div class="q-pb-sm text-body1">{{ showItem.Professor+ ' ' + showItem.System }}</div>
          <div class="q-pb-sm text-body1">综合性能排名</div>
          <q-btn round color="negative" :label="num" />
          <div class="q-pt-sm text-body1">领先99.7%的CPU</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-list padding class="rounded-borders">
            <q-item>
              <q-item-section>CPU系列</q-item-section>
              <q-item-section side>{{ showItem.Professor }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>CPU主频</q-item-section>
              <q-item-section side>2.8GHz</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Cores</q-item-section>
              <q-item-section side>64Cores</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Chips</q-item-section>
              <q-item-section side>2Chips</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>更新时间</q-item-section>
              <q-item-section side>20年08月</q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
    <div class="col q-pr-sm">
      <div v-for="(item,i) in list" :key="item.System" class="q-pb-xs">
        <q-list dense padding class="rounded-borders bg-red" v-if="item.Professor === 'AMD'">
          <q-item clickable v-ripple @click="show(item,i)">
            <q-item-section>{{item.Professor + ' ' + item.System}}</q-item-section>
          </q-item>
        </q-list>
        <q-list dense padding class="rounded-borders" v-else><q-item /></q-list>
      </div>
    </div>
    <q-separator vertical size="4px" />
    <div class="col q-pl-sm">
      <div v-for="(item,i) in list" :key="item.System" class="q-pb-xs">
        <q-list dense padding class="rounded-borders bg-blue" v-if="item.Professor === 'Intel'">
          <q-item clickable v-ripple @click="show(item,i)">
            <q-item-section>{{item.Professor + ' ' + item.System}}</q-item-section>
          </q-item>
        </q-list>
        <q-list dense padding class="rounded-borders" v-else><q-item /></q-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CPUComp",
  data () {
    return {
      list: '',
      showItem: '',
      num: 1,
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData () {
      this.axios.get('/data').then(res => {
        this.list = res.data.CPU.slice(0,10)
        this.showItem = res.data.CPU[0]
      }).catch(err => {
        console.log(err)
      })
    },
    show (item,i) {
      this.showItem = item
      this.num = i+1
    }
  }
}
</script>
