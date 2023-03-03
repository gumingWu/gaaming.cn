// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
  ],
  css: [
    '~/styles/global.css'
  ],
  unocss: {
    // presets
    uno: true,
    icons: true,
    attributify: true,
    shortcuts: [],
    rules: [],
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  }
})
