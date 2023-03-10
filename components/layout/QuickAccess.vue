<script setup lang="ts">
const quickAccess = [
  {
    title: 'vue3 docs',
    to: 'https://vuejs.org/',
    icon: 'i-tabler:brand-vue',
    extraStyle: {
      width: '20px',
      height: '20px'
    }
  },
  {
    title: 'nuxt3 docs',
    to: 'https://nuxt.com/',
    icon: 'i-tabler:brand-nuxt'
  },
]
</script>

<template>
  <div h-full flex items-center gap-2 text-2xl >
    <LayoutDivider />
    <NuxtLink v-for="quick in quickAccess" :key="quick.title" :to="quick.to" target="_blank" :title="quick.title">
      <div :class="quick.icon" :style="quick.extraStyle" cursor-pointer text-slate-500 hover:text-slate-800 dark="text-white/50 hover:text-white" ></div>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
