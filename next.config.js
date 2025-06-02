/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com', 'images.pexels.com'], // Add domains for image providers
  }
}

module.exports = nextConfig