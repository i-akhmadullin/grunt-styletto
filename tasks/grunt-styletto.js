/*
 * styletto task for grunt
 * Copyright (c) 2012
 * This work is public domain.
 */

module.exports = function(grunt) {

"use strict";

    var styletto = require("styletto");

    grunt.registerMultiTask('styletto', 'Compile Stylus files with styletto.', function() {

        var done = this.async();

        var options = this.data;

        options.src  = grunt.file.expand( this.data.src );
        options.dest = this.data.dest;
        options.path = this.data.path || process.cwd();

        if (this.data.resolveFrom) {
            grunt.warn('You are using old styletto config in grunt.js file. Please update styletto, grunt-styletto and use latest grunt.js config.');
        }

        var beep = '\x07'; // Beep!

        var start = Date.now();

        styletto( options, function( err, result ) {

            var end = ( Date.now() - start );

            if ( err ) {

                if ( !result.success ) {

                    console.error( '\nFile was NOT saved because of following errors:\n\n' + err );

                } else {

                    console.error( '\n' + err + '\nFile was saved to "' + options.output + '" with some warnings.\n\nDone in ' + end + 'ms.' );

                }

            }

            else if ( result.success ) {

                console.log( '\nFile was succesfully saved to ' + options.output + '\n\nDone in ' + end + 'ms.' );

            }

            done();

        } );

    });

};
