<script setup lang="ts"></script>

<template>
  <div>
    <div text="slate-500 dark:white/70" >current favorite tech stack:</div>
    <div flex items-center gap-4 select-none >
      <SvgVue />
      <div i-tabler:brand-nuxt text="#00DC82" text-3xl ></div>
      <img src="https://api.nuxtjs.org/api/ipx/s_80,f_webp/gh/nuxt/modules/main/icons/vueuse.svg" alt="vueuse" title="vueuse" w-6 h-6 >
      <div text-2xl title="vitepress" font="600" text="#00DC82" >VP</div>
      <SvgUno title="unocss" w-6 h-6 />
      <img itemprop="image" src="https://avatars.githubusercontent.com/u/80154025?s=200&amp;v=4" w-6 h-6 alt="@unjs" title="unjs" />
      <SvgReact w-6 h-6 text="#087ea4" title="react" />
      <SvgTs title="ts" />
    </div>
  </div>
</template>

<style scoped></style>
