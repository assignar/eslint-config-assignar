// TODO - figure out how to make these independent of this repo...
import personalSchema = require('./schemas/personal.json')
import mutationSchema = require('./schemas/mutation.json')
import standardSchema = require('./schemas/standard.json')
import reportingSchema = require('./schemas/reporting.json')

export default {
    rules: {
        'graphql/template-strings': [
            'error',
            // add config for each endpoint we touch
            {
                env: 'apollo',
                tagName: 'gqlPersonal',
                schemaJson: personalSchema,
            },
            {
                env: 'apollo',
                tagName: 'gqlMutation',
                schemaJson: mutationSchema,
            },
            {
                env: 'apollo',
                tagName: 'gqlStandard',
                schemaJson: standardSchema,
            },
            {
                env: 'apollo',
                tagName: 'gqlReporting',
                schemaJson: reportingSchema,
            },
        ],

        // The Named Operation rule validates that all operations are named. Naming operations is valuable for including in server-side logs and debugging.
        'graphql/named-operations': 'error',

        // The Required Fields rule validates that any specified required field is part of the query, but only if that field is available in schema. This is useful to ensure that query results are cached properly in the client.
        'graphql/required-fields': 'off',

        // This rule enforces that first letter of types is capitalized
        'graphql/capitalized-type-name': 'error',

        // The No Deprecated Fields rule validates that no deprecated fields are part of the query. This is useful to discover fields that have been marked as deprecated and shouldn't be used.
        'graphql/no-deprecated-fields': 'error',
    } as Rules.Graphql,
}