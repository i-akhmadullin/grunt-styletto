/*
 * styletto task for grunt
 * Copyright (c) 2012
 * This work is public domain.
 */

module.exports = function (grunt) {

    "use strict";

    var styletto = require("styletto");

    grunt.registerMultiTask('styletto', 'Compile Stylus files with styletto.', function () {

        var done = this.async();

        var options  = grunt.utils._.clone(this.data);

        options.src  = grunt.file.expandFiles( this.file.src );
        options.dest = this.file.dest;
        options.path = this.data.path || process.cwd();

        if (options.stylus && options.stylus.imports) {
            options.stylus.imports = grunt.file.expandFiles( options.stylus.imports );
        }

        if (options.less && options.less.imports) {
            options.less.imports = grunt.file.expandFiles( options.less.imports );
        }

        console.log(options);

        var beep = '\x07'; // Beep!

        var start = Date.now();

        styletto( options, function( err, result ) {

            var end = ( Date.now() - start );

            if ( err ) {

                if ( !result.success ) {

                    console.error( '\nFile was NOT saved because of following errors:\n\n' + err );

                } else {

                    console.error( '\n' + err + '\nFile was saved to "' + options.dest + '" with some warnings.\n\nDone in ' + end + 'ms.' );

                }

            }

            else if ( result.success ) {

                console.log( '\nFile was succesfully saved to ' + options.dest + '\n\nDone in ' + end + 'ms.' );

            }

            done();

        } );

    });

};
