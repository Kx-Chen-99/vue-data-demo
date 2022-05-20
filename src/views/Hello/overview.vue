<template>
  <div>
    <q-card class="q-pa-md text-body1" bordered flat>
      上次同步数据时间：{{ now }} 04:00:00
      <q-icon name="autorenew" color="grey" size="sm"/>
    </q-card>
    <div class="row q-gutter-x-md justify-between q-py-md">
      <div class="col">
        <q-card class="q-pa-lg" bordered flat>
          <div class="row justify-between flex-center text-body1">
            <q-icon size="70px" name="leaderboard" color="blue-5" />
            <div class="q-gutter-y-xs">
              <div class="q-pt-sm ">数据源总数</div>
              <div class="text-right">5</div>
            </div>
          </div>
        </q-card>
      </div>
      <div class="col">
        <q-card class="q-pa-lg" bordered flat>
          <div class="row justify-between flex-center text-body1">
            <q-icon size="70px" name="description" color="teal-5" />
            <div class="q-gutter-y-xs">
              <div class="q-pt-sm">数据服务数</div>
              <div class="text-right">2</div>
            </div>
          </div>
        </q-card>
      </div>
      <div class="col">
        <q-card class="q-pa-lg" bordered flat>
          <div class="row justify-between flex-center text-body1">
            <q-icon size="70px" name="trending_up" color="red-5" />
            <div class="q-gutter-y-xs">
              <div class="q-pt-sm">API接口总数</div>
              <div class="text-right">21</div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <q-card class="q-pa-md text-body1" bordered flat>
      <q-table
        title="数据报告"
        :rows="rows"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="name" :props="props">
              {{ props.row.name }}
            </q-td>
            <q-td key="time" :props="props">
              {{ props.row.time }}
            </q-td>
            <q-td key="done" :props="props">
              <div class="justify-end flex">
                <q-btn label="查看" flat color="blue" />
                <q-btn label="下载" flat color="blue" />
                <q-btn label="删除" flat color="grey" />
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-card>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "overview",
  data () {
    return {
      now: moment(new Date()).format('YYYY-MM-DD'),
      columns: [
        { name: 'name', label: '报告名称', align: 'left', required: true, sortable: true, field: row => row.name, },
        { name: 'time', label: '报告生成时间', align: 'left', field: 'time', sortable: true },
        { name: 'done', label: '操作', align: 'center', field: 'done' },
      ],
      rows: [
        { name: 'Intel CPU综合性能前 5 对比报告', time: '2022-05-07 14:36:22' },
        { name: 'AMD CPU综合性能前 5 对比报告', time: '2022-05-07 14:41:56' },
        { name: 'CPU综合性能得分预测', time: '2022-05-08 20:19:30' }
      ],
    }
  }
}
</script>
