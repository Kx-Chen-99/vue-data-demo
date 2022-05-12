<template>
  <div class="row">
<!--    cint2017-->
    <q-list dense bordered padding class="rounded-borders q-ma-xs" style="width: 49%;">
      <div class="q-pl-md text-center text-h6 q-pb-xs">2017 Integer Speed 得分 Top10</div>
      <q-separator />
      <q-item clickable v-ripple v-for="item in list" :key="item.System">
        <q-item-section>{{item.System}}</q-item-section>
        <q-item-section side>{{item.Result}}</q-item-section>
      </q-item>
    </q-list>
<!--    cfp2017-->
    <q-list dense bordered padding class="rounded-borders q-ma-xs" style="width: 49%;">
      <div class="q-pl-md text-center text-h6 q-pb-xs">2017 Floating Point Speed 得分 Top10</div>
      <q-separator />
      <q-item clickable v-ripple v-for="item in list" :key="item.System">
        <q-item-section>{{item.System}}</q-item-section>
        <q-item-section side>{{item.Result}}</q-item-section>
      </q-item>
    </q-list>
<!--    rint2017-->
    <q-list dense bordered padding class="rounded-borders q-ma-xs" style="width: 49%;">
      <div class="q-pl-md text-center text-h6 q-pb-xs">2017 Integer Rate 得分 Top10</div>
      <q-separator />
      <q-item clickable v-ripple v-for="item in list" :key="item.System">
        <q-item-section>{{item.System}}</q-item-section>
        <q-item-section side>{{item.Result}}</q-item-section>
      </q-item>
    </q-list>
<!--    rfp2017-->
    <q-list dense bordered padding class="rounded-borders q-ma-xs" style="width: 49%;">
      <div class="q-pl-md text-center text-h6 q-pb-xs">2017 Floating Point Rate 得分 Top10</div>
      <q-separator />
      <q-item clickable v-ripple v-for="item in list" :key="item.System">
        <q-item-section>{{item.System}}</q-item-section>
        <q-item-section side>{{item.Result}}</q-item-section>
      </q-item>
    </q-list>
<!--    cint2006-->
    <q-list dense bordered padding class="rounded-borders q-ma-xs" style="width: 49%;">
      <div class="q-pl-md text-center text-h6 q-pb-xs">2006 Integer Speed 得分 Top10</div>
      <q-separator />
      <q-item clickable v-ripple v-for="item in list" :key="item.System">
        <q-item-section>{{item.System}}</q-item-section>
        <q-item-section side>{{item.Result}}</q-item-section>
      </q-item>
    </q-list>
<!--    cfp2006-->
    <q-list dense bordered padding class="rounded-borders q-ma-xs" style="width: 49%;">
      <div class="q-pl-md text-center text-h6 q-pb-xs">2006 Floating Point Speed 得分 Top10</div>
      <q-separator />
      <q-item clickable v-ripple v-for="item in list" :key="item.System">
        <q-item-section>{{item.System}}</q-item-section>
        <q-item-section side>{{item.Result}}</q-item-section>
      </q-item>
    </q-list>
<!--    rint2006-->
    <q-list dense bordered padding class="rounded-borders q-ma-xs" style="width: 49%;">
      <div class="q-pl-md text-center text-h6 q-pb-xs">2006 Integer Rate 得分 Top10</div>
      <q-separator />
      <q-item clickable v-ripple v-for="item in list" :key="item.System">
        <q-item-section>{{item.System}}</q-item-section>
        <q-item-section side>{{item.Result}}</q-item-section>
      </q-item>
    </q-list>
<!--    rfp2006-->
    <q-list dense bordered padding class="rounded-borders q-ma-xs" style="width: 49%;">
      <div class="q-pl-md text-center text-h6 q-pb-xs">2006 Floating Point Rate 得分 Top10</div>
      <q-separator />
      <q-item clickable v-ripple v-for="item in list" :key="item.System">
        <q-item-section>{{item.System}}</q-item-section>
        <q-item-section side>{{item.Result}}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: "topList",
  data () {
    return {
      list: [
        {"System": "Fujitsu SPARC M12-2S", "Result": 2610},
        {"System": "BullSequana S1600 ( Intel Xeon Platinum 8276M )", "Result": 2280},
        {"System": "IBM Power E1080 (3.55 - 4 GHz, 120 core, AIX)", "Result": 2170},
        {"System": "Superdome Flex 280 (2.90 GHz, Intel Xeon Platinum 8380H)", "Result": 1620},
        {"System": "Superdome Flex 280 (2.90 GHz, Intel Xeon Platinum 8380HL)", "Result": 1540},
        {"System": "Superdome Flex 280 (2.60 GHz, Intel Xeon Platinum 8376H)", "Result": 1440},
        {"System": "Superdome Flex 280 (2.60 GHz, Intel Xeon Platinum 8376HL)", "Result": 1440},
        {"System": "Inspur TS860M5 (Intel Xeon Platinum 8280)", "Result": 1440},
        {"System": "Fujitsu SPARC M12-2S", "Result": 1420},
        {"System": "xFusion KunLun 9008 V5 (Intel Xeon Platinum 8280) 1390", "Result": 1390},
      ]
    }
  }
}
</script>
