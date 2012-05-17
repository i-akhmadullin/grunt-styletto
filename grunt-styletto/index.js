/*
 * styletto task for grunt
 * Copyright (c) 2012 
 * This work is public domain.
 */

module.exports = function(grunt) {

  var styletto = require("styletto");

  grunt.registerTask('styletto', "Compile Stylus files with styletto.", function(target) {
    this.requiresConfig('styletto.config');

    var stylettoConfig = grunt.config('styletto.config');
    var config = target ? [target] : stylettoConfig;
    var resolveFrom = config.resolveFrom;

    styletto(config, resolveFrom, function(err, result) {
        if (err) throw err;
        else if (result) {
          grunt.file.write(this.target, result);
        }
        else console.log("\nFile: " + config.output + " saved!");
    });
  });

// grunt.registerMultiTask("styletto", "Compile Stylus files with styletto.", function() {
// });
};