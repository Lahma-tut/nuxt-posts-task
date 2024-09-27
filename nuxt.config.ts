// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/index.css'],
  modules: ['@nuxt/image', '@nuxt/fonts', '@vueuse/nuxt'],
  fonts: [{ name: 'manrope', provider: 'google'}],
  ssr: true
})