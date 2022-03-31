import colors from 'windicss/colors';
import { defineConfig } from 'windicss/helpers';

const extract = {
  include: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js',
    'app.vue',
    // TypeScript
    'plugins/**/*.ts',
    'nuxt.config.ts',
  ],
};

const theme = {
  extend: {
    colors: {
      transparent: 'transparent',
      ...colors,
    },
    fontFamily: {
      sans: ['Inter var', ...require('windicss/defaultTheme').fontFamily.sans],
    },
  },
};
const plugins = [
  require('windicss/plugin/filters'),
  require('windicss/plugin/aspect-ratio'),
  require('windicss/plugin/line-clamp'),
  require('windicss/plugin/scroll-snap'),
  require('windicss/plugin/typography')({
    dark: true,
    modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
  }),
  require('windicss/plugin/forms'),
];

export default defineConfig({
  darkMode: 'class',
  extract,
  theme,
  plugins,
});
