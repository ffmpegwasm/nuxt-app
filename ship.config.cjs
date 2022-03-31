module.exports = {
  installCommand: () => 'npm i --prefer-offline --no-audit --no-optional',
  buildCommand: () => null,
  publishCommand: ({ tag }) =>
    `echo "Releasing ${tag} version of ffmpegwasm :: Nuxt App"`,
};
