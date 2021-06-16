build:
	tsc && node --experimental-specifier-resolution=node \
		--experimental-modules \
		--no-warnings \
		--loader ts-node/esm \
		dist/build.js