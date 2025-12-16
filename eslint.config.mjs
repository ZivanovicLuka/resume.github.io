import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default [
	{ ignores: ['dist/**', 'node_modules/**', '.astro/**'] },
	js.configs.recommended,
	...tseslint.configs.recommended,
	...astro.configs['flat/recommended'],
	{
		rules: {
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-unused-vars': 'off', // use TS rule instead
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
		}
	}
];


