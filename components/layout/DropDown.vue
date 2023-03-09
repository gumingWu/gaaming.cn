<script setup lang="ts">
// const body = document.querySelector('body') // 功能待定，服务端渲染不支持document对象

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = isMenuOpen.value ? false : true
  // body!.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const openMenu = () => {
  isMenuOpen.value = true
}
const closeMenu = () => {
  isMenuOpen.value = false
}

const menus = [
  {
    title: 'Projects',
    link: '/projects'
  },
  {
    title: 'Blogs',
    link: '/blogs'
  },
  {
    title: 'Explore',
    link: '/explore'
  },
]
</script>

<template>
  <div i-tabler:menu-2 text-2xl text-slate-500 hover:text-slate-800 dark="text-white/50 hover:text-white" h-full flex items-center @click="openMenu" ></div>
  <Teleport to="body">
    <div v-if="isMenuOpen" h-full w-full fixed top-0 z-1001 bg="white/70" >
      <div h-15 w-full >
        <div absolute top-5 right-2 i-tabler:circle-x text-2xl text-slate-500 hover:text-slate-800 dark="text-white/50 hover:text-white" @click="closeMenu" ></div>
      </div>
      <div flex="~ col">
        <NuxtLink v-for="menu in menus" :key="menu.title" :to="menu.link" font-bold class="layout-menu" @click="closeMenu" >
          {{ menu.title }}
        </NuxtLink>
      </div>
    </div>
  </Teleport>
</template>

<style scoped></style>
