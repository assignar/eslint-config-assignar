import graphql from './plugins/graphql'

module.exports = {
    plugins: [
        graphql.name,
    ],
    rules: {
        // rules for each plugin
        ...graphql.rules,
    },
}
