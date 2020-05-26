# Node Sass Middleware
Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass. It allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware.

This app demonstrates using the node-sass-middleware module to serve scss files. It works by writing the compiled files to `/dest` and then serves it as a static file from there.

The example SCSS is based on Ken Wheeler's responsive [Sass demo](https://scotch.io/tutorials/getting-started-with-sass).