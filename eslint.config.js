import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default {
  root: true,
  parser: tsParser, // Specify the TypeScript parser
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react-hooks', 'react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    ...reactHooks.configs.recommended.rules,
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  ignorePatterns: ['dist'],
};
