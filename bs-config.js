/**
 * Browser-sync config file
 * http://www.browsersync.io/docs/options/
 */
module.exports = {
	server: {
		baseDir: 'docs'
	},
	ui: {
		port: 3000
	},
	open: false,
	notify: false,
	files: 'docs/*',
	watchEvents: ['add', 'change']
};
