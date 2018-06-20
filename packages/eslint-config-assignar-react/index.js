const imprt = require('./plugins/import')
const react = require('./plugins/react')

module.exports = {
    env: {
        browser: true,
    },
    extends: [
        require.resolve('eslint-config-assignar-base'),
    ],
    plugins: [
        'react',
    ],
    parserOptions: {
        exmaFeatures: {
            jsx: true,
        },
    },
    rules: Object.assign(
        {},
        imprt.rules,
        react.rules,
    ),
}
