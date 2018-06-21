# lint-config-base
base ts/eslint configuration files for common configuration

## Developing

- `make build` - run a typescript build on each package
- `make lint` - lint the entire codebase
- `make show-unused` - scan the packages and their plugins to find any rules that haven't been defined
- `make regenerate-types` - generate the typescript definition files for all of the valid, non-deprecated rules
