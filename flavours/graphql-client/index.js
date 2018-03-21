module.exports = {
    extends: [
        'eslint-config-assignar-base',
    ].map(require.resolve),
    env: {
        browser: true,
    },
    plugins: [
        'react',
        'graphql',
    ],
    parserOptions: {
        exmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        'import/resolver': 'webpack',
    },

    rules: {
        'graphql/template-strings': ['error', {
            env: 'apollo',
            schemaJson: require('')
        }],
    },
}
