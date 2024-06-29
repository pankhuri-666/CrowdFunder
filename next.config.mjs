/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ipfs.infura.io", "gateway.pinata.cloud", "th.bing.com"],
  },
};

export default nextConfig;
