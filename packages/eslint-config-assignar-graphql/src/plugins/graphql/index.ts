import * as schemas from '@assignar/api-schemas'

// don't configure the graphql ruleset if graphql is not installed
const ruleConfig = [
    // add config for each endpoint we touch
    {
        env: 'apollo',
        tagName: 'gqlPersonal',
        schemaJson: schemas.personalJson,
    },
    {
        env: 'apollo',
        tagName: 'gqlMutation',
        schemaJson: schemas.mutationJson,
    },
    {
        env: 'apollo',
        tagName: 'gqlStandard',
        schemaJson: schemas.standardJson,
    },
    {
        env: 'apollo',
        tagName: 'gqlReporting',
        schemaJson: schemas.reportingJson,
    },
]

export default {
    name: 'graphql',
    rules: {
        'graphql/template-strings': [
            'error',
            ...ruleConfig,
        ],

        // The Named Operation rule validates that all operations are named. Naming operations is valuable for including in server-side logs and debugging.
        'graphql/named-operations': [
            'error',
            ...ruleConfig,
        ],

        // The Required Fields rule validates that any specified required field is part of the query, but only if that field is available in schema. This is useful to ensure that query results are cached properly in the client.
        'graphql/required-fields': 'off',

        // This rule enforces that first letter of types is capitalized
        'graphql/capitalized-type-name': [
            'error',
            ...ruleConfig,
        ],

        // The No Deprecated Fields rule validates that no deprecated fields are part of the query. This is useful to discover fields that have been marked as deprecated and shouldn't be used.
        'graphql/no-deprecated-fields': [
            'error',
            ...ruleConfig,
        ],
    },
}
