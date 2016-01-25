[![npm](https://img.shields.io/npm/v/start-clean.svg?style=flat-square)](https://www.npmjs.com/package/start-eslint)
[![travis](http://img.shields.io/travis/start-runner/clean.svg?style=flat-square)](https://travis-ci.org/start-runner/clean)
[![deps](https://img.shields.io/gemnasium/start-runner/clean.svg?style=flat-square)](https://gemnasium.com/start-runner/clean)

Clean task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -S start-clean
```

## Usage

```js
// tasks/index.js
import clean from 'start-clean';

export const build = [
    ...
    clean('build/'),
    ...
];
```

```js
// package.json
"scripts": {
  "task": "babel-node node_modules/.bin/start tasks/",
  "build": "npm run task build"
}
```

## Arguments

`clean(patterns)`

* `patterns` – minimatch patterns, see ["del" package](https://github.com/sindresorhus/del#patterns)
