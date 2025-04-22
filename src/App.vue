<script setup>
import adaptationScreen from '@/hooks/adaptationScreen'
let option = {
  targetX: 1920,
  targetY: 1080,
  targetRatio: 16 / 9
}
adaptationScreen(option)
</script>

<template>
  <!-- 路由出口 -->
  <RouterView />
</template>

<style></style>
