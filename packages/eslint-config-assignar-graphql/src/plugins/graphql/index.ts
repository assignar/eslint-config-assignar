/* eslint-disable import/no-mutable-exports */

import personalJson = require('./schemas/personal.json')
import mutationJson = require('./schemas/mutation.json')
import standardJson = require('./schemas/standard.json')
import reportingJson = require('./schemas/reporting.json')

// TODO - figure out how to make the schema imports independent of this repo...

// don't configure the graphql ruleset if graphql is not installed
let config : Record<'rules' | 'name', any> = {} as any
try {
    // this will throw if graphql is not installed
    require.resolve('graphql')
    const ruleConfig = [
        // add config for each endpoint we touch
        {
            env: 'apollo',
            tagName: 'gqlPersonal',
            schemaJson: personalJson,
        },
        {
            env: 'apollo',
            tagName: 'gqlMutation',
            schemaJson: mutationJson,
        },
        {
            env: 'apollo',
            tagName: 'gqlStandard',
            schemaJson: standardJson,
        },
        {
            env: 'apollo',
            tagName: 'gqlReporting',
            schemaJson: reportingJson,
        },
    ]

    config = {
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
} catch (_) {
    // ignored
}

export default config
