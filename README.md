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

```javascript
grunt.initConfig({
  jscoverage: {
    src: {
      expand: true,
      cwd: 'src/',
      src: ['**/*.js'],
      dest: 'src-cov/',
      ext: '.js',
    },
    otherstuff: {
      expand: true,
      cwd: 'otherstuff/',
      src: ['**/*.js'],
      dest: 'otherstuff-cov/',
      ext: '.js',
    },
    options: {
      // custom options
    }
  }
});
```

See [Grunt docs](http://gruntjs.com/configuring-tasks) for detailed explanation.

Options will be passed to jscoverage as is. Unfortunately, jscoverage doesn't provide any documentation about its programmatic API, so take a look at function `processFile()` in its file [`index.js`](https://github.com/fishbar/jscoverage/blob/master/index.js) for details.


## Run

```
grunt jscoverage
```
