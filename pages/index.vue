<script setup lang="ts">
const { imageRef } = useHomeMotion()
</script>

<template>
  <div max-w-7xl my-30 mx-auto md:flex="~ row-reverse" >
    <HomeImage ref="imageRef" flex-1 />
    <div flex-1 >
      <HomeIntro />
      <HomeStack mt-10 />
      <HomeRoute mt-3 />
    </div>
  </div>
</template>
