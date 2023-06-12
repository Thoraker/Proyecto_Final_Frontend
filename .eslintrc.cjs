module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'standard',
		'plugin:react/jsx-runtime',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'eslint:recommended',
		'prettier',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {},
}
