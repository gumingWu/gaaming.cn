<script setup lang="ts">
const { y } = useWindowScroll()
const topArrived = computed(() => y.value === 0)
</script>

<template>
  <header w-full fixed top-0 z-1000 transition-colors shadow class="layout-header" :class="!topArrived ? 'bg-white/70 dark:bg-slate-900/80 backdrop-blur-2' : 'bg-transparent'" >
    <div h-full mx-auto max-w="120rem" px="2 md:10" flex justify-between >
      <div flex items-center >
        <LayoutLogo />
        <div hidden sm:block >
          <LayoutMenu />
        </div>
      </div>
      <div hidden sm:block>
        <div h-full flex items-center >
          <LayoutSocial />
          <LayoutTheme :divider="true" />
        </div>
      </div>
      <div sm:hidden h-full flex items-center >
        <LayoutDropDown />
      </div>
    </div>
  </header>
</template>

<style scoped>
.layout-header {
  height: var(--layout-header-height);
}
</style>
