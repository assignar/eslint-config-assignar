// the global list of restricted terms that airbnb uses
import globals = require('eslint-restricted-globals')

// we remove some because of how the eslint TS parser interacts with eslint when using interfaces
const pseudoAllowedGlobals = ['name', 'status', 'location', 'open', 'close', 'event']
const restrictedGlobals = globals.filter(g => pseudoAllowedGlobals.indexOf(g) === -1)

const rules : Rules.Eslint = {
    // https://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': ,
    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': ,
    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ,
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ,
    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': ,
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': ,
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ,
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': ,
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': ,
    //https://eslint.org/docs/rules/block-spacing
    'block-spacing': ,
    // https://eslint.org/docs/rules/brace-style
    'brace-style': ,
    // https://eslint.org/docs/rules/callback-return
    'callback-return': ,
    // https://eslint.org/docs/rules/camelcase
    'camelcase': ,
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': ,
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': ,
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ,
    // https://eslint.org/docs/rules/comma-spacing
    'comma-spacing': ,
    // https://eslint.org/docs/rules/comma-style
    'comma-style': ,
    // https://eslint.org/docs/rules/complexity
    'complexity': ,
    // https://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': ,
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': ,
    // https://eslint.org/docs/rules/consistent-this
    'consistent-this': ,
    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': ,
    // https://eslint.org/docs/rules/curly
    'curly': ,
    // https://eslint.org/docs/rules/default-case
    'default-case': ,
    // https://eslint.org/docs/rules/dot-location
    'dot-location': ,
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': ,
    // https://eslint.org/docs/rules/eol-last
    'eol-last': ,
    // https://eslint.org/docs/rules/eqeqeq
    'eqeqeq': ,
    // https://eslint.org/docs/rules/for-direction
    'for-direction': ,
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ,
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': ,
    // https://eslint.org/docs/rules/func-names
    'func-names': ,
    // https://eslint.org/docs/rules/func-style
    'func-style': ,
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': ,
    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': ,
    // https://eslint.org/docs/rules/getter-return
    'getter-return': ,
    // https://eslint.org/docs/rules/global-require
    'global-require': ,
    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': ,
    // https://eslint.org/docs/rules/handle-callback-err
    'handle-callback-err': ,
    // https://eslint.org/docs/rules/id-blacklist
    'id-blacklist': ,
    // https://eslint.org/docs/rules/id-length
    'id-length': ,
    // https://eslint.org/docs/rules/id-match
    'id-match': ,
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ,
    // https://eslint.org/docs/rules/indent
    'indent': ,
    // https://eslint.org/docs/rules/init-declarations
    'init-declarations': ,
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ,
    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': ,
    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': ,
    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': ,
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ,
    // https://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': ,
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': ,
    // https://eslint.org/docs/rules/max-depth
    'max-depth': ,
    // https://eslint.org/docs/rules/max-len
    'max-len': ,
    // https://eslint.org/docs/rules/max-lines
    'max-lines': ,
    // https://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': ,
    // https://eslint.org/docs/rules/max-params
    'max-params': ,
    // https://eslint.org/docs/rules/max-statements
    'max-statements': ,
    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': ,
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': ,
    // https://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': ,
    // https://eslint.org/docs/rules/new-cap
    'new-cap': ,
    // https://eslint.org/docs/rules/new-parens
    'new-parens': ,
    // https://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': ,
    // https://eslint.org/docs/rules/no-alert
    'no-alert': ,
    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': ,
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': ,
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': ,
    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': ,
    // https://eslint.org/docs/rules/no-caller
    'no-caller': ,
    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': ,
    // https://eslint.org/docs/rules/no-catch-shadow
    'no-catch-shadow': ,
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': ,
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': ,
    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': ,
    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': ,
    // https://eslint.org/docs/rules/no-console
    'no-console': ,
    // https://eslint.org/docs/rules/no-const-assign
    'no-const-assign': ,
    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': ,
    // https://eslint.org/docs/rules/no-continue
    'no-continue': ,
    // https://eslint.org/docs/rules/no-control-regex
    'no-control-regex': ,
    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': ,
    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': ,
    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': ,
    //https://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': ,
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': ,
    // https://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': ,
    // https://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': ,
    // https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': ,
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ,
    // https://eslint.org/docs/rules/no-empty
    'no-empty': ,
    // https://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': ,
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': ,
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': ,
    // https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': ,
    // https://eslint.org/docs/rules/no-eval
    'no-eval': ,
    // https://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': ,
    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': ,
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': ,
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': ,
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': ,
    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': ,
    // https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': ,
    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': ,
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': ,
    // https://eslint.org/docs/rules/no-func-assign
    'no-func-assign': ,
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ,
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': ,
    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': ,
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': ,
    // https://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': ,
    // https://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': ,
    // https://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': ,
    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': ,
    // https://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': ,
    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': ,
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': ,
    // https://eslint.org/docs/rules/no-labels
    'no-labels': ,
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': ,
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': ,
    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': ,
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': ,
    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': ,
    // https://eslint.org/docs/rules/no-mixed-requires
    'no-mixed-requires':,
    // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': ,
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': ,
    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': ,
    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': ,
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ,
    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': ,
    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': ,
    // https://eslint.org/docs/rules/no-new
    'no-new': ,
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': ,
    // https://eslint.org/docs/rules/no-new-object
    'no-new-object': ,
    // https://eslint.org/docs/rules/no-new-require
    'no-new-require': ,
    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': ,
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': ,
    // https://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': ,
    // https://eslint.org/docs/rules/no-octal
    'no-octal': ,
    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': ,
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': ,
    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': ,
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': ,
    // https://eslint.org/docs/rules/no-process-env
    'no-process-env': ,
    // https://eslint.org/docs/rules/no-process-exit
    'no-process-exit': ,
    // https://eslint.org/docs/rules/no-proto
    'no-proto': ,
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': ,
    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': ,
    // https://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': ,
    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': [
        'error',
        'isFinite',
    ].concat(restrictedGlobals),
    // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': ,
    // https://eslint.org/docs/rules/no-restricted-modules
    'no-restricted-modules': ,
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': ,
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': ,
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': ,
    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': ,
    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': ,
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': ,
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': ,
    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': ,
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': ,
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': ,
    // https://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': ,
    // https://eslint.org/docs/rules/no-sync
    'no-sync': ,
    // https://eslint.org/docs/rules/no-tabs
    'no-tabs': ,
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': ,
    // https://eslint.org/docs/rules/no-ternary
    'no-ternary': ,
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': ,
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': ,
    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': ,
    // https://eslint.org/docs/rules/no-undef
    'no-undef': ,
    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': ,
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': ,
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': ,
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': ,
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': ,
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ,
    // https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': ,
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': ,
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': ,
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': ,
    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': ,
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': ,
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': ,
    // https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': ,
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': ,
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': ,
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': ,
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': ,
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': ,
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': ,
    //https://eslint.org/docs/rules/no-var
    'no-var': ,
    // https://eslint.org/docs/rules/no-void
    'no-void': ,
    // https://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': ,
    // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': ,
    // https://eslint.org/docs/rules/no-with
    'no-with': ,
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': ,
    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': ,
    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': ,
    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': ,
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': ,
    // https://eslint.org/docs/rules/one-var
    'one-var': ,
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ,
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ,
    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ,
    // https://eslint.org/docs/rules/padded-blocks
    'padded-blocks': ,
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': ,
    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': ,
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': ,
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': ,
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': ,
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': ,
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': ,
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': ,
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': ,
    // https://eslint.org/docs/rules/quote-props
    'quote-props': ,
    // https://eslint.org/docs/rules/quotes
    'quotes': ,
    // https://eslint.org/docs/rules/radix
    'radix': ,
    // https://eslint.org/docs/rules/require-await
    'require-await': ,
    // https://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': ,
    // https://eslint.org/docs/rules/require-yield
    'require-yield': ,
    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': ,
    //https://eslint.org/docs/rules/semi
    'semi': ,
    // https://eslint.org/docs/rules/semi-spacing
    'semi-spacing': ,
    // https://eslint.org/docs/rules/semi-style
    'semi-style': ,
    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': ,
    // https://eslint.org/docs/rules/sort-keys
    'sort-keys': ,
    // https://eslint.org/docs/rules/sort-vars
    'sort-vars': ,
    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': ,
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ,
    // https://eslint.org/docs/rules/space-in-parens
    'space-in-parens': ,
    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': ,
    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': ,
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': ,
    // https://eslint.org/docs/rules/strict
    'strict': ,
    // https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': ,
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': ,
    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': ,
    // https://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': ,
    // https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': ,
    // https://eslint.org/docs/rules/use-isnan
    'use-isnan': ,
    // https://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': ,
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ,
    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': ,
    // https://eslint.org/docs/rules/wrap-iife
    'wrap-iife': ,
    // https://eslint.org/docs/rules/wrap-regex
    'wrap-regex': ,
    // https://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': ,
    // https://eslint.org/docs/rules/yoda
    'yoda': ,
}

export default {
    rules,
}
