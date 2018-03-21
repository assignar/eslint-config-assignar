module.exports = {
    'spellcheck/spell-checker': [
        'error',
        {
            comments: true,
            strings: true,
            identifiers: true,
            templates: true,
            lang: 'en_GB',
            skipWords: [

            ],
            skipIfMatch: [
                'http://[^s]*',
            ],
            skipWordIfMatch: [

            ],
            minLength: 2,
        }
    ]
}
