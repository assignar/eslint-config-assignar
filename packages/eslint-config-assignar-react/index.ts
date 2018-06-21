import react from './plugins/react'
import imprt from './plugins/import'

export default {
    env: {
        browser: true,
    },
    extends: [
        require.resolve('eslint-config-assignar-base'),
    ],
    plugins: [
        react.name,
        imprt.name,
    ].map(p => require.resolve(p)),
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
