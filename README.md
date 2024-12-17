[![npm version](https://img.shields.io/npm/v/@itrocks/app-dir?logo=npm)](https://www.npmjs.org/package/@itrocks/app-dir)
[![npm downloads](https://img.shields.io/npm/dm/@itrocks/app-dir)](https://www.npmjs.org/package/@itrocks/app-dir)
[![GitHub](https://img.shields.io/github/last-commit/itrocks-ts/app-dir?color=2dba4e&label=commit&logo=github)](https://github.com/itrocks-ts/app-dir)
[![issues](https://img.shields.io/github/issues/itrocks-ts/app-dir)](https://github.com/itrocks-ts/app-dir/issues)
[![discord](https://img.shields.io/discord/1314141024020467782?color=7289da&label=discord&logo=discord&logoColor=white)](https://discord.gg/WFPJjmUx)

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
