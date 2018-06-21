// the global list of restricted terms that airbnb uses
import globals = require('eslint-restricted-globals')

// we remove some because of how the eslint TS parser interacts with eslint when using interfaces
const pseudoAllowedGlobals = ['name', 'status', 'location', 'open', 'close', 'event']
const restrictedGlobals = globals.filter(g => pseudoAllowedGlobals.indexOf(g) === -1)

export default {
    rules: {
        'no-restricted-globals': [
            'error',
            'isFinite',
        ].concat(restrictedGlobals),
    } as Rules.Eslint,
}
