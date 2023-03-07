<script setup lang="ts">
const { introRef, imageRef } = useHomeMotion()
</script>

<template>
  <div mt-30 md:flex="~ row-reverse" >
    <HomeImage ref="imageRef" flex-1 />
    <HomeIntro ref="introRef" flex-1 />
  </div>
</template>
