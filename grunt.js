// Example grunt.js using styletto task.

module.exports = function(grunt) {

  grunt.loadTasks("grunt-styletto");

  // Project configuration.
  grunt.initConfig({
    styletto: {
      config: {
        "input": "examples/all.css",
        "output": "examples/__all.css",
        "compress": "csso",
        "base64": 15000,
        "resolveFrom": ""
      }
    },
  });

  // Default task (only for this example).
  grunt.registerTask("default", "styletto");

};