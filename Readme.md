# Serverless Template for nodeJs
This repository is a work template updated for a serverless.com project based on nodeJS

The goal is to provide an easay to install repository allowing dev to create their project with the capabilities tor run localy the function. Also this projesct provide the main starting point for the developer in therm of test, lint, git commit.

## Platform

This tamplate had been tested on OSX 10.14.2 only. Happy to test it on other system


## Dependencies
To make this tamplate work we need also as basic git, nvm (node -> stable (-> v10.15.0) (default))

Because we are using Serverless this is a mandatory intalation, I plan to remove Jest of the global install too.

``
$ npm install -g serverless jest 
``

## install 
To installl the example of the template, the following steps are mandatory.
This template will install the component below.

### Install
``
$ npm install
``

``
$ npm czinit
``
``
$ npm test
``
## Develop
``
$npm run dev
``
## Dommit 
``
$git cz
``
## Release
``
$npm run release
``


...

## Change log

The change log can be found on the [Releases page](https://github.com/Iragne/Template-Serverless/releases).

## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](Contributing.md).

## Authors and license

[Jean-alexandre Iragne](https://github.com/Iragne) and [contributors](https://github.com/Iragne/Template-Serverless/graphs/contributors).

MIT License, see the included [License.md](License.md) file.

