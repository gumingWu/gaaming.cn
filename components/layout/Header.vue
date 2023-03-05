<script setup lang="ts">
const { y } = useWindowScroll()
const topArrived = computed(() => y.value === 0)
</script>

<template>
  <header w-full h-15 fixed top-0 z-1000 shadow :class="!topArrived ? 'bg-white/70 dark:bg-slate-900/75 backdrop-blur-2' : 'bg-transparent'" >
    <div h-full mx-auto max-w="120rem" px-10 flex justify-between >
      <div flex items-center >
        <LayoutLogo />
        <LayoutMenu />
      </div>
      <div flex items-center>
        <LayoutSocial />
        <LayoutTheme />
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>
