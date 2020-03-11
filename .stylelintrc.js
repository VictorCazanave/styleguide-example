module.exports = {
	root: true,
	extends: [
		'stylelint-config-standard',
		'stylelint-config-recommended-scss',
	],
	rules: {
		indentation: 'tab',

		// Disabled rules
		'at-rule-empty-line-before': null,
		'declaration-empty-line-before': null,
		'value-keyword-case': null,
	},
}