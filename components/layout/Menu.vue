<script setup lang="ts">
const menus = [
  {
    title: 'Projects',
    link: '/projects'
  },
  {
    title: 'Blogs',
    link: '/blogs'
  },
]
</script>

<template>
  <div h-full flex items-center>
    <NuxtLink v-for="menu in menus" :key="menu.title" :to="menu.link">
      {{ menu.title }}
    </NuxtLink>
  </div>
</template>

<style scoped></style>
