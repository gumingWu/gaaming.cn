<script setup lang="ts">
const router = useRouter()
const toProject = () => {
  router.push('/projects')
}
</script>

<template>
  <div>
    <IconButton right="i-tabler:arrow-right" @click="toProject" >
      To Project
    </IconButton>
  </div>
</template>

<style scoped></style>
