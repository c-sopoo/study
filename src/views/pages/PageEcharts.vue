<template>
  <div class="charts">
    <el-card>
      <el-tabs v-model="activeName">
        <el-tab-pane name='first' label='折线图' :lazy='true'>
          <el-card shadow="hover">
            <ve-line :data="chartData"></ve-line>
          </el-card>
        </el-tab-pane>

        <el-tab-pane name='second' label='雷达图' :lazy='true'>
          <el-card shadow="hover">
            <ve-radar :data="chartData2"></ve-radar>
          </el-card>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
import VeRadar from 'v-charts/lib/radar.common'
export default {
  data() {
    return {
      activeName: 'first',
      chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        },
        chartData2: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
    }
  },
  components: {
    VeLine,
    VeRadar
  }
}
</script>

<style>

</style>