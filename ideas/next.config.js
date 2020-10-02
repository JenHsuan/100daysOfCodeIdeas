const withCSS = require('@zeit/next-css')

const withImages = require('next-images')

const withOffline = require('next-offline')

const path = require('path');

const nextConfig = {
  generateInDevMode:false,
  dontAutoRegisterSw:true,
  generateSw:false,
  workboxOpts: {
      swDest: './_next/static/service-worker.js',
      swSrc: path.join(__dirname, 'sw.js'),
      //globPatterns: ['static/**/*'],
      //globDirectory: '.'
  },
  webpack(config) {
    console.log(config);
    return config
  }
}

module.exports = withImages(withCSS(withOffline(nextConfig)))