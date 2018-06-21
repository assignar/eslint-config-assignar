import react from './plugins/react'
import imprt from './plugins/import'

module.exports = {
    env: {
        browser: true,
    },
    extends: [
        'assignar-base',
    ],
    plugins: [
        react.name,
        imprt.name,
    ],
    parserOptions: {
        exmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        ...imprt.rules,
        ...react.rules,
    },
}
