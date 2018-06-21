import * as fs from 'fs'
import * as path from 'path'

import getRuleFinder = require('eslint-find-rules')

const ruleFinder = getRuleFinder(path.resolve(__dirname, './all-plugins.json'))
const allRules = ruleFinder.getAllAvailableRules()

const rulesPerPlugin = {
    eslint: [],
} as Record<string, string[]>
allRules.forEach((rule) => {
    const split = rule.split('/')
    if (split.length > 1) {
        rulesPerPlugin[split[0]] = rulesPerPlugin[split[0]] || []
        rulesPerPlugin[split[0]].push(rule)
    } else {
        rulesPerPlugin.eslint.push(rule)
    }
})

const indent = '    '
const typesFile = [
    '// this file is auto-generated. Run `regenerate-types` to regenerate it.',
    '',
    'declare namespace Rules {',
    `${indent}type RuleString = 'off' | 'warn' | 'error'`,
    `${indent}type RuleType = RuleString | (RuleString | Record<string, any>)[]`,
    ...Object.keys(rulesPerPlugin).map((k) => {
        const interfaceCamel = k.replace(/(\-\w)/g, m => m[1].toUpperCase())
        const interfacePascal = interfaceCamel[0].toUpperCase() + interfaceCamel.substr(1)

        return [
            `export interface ${interfacePascal} {`,
            ...rulesPerPlugin[k].map((rule) => `${indent} '${rule}' : RuleType`),
            '}',
        ].map(s => `${indent}${s}`).join('\n')
    }),
    '}',
].join('\n')

fs.writeFileSync(path.resolve(__dirname, '../types/eslint-config.d.ts'), typesFile, 'utf8')
console.log('Successfully Written.')
