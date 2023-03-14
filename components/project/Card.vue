<script setup lang="ts">
const props = defineProps({
  title: String
})

const wordAvatar = props.title?.[0].toUpperCase()

const { color, colorList } = useColor()
const avatarBgStyle = {
  background: `linear-gradient(to top, ${colorList.value[1]} 0%, ${colorList.value[6]} 100%)`
}
// const titleStyle = {
//   'background-image': `linear-gradient( 120deg, ${colorList.value[7]} 30%, ${colorList.value[4]} )`,
//   '-webkit-background-clip': 'text',
//   '-webkit-text-fill-color': 'transparent',
// }
const titleStyle = {
  color: color.value
}
</script>

<template>
  <div class="project-card" w="100% sm:60 md:81" h="100 sm:80 md:108" bg="white/80 dark:slate-800/25" backdrop-grayscale p="x-8 y-6" rounded-md cursor-pointer flex="~ col" items-center gap-5 >
    <div rounded="50%" h-30 w-30 flex justify-center items-center text-10 :style="avatarBgStyle" >{{ wordAvatar }}</div>
    <div font-bold text-8 :style="titleStyle" >{{ title }}</div>
  </div>
</template>

<style scoped>
.project-card {
  transition: box-shadow .3s ease, transform .2s ease;
}
.project-card:hover {
  box-shadow: 0 8px 50px var(--project-card-hover);
}
</style>
