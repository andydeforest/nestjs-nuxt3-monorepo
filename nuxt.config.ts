// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  rootDir: 'apps/client',
  devServer: {
    port: 3001,
  },
});
