// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "nuxt-mongoose",
  ],
  css: ["~/assets/main.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  devServer: {
    host: "0.0.0.0",
  },
});
