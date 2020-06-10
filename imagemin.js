
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(1337, "127.0.0.1");
(async () => {
  const files = await imagemin(['build/*.{jpg,webp}'], {
    destination: 'build/compressed',
    plugins: [
      imageminJpegtran({
        quality: [0.1, 0.1]
      }),
      imageminPngquant({
        quality: [0.1, 0.1]
      })
    ]
  });

  console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();
