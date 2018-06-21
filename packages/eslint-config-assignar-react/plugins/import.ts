export default {
    name: 'import',
    rules: {
        // No Node.js builtin modules
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
        'import/no-nodejs-modules': 'error',
    } as Partial<Rules.Import>,
}
