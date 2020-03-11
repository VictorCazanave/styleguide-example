/**
 * Browser-sync config file
 * http://www.browsersync.io/docs/options/
 */
module.exports = {
	server: {
		baseDir: 'docs',
		routes: {
			"/dist": "dist"
		}
	},
	ui: {
		port: 3000
	},
	open: false,
	notify: false,
	files: ['dist/*', 'docs/*'],
	watchEvents: ['add', 'change']
};
