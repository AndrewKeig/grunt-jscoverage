grunt-jscoverage
================

Grunt task for jscoverage; which will parse your source code and generate an instrumented version allowing testing tools to generate code coverage reports.

[![NPM stats](https://nodei.co/npm/grunt-jscoverage.png?downloads=true)](https://nodei.co/npm/grunt-jscoverage/)

## Install

Install npm package

    npm install grunt-jscoverage --save-dev

Add this line to your project's Gruntfile:

    grunt.loadNpmTasks("grunt-jscoverage");


## Configure

**Note:** jscoverage will delete contents of the output directory, if one exists, before attempting to parse source files.

```javascript
grunt.initConfig({
  jscoverage: {
    lib: {
      src: 'lib',
      dest: 'lib-cov'
    },
    boo: {
      src: 'boo',
      dest: 'boo-cov'
    },
    options: {
      exclude: ['you.js', 'meow']
    }
  }
});
```

The `exclude` option accepts strings, regexes and arrays of them.

## Run

```
grunt jscoverage
```
