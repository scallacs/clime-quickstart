# Clime CLI Quickstart

[![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url]

- filter commands in directory
- Validators

## Features

* **Developping**: TODO
    * Latest typescript version
    * Multiple tsconfig files
* **Testing**: mocha/chai for testing
    * ts-node for on-the-fly test compilation
    * code coverage with istanbul
* **Publishing** proper .npmignore so published module only has the necessary sources

## Starting a new project

* git clone the repository
* remove .git
* npm install

### Build

`npm run build`

### Test 

- `npm run test` - Tests
- `npm run cover` - Tests with coverage

## Commands

All commands in [package.json](./package.json)

* **npm run build** - run tsc
* **npm run build:watch** - run tsc in watch-mode
* **npm run clean** - delete *build* directory
* **npm run lint** - runs tslint
* **npm test** - run mocha on all *.ts files in *test/*

* **npm run node** - run ts-node to get a REPL or run a script, e.g. a spike: npm run node src/spikes/consolespike.ts
* **npm run test:watch** - re-run mocha on all *.ts files in *test/* everytime a file changes

## Todo

- [] Add code coverage
- [] Custom typings

## License

MIT © [Stéphane Léonard]()


[npm-url]: https://www.npmjs.org/package/@dfordev/clime-quickstart
[npm-image]: http://img.shields.io/npm/v/@dfordev/clime-quickstart.svg?style=flat-square

[travis-url]: http://travis-ci.org/scallacs/clime-quickstart
[travis-image]: http://img.shields.io/travis/scallacs/clime-quickstart.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/scallacs/clime-quickstart
[coveralls-image]: https://img.shields.io/coveralls/scallacs/clime-quickstart/master.svg?style=flat-square