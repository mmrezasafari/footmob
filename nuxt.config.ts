// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@nuxtjs/color-mode'
  ],

  routeRules: {
    '/backEnd/**': { proxy: { to: 'https://www.fotmob.com/api/**' }, cors: true }
  }
})
