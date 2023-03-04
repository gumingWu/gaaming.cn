// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/devtools',
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
})
