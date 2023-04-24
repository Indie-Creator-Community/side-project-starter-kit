import type api from './locale/en/api.json';
import type common from './locale/en/common.json';
import type nextjs from './locale/en/nextjs.json';

export interface I18nNamespaces {
  api: typeof api;
  common: typeof common;
  nextjs: typeof nextjs;
}
