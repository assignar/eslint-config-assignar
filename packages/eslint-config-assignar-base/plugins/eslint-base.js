const pseudoAllowedGlobals = ['name', 'status', 'location', 'open', 'close', 'event']
// the global list of restricted terms that airbnb uses
const restrictedGlobals = require('eslint-restricted-globals')
    // we remove some because of how the eslint TS parser interacts with eslint when using interfaces
    .filter(g => pseudoAllowedGlobals.indexOf(g) === -1)

module.exports = {
    rules: {
        'no-restricted-globals': [
            'error',
            'isFinite',
        ].concat(restrictedGlobals),
    },
}
