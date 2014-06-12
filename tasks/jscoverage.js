"use strict";

module.exports = function(grunt) {
  grunt.registerMultiTask("jscoverage", "Grunt task for jscoverage; which will parse your source code and generate an instrumented version allowing testing tools to generate code coverage reports", function() {
    var jscoverage = require('jscoverage');
    var options = this.options();
    this.files.forEach(function(file){
      file.src.forEach(function(source){
        jscoverage.processFile(source, file.dest, options);
      });
    });
  });
};
