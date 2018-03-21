module.exports = {
    extends: [
        'eslint-config-assignar-base',
    ].map(require.resolve),
    env: {
        node: true,
    },
    settings: {
        'import/resolver': 'babel-module',
    },
}
