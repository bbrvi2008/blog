const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.resolve.alias['@components'] = path.resolve(__dirname, 'src/components/')
    config.resolve.alias['@app'] = path.resolve(__dirname, 'src/app/')
    config.resolve.alias['@features'] = path.resolve(__dirname, 'src/features/')
    config.resolve.alias['@hooks'] = path.resolve(__dirname, 'src/hooks/')
    config.resolve.alias['@services'] = path.resolve(__dirname, 'src/services/')

    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }

    return config
  },
  env: {
    CLIENT_URL_API: process.env.CLIENT_URL_API,
    SERVER_URL_API: process.env.SERVER_URL_API,
  },
}

module.exports = nextConfig
