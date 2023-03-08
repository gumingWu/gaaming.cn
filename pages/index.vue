<script setup lang="ts">
const { imageRef } = useHomeMotion()
</script>

<template>
  <div max-w-7xl mt-30 mx-auto md:flex="~ row-reverse" >
    <HomeImage ref="imageRef" flex-1 />
    <HomeIntro flex-1 />
  </div>
</template>
