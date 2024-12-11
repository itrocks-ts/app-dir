[![view on npm](https://badgen.net/npm/v/@itrocks/app-dir)](https://www.npmjs.org/package/@itrocks/app-dir)
[![npm module downloads](https://badgen.net/npm/dt/@itrocks/app-dir)](https://www.npmjs.org/package/@itrocks/app-dir)
[![GitHub repo dependents](https://badgen.net/github/dependents-repo/itrocks-ts/app-dir?label=dependents)](https://github.com/itrocks-ts/app-dir/network/dependents?dependent_type=REPOSITORY)
[![Report issues on GitHub](https://badgen.net/github/open-issues/itrocks-ts/app-dir?icon=github)](https://github.com/itrocks-ts/app-dir/issues)
[![Get support on Discord](https://badgen.net/discord/members/kbMjUq5F?icon=discord)](https://discord.gg/kbMjUq5F)

# app-dir

A Node.js library to determine the root directory of your project.

## Usage

### Installation

```sh
npm i @itrocks/app-dir
```

### Example

```ts
import appDir from '@itrocks/app-dir'
console.log(appDir)
// Prints the root directory of your main application
```

## How it works

This library determines your application's root directory by resolving the `./node_modules/@itrocks/app-dir/app-dir.js`
path relative to your project.
It uses this relative path to calculate the full path to your application.
