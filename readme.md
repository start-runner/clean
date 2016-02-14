# start-clean

[![npm](https://img.shields.io/npm/v/start-clean.svg?style=flat-square)](https://www.npmjs.com/package/start-clean)
[![travis](http://img.shields.io/travis/start-runner/clean.svg?style=flat-square)](https://travis-ci.org/start-runner/clean)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/clean.svg?style=flat-square)](https://codecov.io/github/start-runner/clean)
[![deps](https://img.shields.io/gemnasium/start-runner/clean.svg?style=flat-square)](https://gemnasium.com/start-runner/clean)
[![gitter](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-00d06f.svg?style=flat-square)](https://gitter.im/start-runner/start)

Clean task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -S start-clean
```

## Usage

```js
import start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import clean from 'start-clean';

export function cleanBuild() {
    return start(reporter())(
        files('build/'),
        clean()
    );
}
```

This task relies on array of files, see [documentation](https://github.com/start-runner/start#readme) for details.
