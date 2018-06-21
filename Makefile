.PHONY: build
build:
	@yarn tsc -p ./packages/eslint-config-assignar-base/tsconfig.json
	@yarn tsc -p ./packages/eslint-config-assignar-node/tsconfig.json
	@yarn tsc -p ./packages/eslint-config-assignar-react/tsconfig.json

lint:
	@yarn lint

.PHONY: show-unused
show-unused:
	@yarn eslint-find-rules ./packages/eslint-config-assignar-base/dist/index.js --unused
	@yarn eslint-find-rules ./packages/eslint-config-assignar-node/dist/index.js --unused
	@yarn eslint-find-rules ./packages/eslint-config-assignar-react/dist/index.js --unused

.PHONY: ci
ci:
	@make lint
	@make build
	@make show-unused

.PHONY: regenerate-types
regenerate-types:
	@yarn ts-node ./scripts/generateTypes.ts
