<script setup lang="ts">
const route = useRoute()
const colorMode = useColorMode()

const svgColor = computed(() => {
  return {
    color: route.path === '/' ? 'var(--c-logo)' : colorMode.value === 'dark' ? '#fff' : '#000'
  }
})
</script>

<template>
  <div w-50 h-full flex items-center >
    <NuxtLink to="/" h="80%" flex items-end cursor-pointer select-none >
      <SvgLogo w="48px" h="48px" :style="svgColor" />
      <i text-4xl font-semibold >aaming</i>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
