import version from './package.json' assert { type: 'json' };
import nextI18nConfig from './next-i18next.config.js';

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds and Linting.
 */
// !process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@acme/api", "@acme/auth", "@acme/db"],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: !!process.env.CI },
  typescript: { ignoreBuildErrors: !!process.env.CI },
  i18n: nextI18nConfig.i18n,
  images: {
    domains: ['res.cloudinary.com', 'cdn.discordapp.com'],
  },
  publicRuntimeConfig: {
    version,
  },
};

export default config;
