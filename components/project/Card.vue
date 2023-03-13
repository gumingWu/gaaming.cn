<script setup lang="ts">
defineProps({
  title: String
})
</script>

<template>
  <div class="project-card" w-80 h-100 bg="#f5f5f5 dark:slate-800/25" backdrop-grayscale p="x-8 y-6" rounded-md cursor-pointer >
    {{ title }}
  </div>
</template>

<style scoped>
.project-card {
  transition: box-shadow .3s ease, transform .2s ease;
}
.project-card:hover {
  box-shadow: 0 8px 50px #23232333;
}
</style>
