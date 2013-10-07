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
            beep = '\x07';

        var iteratorFunction = function ( f, callback ) {

            var config = grunt.util._.clone( options ),
            start = Date.now(),
            end;

            config.src  = f.src;
            config.dest = f.dest;
            config.base64 = f.base64;

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

                        console.error( '\n' + err + '\nFile was saved to "' + config.dest + '" with some warnings. Done in ' + end + 'ms.' );

                    }

                }

                else if ( result.success ) {

                    console.log( '\nFile was succesfully saved to "' + config.dest + '". Done in ' + end + 'ms.' );

                }

                callback();

            } );

        };

        grunt.util.async.forEach( this.files, iteratorFunction, function( err ) {

            done( err );

        } );

    });

};
