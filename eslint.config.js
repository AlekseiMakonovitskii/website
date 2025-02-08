import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-magic-numbers': 'warn',
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          "selector": "variable",
          "format": ["camelCase", "PascalCase"],
          "leadingUnderscore": "allow",
          "trailingUnderscore": "allow"
        }
      ],
      '@typescript-eslint/no-loop-func': 'error',
      "max-len": ["error", { "code": 80, "tabWidth": 4 }],
      "indent": ["warn", 4],
    }
  },
)