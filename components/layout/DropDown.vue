<script setup lang="ts">
// const body = document.querySelector('body') // 功能待定，服务端渲染不支持document对象

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = isMenuOpen.value ? false : true
  // body!.style.overflow = isMenuOpen.value ? 'hidden' : ''
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
  <SvgDropdownHamburger @click="toggleMenu" />
  <Teleport to="body">
    <div v-if="isMenuOpen" class="dropdown-menu" w-full px-10 fixed bottom-0 z-1001 bg="white/70 dark:black/70" >
      <div flex="~ col">
        <NuxtLink v-for="menu in menus" :key="menu.title" :to="menu.link" font-bold text-2xl text-center py-3 border="b slate-500 dark:white/50" @click="closeMenu" >
          {{ menu.title }}
        </NuxtLink>
      </div>
      <div h-10 flex items-center justify-center >
        <LayoutTheme :divider="false" />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.dropdown-menu {
  height: calc(100% - var(--layout-header-height));
}
</style>
