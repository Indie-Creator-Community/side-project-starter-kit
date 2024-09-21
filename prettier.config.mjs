/** @typedef {import('@ianvs/prettier-plugin-sort-imports').PluginConfig} SortImportsConfig */
/** @typedef {import('prettier').Config} PrettierConfig */
/** @typedef {{ tailwindConfig: string }} TailwindConfig */

/** @type {PrettierConfig | SortImportsConfig | TailwindConfig} */
const config = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  jsxSingleQuote: false,
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-jsdoc', 'prettier-plugin-tailwindcss'],

  /** Tailwind Plugin Config. */
  tailwindConfig: './tailwind.config',
  tailwindFunctions: ['cn', 'clsx', 'cva'],

  /** JSdoc Plugin Config. */
  jsdocPrintWidth: 80,
  tsdoc: true,
  jsdocDescriptionWithDot: true,
  jsdocCapitalizeDescription: false,
  jsdocCommentLineStrategy: 'keep',
  jsdocSeparateReturnsFromParam: false,
  jsdocSeparateTagGroups: false,
  jsdocPreferCodeFences: false,
  jsdocLineWrappingStyle: 'greedy',

  /** Sort Imports Plugin Config. */
  importOrder: [
    '',
    '^(expo(.*)$)|^(expo$)',
    '^(next/(.*)$)|^(next$)',
    '^(react/(.*)$)|^(react$)|^(react-native(.*)$)',
    '^@acme/(.*)$',
    '^~/components/(.*)$',
    '^~/styles/(.*)$',
    '^~/utils/(.*)$',
    '^~/(.*)$',
    '^[./]',
    '<THIRD_PARTY_MODULES>',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
};

export default config;

/**
 * @reference
 * https://github.com/tailwindlabs/prettier-plugin-tailwindcss
 * https://www.npmjs.com/package/prettier-plugin-jsdoc
 * https://www.npmjs.com/package/@ianvs/prettier-plugin-sort-imports
 */
