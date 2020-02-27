/**
 * Browser-sync config file
 * http://www.browsersync.io/docs/options/
 */
module.exports = {
	server: {
		baseDir: 'styleguide',
		routes: {
			"/dist": "dist"
		}
	},
	ui: {
		port: 3000
	},
	open: false,
	notify: false,
	files: ['dist/*', 'styleguide/*'],
	watchEvents: ['add', 'change']
};
