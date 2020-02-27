# QNAP CSS

*A CSS framework for QNAP*

**This is only an example of style guide for QNAP based on QWU styles and built with KSS.**

## Development

Installation: `npm install`

Build style guide once: `npm run build`

Build style guide in watch mode: `npm run dev`

### Building Tools

In order to simplify the building tools, we can use only npm scripts instead of task runners (like Grunt, Gulp...) or module bundlers (like webpack, rollup...).

#### Dependencies
* [chokidar-cli](https://www.npmjs.com/package/chokidar-cli) is used during development to watch files and re-run build script when a file has been modified

#### TODO
* Add livereload to avoid to refresh browser manually
* Simplify/split scripts

### Styles

In order to make development faster, we can use SCSS (or LESS, Stylus...) instead of pure CSS.

#### Dependencies
* [node-sass](https://www.npmjs.com/package/node-sass) is used to compile `.scss` files to `.css`
* [node-sass-package-importer](https://www.npmjs.com/package/node-sass-package-importer) is used to easily import dependencies from `node_modules` folder
* [postcss-cli](https://www.npmjs.com/package/postcss-cli) and [autoprefixer](are://www.npmjs.com/package/autoprefixer) are used to automatically prefix CSS properties for the supported browers in `.browserslistrc` file

#### TODO
* Add minification of generated `main.css` file for production (no need for development)

### Style Guide

In order to make development faster, we can use a style guide generator like [KSS](https://github.com/kss-node/kss/blob/spec/SPEC.md) (chosen for this example).

[DocumentCSS](https://documentcss.com) and [stylemark](https://github.com/mpetrovich/stylemark) may also work well.

#### Dependencies
* [kss-node](https://www.npmjs.com/package/kss-node) is used to generate the style guide
* [sass-rem](https://www.npmjs.com/package/sass-rem) is used to convert `px` unit into `rem`

#### Project Structure
* `kss-config.json` contains the [options to run KSS CLI](https://github.com/kss-node/kss-node#using-the-command-line-tool)
* `src` contains the `.scss` files of QNAP styles to present in the style guide
* `template` folder contains the files to customize the design of the style guide. It is NOT necessary and we can use the [default template](https://kss-node.github.io/kss-node/section-demo.html) or simply override the default styles

#### TODO
* Add the real styles of QNAP (not QWU)
* Customize the style guide? (the default template is not very pretty and it may be a good way for the designers to practice CSS)

### Useful Links
* [KSS SPEC](https://github.com/kss-node/kss/blob/spec/SPEC.md)
* [KSS Wiki](https://github.com/kss-node/kss-node/wiki)
* [KSS Demo](https://kss-node.github.io/kss-node/section-demo.html)
* [KSS Real Example](https://communications.uoregon.edu/sites/all/modules/uobanner/uo-web-design-framework/styleguide/)

