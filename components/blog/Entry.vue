<script setup lang="ts">
defineProps({
  path: String,
  title: String,
  date: String
})
</script>

<template>
  <NuxtLink :to="path" h="20 xl:25" opacity-60 hover:opacity-100 transition-opacity duration-300 >
    <div text="6 xl:8" font-bold >{{ title }}</div>
    <div>{{ date }}</div>
  </NuxtLink>
</template>

<style scoped></style>
