const localePublicFolder = undefined;

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  saveMissing: false,
  serializeConfig: false,
  reloadOnPrerender: process?.env?.NODE_ENV === 'development',
  react: {
    useSuspense: false,
  },
  debug: process?.env?.NODE_ENV === 'development',
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('../../packages/config/i18n/src/locale')
      : localePublicFolder,
};
