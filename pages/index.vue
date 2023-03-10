<script setup lang="ts">
const { imageRef } = useHomeMotion()

const router = useRouter()
const toProject = () => {
  router.push('/projects')
}
</script>

<template>
  <div max-w-7xl mt-30 mx-auto md:flex="~ row-reverse" >
    <HomeImage ref="imageRef" flex-1 />
    <div>
      <HomeIntro flex-1 />
      <IconButton right="i-tabler:arrow-right" @click="toProject" >
        To Project
      </IconButton>
    </div>
  </div>
</template>
