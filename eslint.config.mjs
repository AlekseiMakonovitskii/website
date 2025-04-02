import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
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
            '@typescript-eslint/naming-convention': [
                'warn',
                {
                    selector: 'variable',
                    format: ['camelCase', 'PascalCase'],
                    leadingUnderscore: 'allow',
                    trailingUnderscore: 'allow',
                },
            ],
            '@typescript-eslint/no-loop-func': 'error',
            'max-len': [
                'warn',
                {
                    ignoreStrings: true,
                    ignoreRegExpLiterals: true,
                    ignoreTemplateLiterals: true,
                    code: 120,
                },
            ],
            indent: ['warn', 4],
        },
    },
];

export default eslintConfig;
