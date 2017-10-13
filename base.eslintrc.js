module.exports = {
    'globals': { },
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    'extends': [
        'airbnb-base',
    ],
    'parser': 'typescript-eslint-parser',
    'parserOptions': {
        'ecmaVersion': 6,
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        },
        'sourceType': 'module'
    },
    'settings': {
        'import/parsers': {
            'typescript-eslint-parser': [
                'ts',
                'tsx'
            ]
        }
    },
    'rules': {
        // typescript changes
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'space-infix-ops': 'off',
        'import/extensions': ['error', 'always', { 'js': 'never', 'jsx': 'never', 'ts': 'never', 'tsx': 'never' }],
        'camelcase': 'off',

        // default
        'import/no-extraneous-dependencies': [
            'error',
            {
                'devDependencies': true
            }
        ],

        'class-methods-use-this': [
            'off'
        ],
        'comma-dangle': [
            'error',
            {
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'imports': 'always-multiline',
                'exports': 'always-multiline',
                'functions': 'never'
            }
        ],
        'complexity': [
            'error',
            6
        ],
        'function-paren-newline': 0,
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'max-depth': [
            'error',
            4
        ],
        'max-len': [
            'warn',
            {
                'code': 120,
                'tabWidth': 4,
                'ignoreComments': true,
                'ignoreUrls': true
            }
        ],
        'max-nested-callbacks': [
            'error',
            5
        ],
        'newline-before-return': [
            'error'
        ],
        'no-console': [
            'error',
            {
                'allow': [
                    'info',
                    'error',
                    'warn',
                    'time',
                    'timeEnd'
                ]
            }
        ],
        'no-extra-semi': [
            'error'
        ],
        'no-multi-spaces': [
            'warn',
            {
                'exceptions': {
                    'VariableDeclarator': true
                }
            }
        ],
        'no-param-reassign': [
            'warn',
            {
                'props': false
            }
        ],
        'no-plusplus': [
            'error',
            {
                'allowForLoopAfterthoughts': true
            }
        ],
        'no-prototype-builtins': [
            'off'
        ],
        'no-restricted-globals': [
            "off"
        ],
        'no-tabs': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unused-expressions': [
            'error',
            {
                'allowShortCircuit': true
            }
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'semi-style': 0,
        'spaced-comment': [
            'warn',
            'always',
            {
                'exceptions': [
                    '*'
                ]
            }
        ],
        'strict': [
            'error',
            'global'
        ]
    }
}
