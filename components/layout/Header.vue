<script setup lang="ts">
const { y } = useWindowScroll()
const topArrived = computed(() => y.value === 0)
</script>

<template>
  <header w-full h-15 fixed top-0 z-1000 transition-colors duration-300 shadow :class="!topArrived ? 'border-b bg-white/70 backdrop-blur-2' : ''" >
    <div h-full mx-auto max-w="120rem" border-b b-green-1  >
      <LayoutLogo />
    </div>
  </header>
</template>

<style scoped>
</style>
