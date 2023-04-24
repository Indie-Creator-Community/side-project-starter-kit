/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    'next',
    'turbo',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  rules: {
    'jsx-a11y/media-has-caption': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-misused-promises': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-i18next',
            message: 'Please use next-i18next import instead to avoid hydration errors',
          },
        ],
      },
    ],
  },
  ignorePatterns: ['**/*.config.js', '**/*.config.cjs', 'packages/config/**'],
  reportUnusedDisableDirectives: true,
};

module.exports = config;
