import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/devtools',
    '@nuxtjs/color-mode',
    '@vueuse/motion/nuxt'
  ],
  css: [
    '~/styles/global.css',
    '~/styles/vars.css',
    '@unocss/reset/tailwind.css',
  ],
  unocss: {
    // presets
    uno: true,
    icons: true,
    attributify: true,
    webFonts: {
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      }
    },
    shortcuts: {
      'svg-shortcut': 'text-2xl text-slate-500 hover:text-slate-800 dark:text-white/50 dark:hover:text-white',
      'flex-center': 'justify-center items-center',
    },
    rules: [],
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    classSuffix: '',
  }
})
