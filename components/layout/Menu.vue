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
  <div h-full flex items-center gap-2 >
    <NuxtLink v-for="menu in menus" :key="menu.title" :to="menu.link" font-bold class="layout-menu" >
      {{ menu.title }}
    </NuxtLink>
  </div>
</template>

<style scoped>
.layout-menu {
  color: var(--c-logo);
}
</style>
