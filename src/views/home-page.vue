<script setup>
import { ref } from 'vue'
import { getHomeData } from '@/api/homeData'

// 导入组件
// 充电桩饱和比例
import pieEcharts from '@/components/pie-echarts.vue'
// 流程监控
import lineEcharts from '@/components/line-echarts.vue'
// 充电数据统计
import barEcharts from '@/components/bar-echarts.vue'
// 异常监控
import rightBottomSvg from '@/components/right-bottom-svg.vue'
// 充电桩TOP4占比
import rightTopPanel from '@/components/right-top-panel.vue'
// 中心动画
import centerSvg from '@/components/center-svg.vue'
// 底部面板
import bottomPanel from '@/components/bottom-panel.vue'

// 模拟数据
import {
  chargingPileData,
  processMonitoringData,
  chargingStatisticsData,
  exceptionMonitoringData,
  dataAnalysisData,
  chargingTop4Data
} from './mock/homeData'
// 充电桩饱和比例
let chargingPile = ref(chargingPileData)

// 充电数据统计
let chargingStatistics = ref(chargingStatisticsData)

// 充电桩TOP4占比
let chargingTop4 = ref(chargingTop4Data)
let percentage = ref(0)

// 充电桩数据分析
let dataAnalysis = ref(dataAnalysisData)

// 异常监控
let exceptionMonitoring = ref(exceptionMonitoringData)

// 流程监控
let processMonitoring = ref(processMonitoringData)

// 获取数据
const homeData = async () => {
  const {
    data: { data }
  } = await getHomeData()
  chargingPile.value = data.chargingPile.data
  chargingStatistics.value = data.chargingStatistics.data
  chargingTop4.value = data.chargingTop4.data
  percentage.value = data.chargingTop4.totalPercentage
  dataAnalysis.value = data.dataAnalysis.data
  exceptionMonitoring.value = data.exceptionMonitoring.data
  processMonitoring.value = data.processMonitoring.data
}
homeData()
</script>

<template>
  <main class="screen-bg">
    <div class="header"></div>

    <!-- 左 -->
    <!-- 充电桩饱和比例 -->
    <div class="left-top">
      <pie-echarts :echartsData="chargingPile"></pie-echarts>
    </div>
    <!-- 流程监控 -->
    <div class="left-bottom">
      <line-echarts :echartsData="processMonitoring"></line-echarts>
    </div>

    <!-- 右 -->
    // 充电桩TOP4占比
    <div class="right-top">
      <right-top-panel :panelItems="chargingTop4" :percentage="percentage"></right-top-panel>
    </div>
    <!-- 充电数据统计 -->
    <div class="right-center">
      <bar-echarts :echartsData="chargingStatistics"></bar-echarts>
    </div>
    <!-- 异常监控 -->
    <div class="right-bottom">
      <right-bottom-svg :svgData="exceptionMonitoring"></right-bottom-svg>
    </div>

    <div class="center">
      <center-svg></center-svg>
    </div>

    <div class="bottom">
      <bottom-panel :panelItems="dataAnalysis"></bottom-panel>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.screen-bg {
  /* 定位 */
  position: absolute;
  width: 100%;
  height: 100%;

  /* 背景 */
  background-color: #070a3c;
  background-image: url(../assets/images/bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.header {
  /* 定位 */
  position: absolute;
  top: 21px;
  height: 56px;
  width: 100%;

  /* 背景 */
  background-image: url(../assets/images/bg_header.svg);
  background-repeat: no-repeat;
}

.left-top {
  /* 定位 */
  position: absolute;
  left: 16px;
  top: 116px;
  width: 536px;
  height: 443px;

  /* 背景 */
  background-image: url(../assets/images/bg_left-top.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.left-bottom {
  /* 定位 */
  position: absolute;
  left: 16px;
  bottom: 49px;
  width: 536px;
  height: 443px;

  /* 背景 */
  background-image: url(../assets/images/bg_left_bottom.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.right-top {
  position: absolute;
  right: 17px;
  top: 96px;
  width: 519px;
  height: 327px;

  background-image: url(../assets/images/bg_right_top.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.right-center {
  position: absolute;
  right: 17px;
  top: 443px;
  width: 519px;
  height: 327px;

  background-image: url(../assets/images/bg_right_center.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.right-bottom {
  position: absolute;
  right: 17px;
  bottom: 49px;
  width: 519px;
  height: 242px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(../assets/images/bg_right_bottom.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.center {
  position: absolute;
  right: 540px;
  bottom: 272px;
  width: 823px;
  height: 710px;
}

.bottom {
  position: absolute;
  right: 540px;
  bottom: 49px;
  width: 823px;
  height: 209px;

  background-image: url(../assets/images/bg_bottom.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
