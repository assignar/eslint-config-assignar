const dependencies = require('./plugin/dependencies')
const jest = require('./plugin/jest')
const imprt = require('./plugin/import')
const typescript = require('./plugin/typescript')

module.exports = {
    globals: {},
    env: {
        commonjs: true,
        es6: true,
    },
    extends: [
        'airbnb-base',
    ].map(require.resolve),
    plugins: [
        'typescript',
        'dependencies',
        'import',
    ],
    parser: 'typescript-eslint-parser',
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    settings: {
        'import/extensions': [
            'js',
            'jsx',
            'ts',
            'tsx',
        ],
        'import/parsers': {
            'typescript-eslint-parser': [
                'ts',
                'tsx',
            ],
        },
        'import/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json)$',
        ],
    },

    rules: {
        // configs for each plugin
        ...dependencies,
        ...jest,
        ...imprt,
        ...typescript,


    },
}
