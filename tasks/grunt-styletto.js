/*
 * styletto task for grunt
 * Copyright (c) 2012
 * This work is public domain.
 */

module.exports = function(grunt) {

  var styletto = require("styletto");

  grunt.registerMultiTask('styletto', 'Compile Stylus files with styletto.', function() {
    // this.target === the name of the target
    // this.data === the target's value in the config object
    // this.name === the task name
    // this.args === an array of args specified after the target on the command-line
    // this.flags === a map of flags specified after the target on the command-line
    // this.file === file-specific .src and .dest properties
    var files = grunt.file.expandFiles(this.file.src);
    var options = {
      input: files,
      output: this.file.dest,
      compress: this.data.compress,
      base64: this.data.base64,
      path: this.data.path || "",
      errors: this.data.errors || "alert",
      'errors-processors': this.data.errors.processors || "alert",
      'errors-includes': this.data.errors.includes || "alert",
      'errors-resources': this.data.errors.resources || "alert"
    };
    var errorLevel = this.data.errors;
    if (errorLevel === "alert" || errorLevel === "error" || errorLevel === "ignore") {
      options['errors-processors'] = errorLevel;
      options['errors-includes'] = errorLevel;
      options['errors-resources'] = errorLevel;
    }
    if (this.data.resolveFrom) {
      grunt.warn('You are using old styletto config in grunt.js file. Please update styletto, grunt-styletto and use latest grunt.js config.');
    }
    grunt.helper('styletto', options);
  });

  // options should have key "input" with list of files to process
  grunt.registerHelper('styletto', function(config) {
    styletto(config, function(err, success, css) {
      if (err) {
        if (!success) {
          grunt.log.error('\nFile was NOT saved because of following errors:\n\n' + err);
        } else if (!css) {
          grunt.log.error('\n' + err + '\nFile was saved to "' +config.output + '" with some warnings.\n');
        } else {
          grunt.log.error(err);
          grunt.log.writeln(css);
        }
      } else if (success) {
        if (!css) {
          grunt.log.writeln('\nFile was succesfully saved to ' + config.output + '\n');
        } else {
          grunt.file.write(config.output, css);
        }
      }
    });
  });

};
