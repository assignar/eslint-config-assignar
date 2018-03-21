const pseudoAllowedGlobals = ['name', 'status', 'location', 'open', 'close', 'event']
// the global list of restricted terms that airbnb uses
const restrictedGlobals = require('eslint-restricted-globals')
    // we remove some because of how the eslint TS parser interacts with eslint when using interfaces
    .filter(g => pseudoAllowedGlobals.indexOf(g) === -1)

module.exports = extend(true, {}, base, {
    env: {
        browser: true,
    },
    extends: [
        'eslint-config-assignar-base',
        'plugin:react/recommended',
    ],
    plugins: [
        'react',
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
})
