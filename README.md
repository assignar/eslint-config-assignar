# lint-config-base
base ts/eslint configuration files for common configuration

## Developing

Clone the repo, and then install the dependencies:
`yarn install && yarn lerna bootstrap`

Available Commands:
- `make build` - run a typescript build on each package
- `make lint` - lint the entire codebase
- `make show-unused` - scan the packages and their plugins to find any rules that haven't been defined
- `make regenerate-types` - generate the typescript definition files for all of the valid, non-deprecated rules

### Publishing

Make sure you `yarn global add @assignar/cli`.
Then run `assignar publish [major|minor|patch] [--rc] --lerna`
