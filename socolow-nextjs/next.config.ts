import type { NextConfig } from "next";

// /** @type {import('next').NextConfig} */
// const isGithubPages = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  assetPrefix: '',
  basePath: '',
}
// const nextConfig = {
//   output: 'export',
//   assetPrefix: isGithubPages ? '/<socolowsitebuilders/' : '',
//   basePath: isGithubPages ? '/socolowsitebuilders' : '',
// }

// module.exports = nextConfig

export default nextConfig;
