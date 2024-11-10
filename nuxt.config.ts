import { fileURLToPath, URL } from 'url';
import { API_URLs, WEBSITE_TITLE } from './constants';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      API_URL:
        process.env.NODE_ENV === 'production'
          ? API_URLs.PRODUCTION
          : API_URLs.STAGING,
    },
  },
  ssr: true,
  app: {
    // Global page headers: https://nuxt.com/docs/api/nuxt-config#head
    head: {
      title: WEBSITE_TITLE,
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'author', content: 'Ntsal' },
        {
          hid: 'description',
          name: 'description',
          content: 'GENEREAL DESCRIPTION',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: '',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Template',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'GENEREAL DESCRIPTION',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Template',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'GENEREAL DESCRIPTION',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  css: [
    // Global CSS: https://nuxt.com/docs/api/nuxt-config#css
    '~/assets/styles/globals.scss',
  ],
  plugins: [
    // Plugins to run before rendering page: https://nuxt.com/docs/api/nuxt-config#plugins
  ],
  // TODO(ADD): components
  // TODO(ADD): buildModules[]
  modules: [
    // Modules: https://nuxt.com/docs/guide/concepts/modules
    '@nuxtjs/tailwindcss',
    [
      // Using Pinia alongside Vuex, need to tell pinia to not disable it
      '@pinia/nuxt',
      { disableVuex: true },
    ],
  ],

  pinia: {
    storesDirs: [
      // you can add any custom-file like ['./custom-folder/stores/**']
      './stores/**',
    ],
  },

  // TODO(ADD): build{}
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**',
    ],
  },

  //  postcss.confing.js
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  //  vite.confing.js
  vite: {
    plugins: [],
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./', import.meta.url)),
        '@': fileURLToPath(new URL('./', import.meta.url)),
        '~~': fileURLToPath(new URL('./', import.meta.url)),
        '@@': fileURLToPath(new URL('./', import.meta.url)),
        '@ASSETS': fileURLToPath(new URL('./assets/', import.meta.url)),
        '@PUBLIC': fileURLToPath(new URL('./public/', import.meta.url)),
        '@PLUGIN': fileURLToPath(new URL('./plugins/', import.meta.url)),
        '@STORE': fileURLToPath(new URL('./store/', import.meta.url)),
      },
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '@use "~/assets/styles/base/_variables.scss" as *;',
    //     },
    //   },
    // },
  },
  //
});
