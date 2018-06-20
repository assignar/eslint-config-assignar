module.exports = {
    rules: {
        // Verifies that require("…"), require.resolve(…), import "…" and export … from "…" ids match the case that is reported by a directory listing.
        'dependencies/case-sensitive': 'off',

        // Prevents cyclic references between modules
        'dependencies/no-cycles': 'error',

        // Checks that require("…"), require.resolve(…), import "…" and export … from "…" reference modules that exist.
        'dependencies/no-unresolved': 'off',

        // Ensures that modules are that are .json include their extension in the module id
        'dependencies/require-json-ext': 'off',
    },
}
