<script setup lang="ts">
const colorMode = useColorMode()

const toggleDark = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div h-full i-tabler:sun dark:i-tabler:moon text-2xl cursor-pointer text-slate-500 hover:text-slate-800 @click="toggleDark"></div>
</template>

<style scoped></style>
