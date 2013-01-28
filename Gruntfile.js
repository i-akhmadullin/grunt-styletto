// Example grunt.js using styletto task.

module.exports = function(grunt) {

    "use strict";

    // Project configuration.

    grunt.initConfig({
        styletto: {
            compress: {
                files: { 'test/all.css': 'test/all.test.css' },
                options: {
                    compress: false,
                    base64: 15,
                    errors: 'alert'
                }
            },
            raw: {
                src: ['test/all.css', 'test/includes-search.css'],
                dest: 'test/all-raw.test.css',
                options: {
                    errors: {
                        imports: 'error',
                        resources: 'error',
                        processors: 'error'
                    }
                }
            },
            options: {
                base64: false,
                compress: false
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'tasks/**/*.js'],
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
            }
        }
    });

    // Load local tasks.
    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task (only for this example).
    grunt.registerTask('default', [ 'jshint' ]);

};
