const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [ optimizedImages, {
    /* config for next-optimized-images */
    handleImages: [ 'jpg' ],
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 62,
    }
  }],

  // your other plugins here

]);
