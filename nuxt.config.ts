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
    shortcuts: [],
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
