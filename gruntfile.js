"use strict";

module.exports = function(grunt) {

  grunt.loadTasks('./tasks');

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
};
