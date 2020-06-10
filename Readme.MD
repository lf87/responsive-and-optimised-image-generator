
# Responsive and optimised image generator

A tool created purely for personal use. Uses [Image processing pipeline](https://marcus-cemes.gitbook.io/image-processing-pipeline/) and [imagemin](https://www.npmjs.com/package/imagemin) , independently, to generated web optimised images.

Check plugin documentation for full configuration options. imagemin also uses [imagemin-jpegtran](https://www.npmjs.com/package/imagemin-jpegtran) and [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant) under the hood

# Image processing pipeline

This resizes images for breakpoints defined in .ipprc.json

`$ npm run process-images`

The docs don't state anything about this package optimising images, but it seems to do so anyway (at least for jpg's)

# imagemin

Tool for minifying images, can be configured in imagemin.js

`$ node imagemin`
