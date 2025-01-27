// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



// /**@type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["cdn.sanity.io"],
//   },
// };

// module.exports = nextConfig;


module.exports = {
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "cdn.sanity.io",
              port: "",
              pathname: "/**",
          },
      ],
  },
};
