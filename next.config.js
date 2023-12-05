/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

(async () => {
  await import('./src/env.mjs');
})();


// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,

  // Uncomment line below to enable pwa on development, and comment line with proccess.env.NODE_ENV === 'development'
  //disable: false, 
  disable: process.env.NODE_ENV === 'development',

  workboxOptions: {
    disableDevLogs: true,
  },
  // ... other options you like
});

/** @type {import("next").NextConfig} */
const config = {};


module.exports = withPWA(config);

