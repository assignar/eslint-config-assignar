// the global list of restricted terms that airbnb uses
import globals = require('eslint-restricted-globals')

// we remove some because of how the eslint TS parser interacts with eslint when using interfaces
const pseudoAllowedGlobals = ['name', 'status', 'location', 'open', 'close', 'event']
const restrictedGlobals = globals.filter(g => pseudoAllowedGlobals.indexOf(g) === -1)

// TODO - figure out why doing `as Rules.Eslint` for the typing doesn't work here...
const rules : Rules.Eslint = {
    'no-restricted-globals': [
        'error',
        'isFinite',
    ].concat(restrictedGlobals),
}

export default {
    rules,
}
