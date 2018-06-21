module.exports = {
    extends: [
        './packages/eslint-config-assignar-base/dist/index.js'
    ],
    rules: {
        // disable this because copy pasta
        'multiline-comment-style': 'off',
    },
    settings: {
        'import/resolver': {
            'node': {
                'extensions': [
                    '.ts',
                    'json',
                ],
            },
        },
    },
}
