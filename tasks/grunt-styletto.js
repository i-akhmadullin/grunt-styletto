/*
 * styletto task for grunt
 * Copyright (c) 2012-2013
 * This work is public domain.
 */

module.exports = function ( grunt ) {

    "use strict";

    var styletto = require( "styletto" );

    grunt.registerMultiTask( 'styletto', 'Compile Stylus files with styletto.', function () {

        var done = this.async(),
            options  = this.options({ path: process.cwd() }),
            files = this.files,
            beep = '\x07';


        var iteratorFunction = function ( f, callback ) {

            var config = options,
            start = Date.now(),
            end;

            config.src  = grunt.file.expand( f.src );
            config.dest = f.dest;

            if ( config.stylus && config.stylus.imports ) {

                config.stylus.imports = grunt.file.expand( config.stylus.imports );

            }

            if ( config.less && config.less.imports ) {

                config.less.imports = grunt.file.expand( config.less.imports );

            }

            styletto( config, function( err, result ) {

                end = ( Date.now() - start );

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

                callback();

            } );

        };

        grunt.util.async.forEach( files, iteratorFunction, function( err ) {

            done( err );

        } );

    });

};
