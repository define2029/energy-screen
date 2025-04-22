<script setup>
import { ref, onMounted, watch } from 'vue'
import useEchart from '@/hooks/useEcharts'

const echartsContainer = ref(null)
const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  },
  echartsData: Array
})

watch(
  () => props.echartsData,
  (newV) => {
    setupEchart(newV)
  }
)

onMounted(() => {
  setupEchart(props.echartsData)
})

let hyEchart = null
let setupEchart = (echartsData) => {
  if (!hyEchart) {
    hyEchart = useEchart(echartsContainer.value)
  }
  let option = getOption(echartsData)
  hyEchart.setOption(option)
}
let getOption = (optionData = []) => {
  // 处理数据
  let categoryName = optionData.map((item) => item.name)
  let categoryData = optionData.map((item) => item.value)

  let option = {
    grid: {
      left: '5%',
      right: '5%',
      top: '30%',
      bottom: '5%',
      containLabel: true // grid 区域是否包含坐标轴的刻度标签
    },
    tooltip: {},
    xAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: '#42A4FF'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: 'white'
      },

      data: categoryName
    },
    yAxis: {
      name: '个',
      nameTextStyle: {
        color: 'white',
        fontSize: 13
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#42A4FF'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#42A4FF'
        }
      },
      axisLabel: {
        color: 'white'
      }
    },
    series: [
      {
        name: '销量',
        type: 'bar',
        barWidth: 17,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#01B1FF' // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#033BFF' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        },
        data: categoryData
      }
    ]
  }
  return option
}
</script>

<template>
  <div ref="echartsContainer" :style="{ width: width, height: height }"></div>
</template>

<style lang="scss" scoped></style>
