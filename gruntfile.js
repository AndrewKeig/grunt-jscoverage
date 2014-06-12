"use strict";

module.exports = function(grunt) {

  grunt.loadTasks('./tasks');

  grunt.initConfig({
    jscoverage: {
      tasks: {
        expand: true,
        cwd: 'tasks/',
        src: ['**/*.js'],
        dest: 'tasks-cov/',
        ext: '.js',
      },
      options: {
        // empty
      }
    }
  });
};
