module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'airbnb',
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
                '**/src/**/*.test.{ts,tsx}',
                '**/src/**/*.stories.{ts,tsx}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
    plugins: [
        'react',
        'i18next',
        'react-hooks',
        'fedotov-fsd',
        'unused-imports',
        'ulbi-tv-plugin',
        '@typescript-eslint',
    ],

    rules: {
        'react/no-unstable-nested-components': 'warn',
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
        'no-namespace': 'off',
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-underscore-dangle': 'off',
        'import/no-extraneous-dependencies': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'unused-imports/no-unused-imports': 'error',
        'react/display-name': 'off',
        // 'max-len': ['error', { code: 170 }],
        '@typescript-eslint/ban-ts-comment': 'off',
        'react/no-array-index-key': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        // 'ulbi-tv-plugin/layer-imports': ['error', { alias: '@' }],
        // 'ulbi-tv-plugin/path-checker': ['error', { alias: '@' }],
        'fedotov-fsd/path-checker': ['error', { alias: '@' }],
        'fedotov-fsd/public-api-import': [
            'error',
            { alias: '@', fileTypes: ['**/StoreProviderDecorator.tsx'] },
        ],
        'fedotov-fsd/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: [
                    '**/ThemeProviders',
                    '**/StoreProvider',
                    '**/StateSchema',
                    '**/testing',
                ],
            },
        ],
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'feature',
                    'border',
                    'as',
                    'role',
                    'align',
                    'justify',
                    'direction',
                    'data-testid',
                    'to',
                    'name',
                    'target',
                ],
            },
        ],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
}
