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
  <label class="hamburger" >
    <input type="checkbox" @click="toggleMenu" />
    <svg viewBox="0 0 32 32">
      <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
      <path class="line" d="M7 16 27 16"></path>
    </svg>
  </label>
  <Teleport to="body">
    <div v-if="isMenuOpen" class="dropdown-menu" w-full fixed bottom-0 z-1001 bg="white/70 dark:black/70" >
      <div flex="~ col">
        <NuxtLink v-for="menu in menus" :key="menu.title" :to="menu.link" font-bold class="layout-menu" @click="closeMenu" >
          {{ menu.title }}
        </NuxtLink>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.hamburger {
  cursor: pointer;
}

.hamburger input {
  display: none;
}

.hamburger svg {
  /* The size of the SVG defines the overall size */
  height: 2rem;
  /* Define the transition for transforming the SVG */
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line {
  fill: none;
  stroke: #64748b;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  /* Define the transition for transforming the Stroke */
  transition: stroke-dasharray 300ms cubic-bezier(0.4, 0, 0.2, 1),
              stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.dark .line {
  stroke: rgba(255, 255, 255, 0.5);
}
.hamburger input:hover + svg .line {
  stroke: #1e293b;
}
.dark .hamburger input:hover + svg .line {
  stroke: #fff;
}

.line-top-bottom {
  stroke-dasharray: 12 63;
}

.hamburger input:checked + svg .line-top-bottom {
  stroke-dasharray: 20 300;
  stroke-dashoffset: -32.42;
}
.hamburger input:checked + svg {
  transform: rotate(-45deg);
}

.hamburger input:checked + svg .line-top-bottom {
  stroke-dasharray: 20 300;
  stroke-dashoffset: -32.42;
}


.dropdown-menu {
  height: calc(100% - var(--layout-header-height));
}
</style>
