import { dirname } from 'path';
import { fileURLToPath } from 'url';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import nextPlugin from '@next/eslint-plugin-next';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default tseslint.config(
  {
    ignores: ['out/**', '.next/**', 'node_modules/**', '*.mjs'],
  },
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: __dirname,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  {
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: reactHooksPlugin.configs.recommended.rules,
  },
  jsxA11yPlugin.flatConfigs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      '@next/next/no-html-link-for-pages': ['error', 'src/'],
      '@next/next/no-img-element': 'off',
    },
  },
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['error', { singleQuote: true }],
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
    },
  },
);
