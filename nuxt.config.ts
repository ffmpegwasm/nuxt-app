import { defineNuxtConfig } from 'nuxt';
import { buildModules, meta, modules, publicRuntimeConfig } from './config';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#ssr
  ssr: false,
  // https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#meta
  meta,
  // https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#publicruntimeconfig
  publicRuntimeConfig,
  // https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#modules
  modules,
  // https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#buildmodules
  buildModules,
  // https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#servermiddleware
  serverMiddleware: ['~/api/headers'],
});
