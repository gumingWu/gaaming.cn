<script setup lang="ts">
import { useProjectColor } from '~~/composables/color'

const props = defineProps({
  title: String
})

const wordAvatar = props.title?.[0].toUpperCase()

const { getCurProjectColor } = useProjectColor()
const { color, colorList } = getCurProjectColor(props.title!)

const avatarBgStyle = {
  background: `linear-gradient(to top, ${colorList[1]} 0%, ${colorList[6]} 100%)`
}
const titleStyle = {
  color
}
</script>

<template>
  <div class="project-card" w="100% sm:60 md:81" h="100 sm:80 md:108" bg="white/80 dark:slate-800/25" backdrop-grayscale p="x-8 y-6" rounded-md cursor-pointer flex="~ col center" >
    <div class="card-content" flex="~ col" items-center gap-5 >
      <div rounded="50%" h-30 w-30 flex justify-center items-center text-10 :style="avatarBgStyle" >{{ wordAvatar }}</div>
      <div font-bold text="6 md:8 center" :style="titleStyle" >{{ title }}</div>
      <div class="social-btn" flex gap-4 >
        <div i-tabler:brand-github class="text-2xl md:text-3xl text-slate-500 hover:text-slate-800 dark:text-white/50 dark:hover:text-white" hover:scale-110 ></div>
        <div i-tabler:brand-npm class="text-2xl md:text-3xl text-slate-500 hover:text-slate-800 dark:text-white/50 dark:hover:text-white" hover:scale-110 ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  transition: box-shadow .3s ease, transform .2s ease;
}
.project-card:hover {
  box-shadow: 0 8px 50px var(--project-card-hover);
  transform: scale(1.02);
}
.card-content {
  transition: transform .2s ease;
}
.project-card:hover .card-content {
  transform: translateY(-10%);
}
.social-btn {
  opacity: 0;
  transition: opacity .2s ease;
}
.project-card:hover .social-btn {
  opacity: 1;
}
</style>
