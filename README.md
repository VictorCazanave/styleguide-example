# Style Guide Example

*An example of living style guide using [KSS](http://warpspire.com/kss/)*

## 🎯 Purpose

The content of this style guide is not important because the purpose of this project is to practice [kss-node](https://www.npmjs.com/package/kss) and list tips for a further real usage.

The design is fully inspired by the awesome website [every-layout.dev](https://every-layout.dev).

## 🔨 Building Tools

In order to keep the building tools simple, I decided to use only npm scripts instead of a task runner (Grunt, Gulp...) or a module bundler (Webpack, Rollup...).

### Dependencies

* [chokidar-cli](https://www.npmjs.com/package/chokidar-cli): watch files and re-run build script when files have been modified during development
* [browser-sync](https://www.npmjs.com/package/browser-sync): synchronize and update browser when files have been modified during development
* [npm-run-all](https://www.npmjs.com/package/npm-run-all): run multiple npm scripts in parallel or sequential in a cross-platform way
* [stylelint](https://www.npmjs.com/package/stylelint) and [stylelint-scss](https://www.npmjs.com/package/stylelint-scss): lint SCSS code

### Tips

* `npm-run-all` seems to work only with defined npm scripts (e.g. `run-p chokidar [options] browser-sync [options]` does not work). Although the documentation is pretty clear, it was not obvious to me as a first time user 😅

## 🎨 Styles

In order to make the code more flexible, I decided to use the Sass preprocessor (with SCSS syntax) instead of pure CSS.

Any other preprocessor (LESS, Stylus...) is also a good choice.

### Dependencies

* [node-sass](https://www.npmjs.com/package/node-sass): compile `.scss` files to `.css`
* [node-sass-package-importer](https://www.npmjs.com/package/node-sass-package-importer): import easily dependencies from `node_modules` folder
* [postcss-cli](https://www.npmjs.com/package/postcss-cli) and [autoprefixer](are://www.npmjs.com/package/autoprefixer): prefix automatically CSS properties for the supported browers in the `.browserslistrc` file
* [sass-rem](https://www.npmjs.com/package/sass-rem): convert `px` unit into `rem`, because when the user system is in Chinese, the minimum `font-size` is `12px` in Chrome ([very](https://support.google.com/chrome/forum/AAAAP1KN0B0Q18nyAQimVo/?hl=es-419) [old](https://bugs.chromium.org/p/chromium/issues/detail?id=36429) [bug](https://bugs.chromium.org/p/chromium/issues/detail?id=16875) 😱)

### TODO

* Add minification of the generated `main.css` file for production

## 📖 Style Guide

In order to make the development faster, I decided to use the KSS style guide generator.

[DocumentCSS](https://documentcss.com) and [stylemark](https://github.com/mpetrovich/stylemark) may also work well.

### Dependencies

* [kss](https://www.npmjs.com/package/kss): generate the style guide

### Project Structure

* `kss-config.json` contains the [options to run KSS CLI](https://github.com/kss-node/kss-node#using-the-command-line-tool).
* `src/` contains the `.scss` files of the styles to present in the style guide.
* `template/` contains the files to customize the design of the style guide. It is not necessary and using the [default template](https://kss-node.github.io/kss-node/section-demo.html) or overriding the default styles work well too.
* `docs/` contains the generated style guide files and is used for the GitHub page.

### Tips

* In the `Markup` block of the KSS comments, the `class` attribute must include `{{ modifier_class }}` to generate all the variant styles (e.g. `Markup: <button class="button primary {{ modifier_class }}">Apply</button>`).
* The `placeholder` KSS option allows to customize the placeholder text to use for the modifier classes (e.g. the default value generates `<button class="button primary [modifier_class]">Apply</button>`). However in this style guide all the modifier classes are actually pseudo-classes (`:focus`, `:disabled`...) and I did not find a way to remove the placeholder. Therefore I used an empty string, although it adds an extra space (e.g. `<button class="button primary ">Apply</button>`).
* The `custom` KSS option is very usefull to add custom properties to the KSS comments, but be careful to not use an existing property. Then they are accessible in the style guide template.
* The style guide template is made with [handlebars](https://handlebarsjs.com/). Although the syntax is easy to understand, it is recommended to look at the [documentation](https://handlebarsjs.com/guide/) for advanced customization.

### Useful Links

* [KSS Spec](https://github.com/kss-node/kss/blob/spec/SPEC.md)
* [KSS Wiki](https://github.com/kss-node/kss-node/wiki)
* [KSS Demo](https://kss-node.github.io/kss-node/section-demo.html)
* [KSS Real Example](https://communications.uoregon.edu/sites/all/modules/uobanner/uo-web-design-framework/styleguide/)
* [Build a Style Guide Straight from Sass](https://css-tricks.com/build-style-guide-straight-sass/)