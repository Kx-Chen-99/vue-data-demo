<template>
  <div class="row items-center">
    <div class="col-5 q-pr-md">
      <q-card flat bordered>
        <q-card-section class="text-center">
          <div class="q-pb-sm text-body1">{{ showItem.processor }}</div>
          <div class="q-pb-sm text-body1">综合性能排名</div>
          <q-btn round color="negative" :label="num" />
          <div class="q-pt-sm text-body1">领先{{ showItem.percentage }}%的CPU</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-list padding class="rounded-borders">
            <q-item>
              <q-item-section>CPU系列</q-item-section>
              <q-item-section side>{{ showItem.processor }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>CPU主频</q-item-section>
              <q-item-section side>{{ showItem.processorFre }}MHz</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Cores</q-item-section>
              <q-item-section side>{{ showItem.cores }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Chips</q-item-section>
              <q-item-section side>{{ showItem.chips }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Memory</q-item-section>
              <q-item-section side>{{ showItem.memory }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>一级缓存</q-item-section>
              <q-item-section side>{{ showItem.firstLevelCache }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>二级缓存</q-item-section>
              <q-item-section side>{{ showItem.secondLevelCache }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>三级缓存</q-item-section>
              <q-item-section side>{{ showItem.thirdLevelCache }}</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>更新时间</q-item-section>
              <q-item-section side>{{ showItem.updatedTime }}</q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
    <q-virtual-scroll
      style="max-height: 700px; width: 100%;"
      :items="heavyList"
      separator
      class="col"
    >
      <template v-slot="{ item, index }">
      <div class="row">
        <div class="col q-pr-sm" :key="index">
          <q-list dense padding class="rounded-borders bg-red q-my-xs" v-if="item.isIntel === 0">
            <q-item clickable v-ripple @click="show(item,index)">
              <q-item-section>{{ item.processor }}</q-item-section>
            </q-item>
          </q-list>
          <q-list dense padding class="rounded-borders" v-else><q-item /></q-list>
        </div>
        <q-separator vertical size="4px" />
        <div class="col q-pl-sm" :key="index">
          <q-list dense padding class="rounded-borders bg-blue q-my-xs" v-if="item.isIntel === 1">
            <q-item clickable v-ripple @click="show(item,index)">
              <q-item-section>{{ item.processor }}</q-item-section>
            </q-item>
          </q-list>
          <q-list dense padding class="rounded-borders" v-else><q-item /></q-list>
        </div>
      </div>
      </template>
    </q-virtual-scroll>
  </div>
</template>

<script>
export default {
  name: "CPUComp",
  data () {
    return {
      showItem: '',
      num: 1,
      heavyList: '',
      // long: 0,
      // percentage: 0,
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData () {
      this.axios.get('/percentage').then(res => {
        console.log(res.data)
        this.heavyList = res.data
        this.showItem = res.data[0]
        // this.showItem = res.data.CPU[0]
        // this.long = res.data.CPU.length
        // this.percent = (1 - 1 / res.data.CPU.length) * 100
      }).catch(err => {
        console.log(err)
      })
    },
    show (item,i) {
      this.showItem = item
      this.num = i+1
      // this.percent = (1 - this.num / this.long) * 100
    }
  }
}
</script>
