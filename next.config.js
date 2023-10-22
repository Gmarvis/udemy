/** @type {import('next').NextConfig} */
// module.exports = {

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         // hostname: "images.unsplash.com",
//         hostname: "images.unsplash.com",
//         port: "",
//         pathname: "/photo/**",
//       },
//     ],
//   },
// };

const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

const path = require("path");

module.exports = nextConfig;

module.exports = {
  
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

