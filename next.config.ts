/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['prisma'],
  images: {
    domains: ['localhost']
  }
}

export default nextConfig
