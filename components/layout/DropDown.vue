<script setup lang="ts">
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { ProvideMenusType } from '~/types'

const dropdownRef = ref<HTMLElement | null>(null)
const isMenuOpen = ref(false)

const toggleMenu = () => {
  if(isMenuOpen.value) {
    closeMenu()
  } else {
    isMenuOpen.value = true
    nextTick(() => {
      disableBodyScroll(dropdownRef.value!, { reserveScrollBarGap: true })
    })
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  clearAllBodyScrollLocks()
}

const menus = inject<ProvideMenusType>('menus')
</script>

<template>
  <SvgDropdownHamburger @click="toggleMenu" />
  <Teleport to="body">
    <Transition name="fade">
      <div ref="dropdownRef" v-if="isMenuOpen" class="dropdown-menu" w-full px-10 fixed bottom-0 z-1001 bg="white/70 dark:black/70" >
        <div flex="~ col">
          <NuxtLink v-for="menu in menus" :key="menu.title" :to="menu.link" font-bold text-2xl text-center py-3 border="b slate-500 dark:white/50" @click="closeMenu" >
            {{ menu.title }}
          </NuxtLink>
        </div>
        <div h-10 flex items-center justify-center >
          <LayoutTheme :divider="false" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.dropdown-menu {
  height: calc(100% - var(--layout-header-height));
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-active .container,
.fade-leave-active .container {
  transition: transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from .container,
.fade-leave-to .container {
  transform: translateY(-8px);
}
</style>
