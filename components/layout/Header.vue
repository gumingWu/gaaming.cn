<script setup lang="ts">
const { y } = useWindowScroll()
const topArrived = computed(() => y.value === 0)
</script>

<template>
  <header w-full h-15 fixed top-0 z-1000 transition-colors duration-300 shadow :class="!topArrived ? 'bg-white/70 backdrop-blur-2' : ''" >
    <div h-full mx-auto max-w="120rem" px-10 flex justify-between >
      <div flex items-center >
        <LayoutLogo />
        <LayoutMenu />
      </div>
      <div>
        <LayoutSocial />
        <LayoutTheme />
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>
