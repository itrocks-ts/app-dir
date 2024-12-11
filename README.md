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
