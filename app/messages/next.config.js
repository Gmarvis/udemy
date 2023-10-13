/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: { styledComponents: true },
 
  images: {
    remotePatterns: [
      {
        protocol: "https",
         hostname: "images.unsplash.com",
        port: "",
        // pathname: "/gitdagray/test-blogposts/main/images/**",
      },
    ],
  },
 
};

module.exports = nextConfig;
