<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

defineProps({
  blogList: Array as PropType<ParsedContent>,
  year: String
})
</script>

<template>
  <div>
    <BlogYear :year="year" />
    <div flex="~ col" gap-5>
      <BlogEntry v-for="blog in blogList" :key="blog._id" :path="blog._path" :title="blog.title" :date="blog.date" />
    </div>
  </div>
</template>

<style scoped></style>
