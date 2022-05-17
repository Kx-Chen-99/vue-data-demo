<template>
  <q-card>
    <q-tabs dense v-model="tab" class="text-black bg-grey-3" align="justify" narrow-indicator>
      <q-tab name="cpu" label="CPU Top10" />
      <q-tab name="power" label="Power Top10" />
      <q-tab name="jvm" label="JVM Top10" />
    </q-tabs>
    <q-tab-panels v-model="tab">
      <q-tab-panel name="cpu">
        <q-list bordered padding class="rounded-borders">
          <q-item clickable v-ripple v-for="item in cpuData" :key="item.processor">
            <q-item-section>{{item.processor}}</q-item-section>
            <q-item-section>{{item.supplier}}</q-item-section>
            <q-item-section side>{{item.baseline}}</q-item-section>
          </q-item>
        </q-list>
      </q-tab-panel>
      <q-tab-panel name="power">
        <q-list bordered padding class="rounded-borders">
          <q-item clickable v-ripple v-for="item in powerData" :key="item.processor">
            <q-item-section>{{item.processor}}</q-item-section>
            <q-item-section>{{item.jvmVendor}}</q-item-section>
            <q-item-section>{{item.jvmVersion}}</q-item-section>
            <q-item-section side>{{item.result}}</q-item-section>
          </q-item>
        </q-list>
      </q-tab-panel>
      <q-tab-panel name="jvm">
        <q-list bordered padding class="rounded-borders">
          <q-item clickable v-ripple v-for="item in jvmData" :key="item.processor">
            <q-item-section>{{item.processor}}</q-item-section>
            <q-item-section>{{item.jvmVendor}}</q-item-section>
            <q-item-section>{{item.jvm}}</q-item-section>
            <q-item-section side>{{item.scores}}</q-item-section>
          </q-item>
        </q-list>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>

export default {
  name: "baobiao",
  data () {
    return {
      tab: 'cpu',
      cpuData: [],
      powerData: [],
      jvmData: [],
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData () {
      this.axios.get('/get/cputop').then(res => {
        this.cpuData = res.data
      })
      this.axios.get('/get/powertop').then(res => {
        this.powerData = res.data
      })
      this.axios.get('/get/jvmtop').then(res => {
        this.jvmData = res.data
      })
    }
  }
}
</script>
