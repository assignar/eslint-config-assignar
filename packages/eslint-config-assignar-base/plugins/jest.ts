export default {
    rules: {
        // This rule gives you control over the usage of test/it keywords in your codebase
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/consistent-test-it
        'jest/consistent-test-it': [
            'error',
            {
                fn: 'it',
                withinDescribe: 'it',
            },
        ],

        // Enforce it, test and describe to have descriptions that begin with a lowercase letter.
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/lowercase-name
        'jest/lowercase-name': [
            'error',
            {
                ignore: ['describe'],
            }
        ],

        // This rule raises a warning about 'skip' tests.
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-disabled-tests
        'jest/no-disabled-tests': 'warn',

        // Disallow 'only' tests.
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-focused-tests
        'jest/no-focused-tests': 'error',

        // Disallow beforeAll beforeEach afterAll afterEach
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-hooks
        'jest/no-hooks': 'error',

        // Having identical titles for two different tests or test suites may create confusion
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-identical-title
        'jest/no-identical-title': 'error',

        // Disallow importing Jest
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jest-import
        'jest/no-jest-import': 'error',

        // disallow large snapshots
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots
        'jest/no-large-snapshots': 'off',

        // Use .only and .skip over f and x
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-prefixes
        'jest/no-test-prefixes': 'error',

        // Suggest using toHaveLength()
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-expect-assertions
        'jest/prefer-expect-assertions': 'error',

        // Suggest using toBeNull()
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-null
        'jest/prefer-to-be-null': 'error',

        // Suggest using toBeUndefined()
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-undefined
        'jest/prefer-to-be-undefined': 'error',

        // Suggest using expect.assertions() OR expect.hasAssertions()
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-have-length
        'jest/prefer-to-have-length': 'off',

        // Enforce valid describe() callback
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-describe
        'jest/valid-describe': 'error',

        // Enforce valid expect() usage
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect
        'jest/valid-expect': 'error',

        // Enforce having return statement when testing with promises
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect-in-promise
        'jest/valid-expect-in-promise': 'error',
    } as Rules.Jest,
}
