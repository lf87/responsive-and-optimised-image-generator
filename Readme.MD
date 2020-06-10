
# Responsive and optimised image generator

A tool created purely for personal use. Uses [Image processing pipeline](https://marcus-cemes.gitbook.io/image-processing-pipeline/) and [imagemin](https://www.npmjs.com/package/imagemin) , independently, to generated web optimised images.

Check plugin documentation for full configuration options. imagemin also uses [imagemin-mozjpeg](imagemin-mozjpeg) and [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant) under the hood.

# Image processing pipeline

This resizes images for breakpoints defined in .ipprc.json

For more options see the [Sharp resize API](https://sharp.pixelplumbing.com/api-resize#resize).

`$ npm run process-images`

# imagemin

Tool for minifying images, can be configured in imagemin.js - The image processing pipeline tool optimises images for web, but the quality setting doesn't seem to take any effect, so use this for finer control.

`$ node imagemin`
