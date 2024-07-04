const { plugins } = require('eslint-plugin-react/configs/all');

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        es2021: true,
        browser: true,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts', '.jsx', '.tsx'],
            },
        },
        'import/extensions': ['.js', '.ts', '.jsx', '.tsx'],
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    extends: [
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'prettier',
    ],
    plugins: ['unused-imports'],
    rules: {
        radix: 0,
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'guard-for-in': 'warn',
        'arrow-body-style': ['error', 'as-needed'],
        'no-use-before-define': 'off',
        'no-shadow': 'off',
        'no-param-reassign': 'warn',
        'spaced-comment': 'warn',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'no-plusplus': 'off',
        'sort-imports': [
            'warn',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: false,
            },
        ],
        'react/function-component-definition': [
            'error',
            {
                unnamedComponents: 'arrow-function',
                namedComponents: 'arrow-function',
            },
        ],
        'react/require-default-props': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'react/prop-types': 0,
        'react/display-name': 0,
        'react/jsx-props-no-spreading': 0,
        'react/no-multi-comp': 0,
        'react/no-array-index-key': 'error',
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],
        'import/no-extraneous-dependencies': 0,
        'no-restricted-syntax': 0,
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                mjs: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'prettier/prettier': 'error',
    },
};
