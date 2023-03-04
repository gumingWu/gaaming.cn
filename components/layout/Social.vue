<script setup lang="ts">
const socialLinks = [
  {
    to: 'https://github.com/gumingWu',
    title: 'github',
    icon: 'i-tabler:brand-github'
  },
  {
    to: 'https://juejin.cn/user/1469381099657902',
    title: 'juejin',
    icon: 'i-tabler:brand-juejin'
  },
  {
    to: 'https://leetcode.cn/u/guming/',
    title: 'leetcode',
    icon: 'i-simple-icons:leetcode',
    extraStyle: {
      width: '20px',
      height: '20px'
    }
  },
]
</script>

<template>
  <div h-full flex items-center gap-2 text-2xl >
    <NuxtLink v-for="link in socialLinks" :key="link.title" :to="link.to" target="_blank" :title="link.title">
      <div :class="link.icon" :style="link.extraStyle" cursor-pointer text-slate-500 hover:text-slate-800></div>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
