//configuração next-pwa
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true, // was there by default
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.my-file$/i,
      loader: 'raw-loader'
    })

    // Important: return the modified config
    return config
  }
}

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disabled: !isProd
  }
})
