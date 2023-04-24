/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 * @link https://www.i18next.com/overview/typescript
 */
import type { I18nNamespaces } from '@acme/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: I18nNamespaces;
  }
}
