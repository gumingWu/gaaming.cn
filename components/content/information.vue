<script setup lang="ts">
const route = useRoute()
const { getContentMdInfo } = useContentMd()
const mdMatter = getContentMdInfo(route.fullPath) || {}

const year = ref(0)
const date = ref('')

year.value = mdMatter.year
date.value = mdMatter.date
</script>

<template>
  <div h-10 opacity-50 mt-5 >{{ year }}-{{ date }}</div>
</template>

<style scoped></style>
