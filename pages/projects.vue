<script setup lang="ts">
import { useProjectColor } from '~~/composables/color'
import type { ProjectListType } from '~~/types'

useHead({
  title: 'Projects'
})

const projects: ProjectListType = [
  {
    title: 'wiew-ui'
  },
  {
    title: 'gaaming.cn'
  },
  {
    title: 'witepress'
  },
  {
    title: 'vitepress-fun'
  },
  {
    title: 'vitepress-fun-cli'
  },
  {
    title: 'create-vite-vercel'
  },
  {
    title: 'create-vite-vercel-y'
  },
  {
    title: 'coderwjm-cms'
  },
  {
    title: 'wuse'
  },
  {
    title: 'wtime'
  },
  {
    title: 'wacctount'
  },
]

const { getProjectListColor } = useProjectColor()
await getProjectListColor(projects) // initial project list color
</script>

<template>
  <div max-w-6xl mx-auto my-10 flex="~ wrap" gap-20 >
    <ProjectCard v-for="pj in projects" :key="pj.title" :title="pj.title" />
  </div>
</template>

<style scoped></style>
