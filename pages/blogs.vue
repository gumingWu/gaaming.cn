<script setup lang="ts">
useHead({
  title: 'Blogs'
})

const blogsQuery = await queryContent('blogs')
  .sort({
    date: -1
  })
  .find()
</script>

<template>
  <div max-w-7xl mx-auto my-10 flex="~ col" items-center gap-10 >
    <BlogList :blog-list="blogsQuery" year="2023" />
  </div>
</template>

<style scoped></style>
