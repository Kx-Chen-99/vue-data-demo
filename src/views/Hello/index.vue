<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn flat dense round @click="toggleLeftDrawer" icon="menu" />
        <q-btn flat no-caps no-wrap class="q-ml-xs">
          <q-img src="../../assets/spec.png" style="height: 28px; max-width: 28px" />
          <q-toolbar-title shrink class="text-weight-bold" style="width: 200px">SPEC数据中台</q-toolbar-title>
        </q-btn>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-toolbar-title class="text-weight-bold">欢迎，XXX！</q-toolbar-title>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2" :width="200">
      <q-tabs v-model="tab" vertical class="text-black" active-bg-color="grey-4">
        <q-tab name="home" label="首页概览" />
        <q-tab name="baobiao" label="数据报表" />
        <q-tab name="kanban" label="数据看板" />
        <q-tab name="server" label="数据服务" />
<!--        <q-tab name="project" label="项目管理" />-->
<!--        <q-tab name="asset" label="数据资产" />-->
<!--        <q-tab name="gather" label="数据集成" />-->
<!--        <q-tab name="develop" label="数据开发" />-->
      </q-tabs>
    </q-drawer>

    <q-page-container>
      <q-tab-panels v-model="tab" animated swipeable vertical>
        <q-tab-panel name="home">
          <overview />
        </q-tab-panel>
        <q-tab-panel name="baobiao">
          <baobiao />
        </q-tab-panel>
        <q-tab-panel name="kanban">
          <kanban />
        </q-tab-panel>
        <q-tab-panel name="server">
          <server />
        </q-tab-panel>
      </q-tab-panels>
    </q-page-container>
  </q-layout>
</template>

<script>
import baobiao from "../Baobiao/baobiao";
import kanban from "../Kanban/kanban";
import server from "../Server/server";
import overview from "./overview";

export default {
  name: "hello",
  components: {
    server,
    baobiao,
    kanban,
    overview
  },
  data () {
    return {
      leftDrawerOpen: true,
      tab: 'home'
    }
  },
  // mounted () {
  // },
  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
}
</script>

<style lang="sass">
</style>
