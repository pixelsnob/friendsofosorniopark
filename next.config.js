const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass');

module.exports = withPlugins([
  [ optimizedImages, {
    handleImages: [ 'jpg' ],
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 62,
    }
  }],
  [
    withSass
  ]

]);
