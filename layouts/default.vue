<script setup lang="ts">
</script>

<template>
  <LayoutHeader />
  <main pt-15 px-10 flex-1 >
    <slot />
  </main>
  <LayoutFooter />
</template>

<style scoped>
main {
  background-color: var(--c-bg);
}
</style>
