/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  disable:
      process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "preview" ||
      process.env.NODE_ENV === "production",
  // delete two lines above to enable PWA in production deployment
  // add your own icons to public/manifest.json
  // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
  dest: "public",
  register: true,
})

module.exports = withPWA({
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: { domains: ['localhost', 'localhost:1337', '127.0.0.1', '127.0.0.1:1337', 'onve-api.onrender.com', 'onve.com.br', 'citmap-storage.nyc3.digitaloceanspaces.com', 'digitaloceanspaces.com'] },
});