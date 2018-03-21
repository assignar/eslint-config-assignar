module.exports = {
    // Grouping overloaded members together can improve readability of the code.
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/adjacent-overload-signatures.md
    'typescript/adjacent-overload-signatures': 'error',

    // This rule enforces PascalCased names for classes and interfaces.
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/class-name-casing.md
    'typescript/class-name-casing': 'error',

    // Explicit types for function return values makes it clear to any calling code what type is returned.
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/explicit-function-return-type.md
    'typescript/explicit-function-return-type': 'off',

    // Leaving off accessibility modifier and making everything public can make your interface hard to use by others
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/explicit-member-accessibility.md
    'typescript/explicit-member-accessibility': 'error',

    // Prefixing interfaces with "I" can help telling them apart at a glance.
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/explicit-member-accessibility.md
    'typescript/interface-name-prefix': 'off',

    // Enforces a consistent member delimiter style in interfaces and type literals.
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/member-delimiter-style.md
    'typescript/member-delimiter-style': [
        'error',
        {
            delimiter: 'none',
            requireLast: true,
            ignoreSingleLine: true,
        },
    ],

    // It can be helpful to enforce naming conventions for private (and sometimes protected) members of an object.
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/member-naming.md
    'typescript/member-naming': 'off',

    // A consistent ordering of fields, methods and constructors can make interfaces, type literals,
    // classes and class expressions easier to read, navigate and edit.
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/member-ordering.md
    'typescript/member-ordering': 'off',

    // TypeScript disallows the use of <Type> assertions in .tsx because of the similarity with JSX's syntax,
    // which makes it impossible to parse.
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-angle-bracket-type-assertion.md
    'typescript/no-angle-bracket-type-assertion': 'error',

    // Use of the Array constructor to construct a new array is generally discouraged in favor of array literal
    // notation because of the single-argument pitfall and because the Array global may be redefined
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-array-constructor.md
    'typescript/no-array-constructor': 'error',

    // This rule aims to ensure that only meaningful interfaces are declared in the code
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-empty-interface.md
    // disabled as it's perfectly reasonable to have empty props type for a react component
    'typescript/no-empty-interface': 'off',

    // This rule goes doesn't allow any types to be defined
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-explicit-any.md
    // this is on to discourage it - it can be specifically disabled in code if there's a valid use case
    'typescript/no-explicit-any': 'error',

    // This rule aims to standardise the way modules are declared
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-namespace.md
    'typescript/no-namespace': [
        'error',
        {
            allowDeclarations: false,
            allowDefinitionFiles: true,
        },
    ],

    // Using non-null assertions cancels the benefits of the strict null-checking mode
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-non-null-assertion.md
    'typescript/no-non-null-assertion': 'off',

    // This rule disallows the use of parameter properties in constructors,
    // forcing the user to explicitly declare all properties in the class.
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-parameter-properties.md
    'typescript/no-parameter-properties': 'error',

    // Does not allow the use of /// <reference /> comments.
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-triple-slash-reference.md
    'typescript/no-triple-slash-reference': 'warning',

    // Disallow the use of type aliases
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-type-alias.md
    'typescript/no-type-alias': 'off',

    // Ensures that TS-specific constructs, such as implemented interfaces, are not erroneously flagged as unused.
    // This rule only has an effect when the no-unused-vars core rule is enabled
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-unused-vars.md
    'typescript/no-unused-vars': 'error',

    // Disallow the use of variables before they are defined
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-use-before-define.md
    'typescript/no-use-before-define': 'error',

    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/prefer-namespace-keyword.md
    'typescript/prefer-namespace-keyword': 'off',

    // Require consistent spacing around type annotations
    // https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/type-annotation-spacing.md
    'typescript/type-annotation-spacing': [
        'error',
        {
            before: true,
            after: true,
        },
    ],
}
