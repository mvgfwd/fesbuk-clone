/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "cdn0.iconfinder.com",
      "images.news18.com",
      "wallpaperaccess.com",
    ],
  },
};

module.exports = nextConfig;
