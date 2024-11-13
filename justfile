export PATH := "./node_modules/.bin:" + env_var('PATH')

build:
  rm -rf lib
  bun run build.js
  tsc

test:
  bun test --timeout 20000

test-only file:
  bun test {{file}}

pack:
  npm pack

install:
  bun install

publish: build
  npm publish
  perl -i -0pe "s/},\n  \"optionalDependencies\": {\n/,/" package.json
  jsr publish --allow-dirty
  git checkout -- package.json

format:
  bun format

lint:
  bun lint

benchmark:
  bun build --target=node --outfile=bench.js benchmarks.ts
  timeout 60s deno run --allow-read bench.js || true
  timeout 60s node bench.js || true
  timeout 60s bun run benchmarks.ts || true
  rm bench.js
