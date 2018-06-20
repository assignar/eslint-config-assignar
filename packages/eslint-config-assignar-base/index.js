const dependencies = require('./plugins/dependencies')
const eslintBase = require('./plugins/eslint-base')
const jest = require('./plugins/jest')
const imprt = require('./plugins/import')
const typescript = require('./plugins/typescript')

module.exports = {
    globals: {},
    env: {
        commonjs: true,
        es6: true,
    },
    plugins: [
        'dependencies',
        'import',
        'jest',
        'typescript',
    ],
    parser: 'typescript-eslint-parser',
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            globalReturn: false,
        },
        sourceType: 'module',
    },
    settings: Object.assign({}, imprt.settings),

    rules: Object.assign(
        {},
        // configs for each plugin
        dependencies.rules,
        eslintBase.rules,
        jest.rules,
        imprt.rules,
        typescript.rules,
    ),

    overrides: [
        {
            // disable certain rules for testing as testing is messy business
            'files': [
                'src/**/*.spec.ts',
                'src/**/*.spec.tsx',
                'src/**/*.test.ts',
                'src/**/*.test.tsx',
                'src/**/__mocks__/*',
                'test/**/*',
                'types/**/*',
            ],
            'rules': {
               'typescript/no-explicit-any': 'off',
               'max-len': 'off',
               'strict': 'off',
            }
        }
    ]
}
