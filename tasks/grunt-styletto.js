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
    var files = grunt.file.expandFiles( this.file.src );
    var options = {
      input:  this.file.src ,
      output: this.file.dest,
      compress: this.data.compress,
      base64: this.data.base64,
      resolveFrom: this.data.resolveFrom
    }

    files.forEach(function( filepath ) {
      var file = grunt.file.read( filepath );

      // skip empty files
      if (file.length) {
        grunt.helper('styletto', options);

        // Fail task if errors were logged.
        // if (this.errorCount) { return false; }

        // grunt.file.write(options.output, res);
      }
    });

  });

  // options should have key "input" with list of files to process
  grunt.registerHelper('styletto', function(options) {

    // grunt.log.writeln( options.input );
    styletto(options, options.resolveFrom, function(err, result) {
        if (err) { throw err; }
        else if (result) {
          // TODO return result string instead of saving file
          grunt.file.write(options.output, result);
        }
        else { grunt.log.writeln("\nFile: " + options.output.yellow + " saved!".green); }
    });
  });
  
};