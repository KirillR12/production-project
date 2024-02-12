module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'airbnb',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
                '**/src/**/*.test.{ts,tsx}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'i18next',
        'react-hooks',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'react/react-in-jsx-scope': 'off',
        semi: ['error', 'never'],
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-underscore-dangle': 'off',
        'import/no-extraneous-dependencies': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'react/display-name': 'off',
        'max-len': ['error', { code: 140 }],
        '@typescript-eslint/ban-ts-comment': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid', 'to', 'name'],
            },
        ],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
    },
}
