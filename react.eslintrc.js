const extend = require('extend')
const base = require('./base.eslintrc.js')

const config = extend(true, {}, base, {
    extends: {
        "plugin:react/recommended",
    },
    plugins: [
        "react"
    ],
    settings: {
        "import/resolver": "webpack",
    },
    rules: {
        "react/prop-types": "off",
        "react/no-unescaped-entities": "off",
    },
})
