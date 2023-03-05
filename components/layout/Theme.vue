<script setup lang="ts">
const colorMode = useColorMode()

console.log(colorMode);
</script>

<template>
  {{ $colorMode.preference }}
</template>

<style scoped></style>
