grunt-jscoverage
==============

Grunt task for jscoverage; which will parse your source code and generate an instrumented version allowing testing tools to generate code coverage reports.

This module requires node-jscoverage in order to function:

https://github.com/visionmedia/node-jscoverage

[https://github.com/visionmedia/node-jscoverage](https://github.com/visionmedia/node-jscoverage)


## Installation

Install npm package

    npm install grunt-jscoverage

Add this line to your project's `Gruntfile.js`:

    grunt.loadNpmTasks("grunt-jscoverage");


## Usage

````
grunt.initConfig({
    jscoverage: {
      options: {
        inputDirectory: 'lib',
        outputDirectory: 'lib-cov'
      }
    }
  });
````

````
grunt jscoverage
>> Use default config/development.json

````

