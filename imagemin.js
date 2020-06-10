const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
// const imageminPngquant = require('imagemin-pngquant');

(async () => {
  const files = await imagemin(
    ['build/**/*.{jpg,webp}'],
    {
      destination: 'build/compressed/webp',
      plugins: [imageminMozjpeg({ quality: 65 })]
    }
  );
  console.log(files);
})();
