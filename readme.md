# start-clean

[![npm](https://img.shields.io/npm/v/start-clean.svg?style=flat-square)](https://www.npmjs.com/package/start-clean)
[![linux build](https://img.shields.io/travis/start-runner/clean/master.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/clean)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/clean/master.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/clean)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/clean/master.svg?style=flat-square)](https://codecov.io/github/start-runner/clean)
[![deps](https://img.shields.io/gemnasium/start-runner/clean.svg?style=flat-square)](https://gemnasium.com/start-runner/clean)

Clean task for [Start](https://github.com/start-runner/start).

## Install

```sh
npm install --save-dev start-clean
# or
yarn add --dev start-clean
```

## Usage

```js
import start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import clean from 'start-clean';

export const cleanBuild = () => start(reporter())(
  files('build/'),
  clean()
);
```

This task relies on array of files and provides the same, see [documentation](https://github.com/start-runner/start#readme) for details.
