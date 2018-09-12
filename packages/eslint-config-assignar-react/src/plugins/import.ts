const rules: Partial<Rules.Import> = {
    // No Node.js builtin modules
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 'error',
}

export default {
    name: 'import',
    rules,
}
