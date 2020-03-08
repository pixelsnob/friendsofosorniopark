
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass');

const env = {
  DB_CONNECTION_STRING: 'mongodb://localhost:27017/friendsofosorniopark'
};

if (process.env.NODE_ENV == 'production') {
  env.BASE_URL = 'https://friendsofosorniopark.org/';
} else {
  env.BASE_URL = 'http://staging.friendsofosorniopark.org/';
}

module.exports = withPlugins([
  [
    optimizedImages, {
      handleImages: [ 'jpg' ],
      optimizeImagesInDev: false,
      mozjpeg: {
        quality: 62,
      }
    }
  ],
  withSass,
  { env }
]);
