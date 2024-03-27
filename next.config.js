const million = require("million/compiler");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // formats: ["image/png"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "smartenup-figma-test.s3.eu-central-1.amazonaws.com",
        // port: "",
        // pathname: "/image/upload/**",
      },
    ],
  },
};

module.exports = million.next(nextConfig, { auto: { rsc: true } });
