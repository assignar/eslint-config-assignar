.PHONY: build
build:
	@yarn tsc -p ./packages/eslint-config-assignar-base/tsconfig.json
	@yarn tsc -p ./packages/eslint-config-assignar-graphql/tsconfig.json
	@yarn tsc -p ./packages/eslint-config-assignar-node/tsconfig.json
	@yarn tsc -p ./packages/eslint-config-assignar-react/tsconfig.json

lint:
	@yarn lint

.PHONY: show-unused
show-unused:
	@echo base...
	@npx eslint-find-rules ./packages/eslint-config-assignar-base/dist/index.js --unused
	@echo Done
	@echo graphql...
# no core as the graphql package is intended to be standalone
	@npx eslint-find-rules ./packages/eslint-config-assignar-graphql/dist/index.js --unused --no-core
	@echo Done
	@echo node...
	@npx eslint-find-rules ./packages/eslint-config-assignar-node/dist/index.js --unused
	@echo Done
	@echo react...
	@npx eslint-find-rules ./packages/eslint-config-assignar-react/dist/index.js --unused
	@echo Done

.PHONY: ci
ci:
# build first because the lint is based off this package!
	@make build
# make sure there are no lint errors
	@make lint
# make sure there are no unused rules in any package
	# show-unused
	@make show-unused

.PHONY: regenerate-types
regenerate-types:
	@yarn ts-node -P ./scripts/tsconfig.json --files ./scripts/generateTypes.ts
