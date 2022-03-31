import { NuxtOptionsRuntimeConfig } from '@nuxt/types/config/runtime';

const publicRuntimeConfig: NuxtOptionsRuntimeConfig = {
  version: process.env.npm_package_version,
};
const css: string[] = ['~/assets/css/global.css', '~/assets/css/fonts.css'];
export { buildModules } from './buildModules';
export { meta } from './meta';
export { modules } from './modules';
export { publicRuntimeConfig, css };
