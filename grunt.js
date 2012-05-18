// Example grunt.js using styletto task.

module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({
    test: {
      files: ['test/**/*.js']
    },
    lint: {
      files: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js']
    },
    styletto: {
      config: {
        "input": "test/all.css",
        "output": "test/__all.css",
        "compress": "csso",
        "base64": 15000,
        "resolveFrom": ""
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {}
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');
  // Default task (only for this example).
  grunt.registerTask("default", "lint");

};