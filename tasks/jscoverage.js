"use strict";

module.exports = function(grunt) {
  grunt.registerTask("jscoverage", "Grunt task for jscoverage; which will parse your source code and generate an instrumented version allowing testing tools to generate code coverage reports", function() {

  var done = this.async();
  var options = this.options();

  if (grunt.file.exists(options.outputDirectory)) grunt.file.delete(options.outputDirectory);

  var args2 = [];
  args2.push(options.inputDirectory);
  args2.push(options.outputDirectory);

  grunt.util.spawn({
      cmd: 'jscoverage',
      args: args2,
      opts: {
        stdio: 'inherit'
      }
    },
    function (error, result) {
      if (error) {
        grunt.log.error(result.stderr);
        done(false);
      }
      grunt.log.writeln(result.stdout);
      done();
    });
  });
};
