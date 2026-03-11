/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    qualities: [75, 90], // add the qualities you want
  },
  turbopack: {
    root: process.cwd(),
  },
}

export default nextConfig