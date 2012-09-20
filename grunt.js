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
      compress: {
        src: ['test/all.css'],
        dest: "test/all.test.css",
        compress: 'csso',
        base64: 15,
        errors: "alert"
        // errors: {
        //   includes: 'alert',
        //   resources: 'alert',
        //   processors: 'alert'
        // }
      },
      raw: {
        src: ['test/all.css'],
        dest: "test/all-raw.test.css",
        errors: {
          includes: 'error',
          resources: 'error',
          processors: 'error'
        }
      }
    },
    watch: {
      scripts: {
        files: '<config:lint.files>',
        tasks: 'default'
      },
      css: {
        files: ['test/**/*.css', 'test/**/*.styl'],
        tasks: 'styletto'
      }
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
