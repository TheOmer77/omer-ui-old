# Omer UI

A React component library for use in my personal projects. This readme is probably bad & I will change it later.

- The package itself is written in [TypeScript](https://www.typescriptlang.org/), uses [Rollup](https://rollupjs.org/) as a bundler and [Jest](https://jestjs.io/) for testing.
- The documentation site is powered by [Next.js](https://nextjs.org/) and [Nextra](https://nextra.site/).
- Additionally, [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are included.

## Scripts

### `npm run dev`

Runs both the `build:watch` & `docs` scripts at once, building the library in watch mode while also running the docs site at [http://localhost:3000](http://localhost:3000).

### `npm run build`

Builds the library to the `dist` folder, within the package directory.

### `npm run build:watch`

Same as `build`, but runs in watch mode. This means any change to the source files in `src` will trigger a rebuild.

### `npm run docs`

Runs the documentation site at [http://localhost:3000](http://localhost:3000). The page will auto-update as you edit files within `docs`.

### `npm run docs:build`

Builds the docs site as static files to the `dist` folder within `docs`.

### `npm run docs:lint`

Lints all docs files using ESLint.

### `npm run format`

Formats all files using Prettier.

### `npm run lint`

Lints all packages files using ESLint.

### `npm test`

Runs all test in the project.
