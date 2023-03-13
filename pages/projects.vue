<script setup lang="ts">
useHead({
  title: 'Projects'
})

const projects = [
  {
    title: 'wiew-ui'
  },
  {
    title: 'gaaming.cn'
  },
  {
    title: 'vitepress-fun'
  }
]
</script>

<template>
  <div max-w-6xl mx-auto mt-10 flex="~ wrap" gap-10 >
    <ProjectCard v-for="pj in projects" :key="pj.title" :title="pj.title" />
  </div>
</template>

<style scoped></style>
