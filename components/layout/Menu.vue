<script setup lang="ts">
import { ProvideMenusType } from '~~/types'

const menus = inject<ProvideMenusType>('menus')
</script>

<template>
  <div h-full flex items-center gap-4 >
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
