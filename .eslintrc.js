module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		`prettier`,
		'plugin:react/recommended',
		'airbnb',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaVersion: 2020,
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		semi: 0,
		indent: [0, 'tab'],
		'no-underscore-dangle': ['warn', { allowAfterThisConstructor: true }],
		'no-restricted-imports': 0,
		'import/prefer-default-export': 0,
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: false,
				optionalDependencies: false,
				peerDependencies: false,
			},
		],
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'no-unused-vars': 0,
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-mixed-spaces-and-tabs': 0,
		'function-paren-newline': 0,
		'no-confusing-arrow': ['error', { allowParens: false }],
		'jsx-quotes': ['error', 'prefer-single'],
		'object-curly-newline': 'off',
		'arrow-body-style': 0,
	},
}
