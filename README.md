# grunt-styletto

[Grunt](https://github.com/gruntjs/grunt) plugin for processing CSS with [Styletto](https://github.com/jetstyle/styletto)

## Getting Started
Install styletto: `npm install styletto -g`  

Install plugin in your project directory with: `npm install grunt-styletto`  

Then load it from your own grunt.js file:

`grunt.loadNpmTasks('grunt-styletto');`

## Usage
Add styletto task in `grunt.js` file like this:
```
styletto: {
  all: {

    // optional params, @see for syntax and default settings https://github.com/jetstyle/styletto/blob/master/README.md
    options: {
      compress: "csso",
      base64: 1500,
      // same but with more control
      //base64: {
      //    limit: 1500,
      //    types: {
      //        'jpeg': 'image/jpeg'
      //    }
      //},
      stylus: {
          variables: { "ie": true },
          imports: [ 'mixin1.styl', 'mixin2.styl' ]
      },
      less: {
          variables: { "bg-color": "red" },
          imports: [ 'lesshat.less' ]
      },
      errors: "alert",
      // same but with more control
      // errors: {
      //   imports: 'alert',
      //   resources: 'alert',
      //   processors: 'alert'
      // },
      path: "../"
    }

    // path to input file or array of paths
    src: "blocks/style.css",

    // path to result file
    dest: "blocks/__style.css",

  }
},
```
Then you can run `grunt styletto` to compile `blocks/style.css` file with [styletto](https://github.com/jetstyle/styletto)  

## Documentation

This plugin provides only one task: `styletto`.  

This task is a [multi task][types_of_tasks], so you can run styletto multiple times with different configs, like so:  
  
```
styletto: {
  dev: {
    src: ['test/all.css'],
    dest: "test/__all.css",
    compress: 'csso',
    errors: "alert"
  },
  publish: {
    src: ['test/all.css'],
    dest: "publish/__deploy.css",
    compress: "yui",
    base64: 15000,
    errors: "alert"
  }
},
```
To run only one subtask run styletto from console like so: `grunt styletto:dev`  



## Contributing
Please use the issue tracker and pull requests.

## License
Copyright (c) 2012 ilya.akhmadullin  
Licensed under the MIT license.  


[types_of_tasks]: https://github.com/gruntjs/grunt/blob/master/docs/types_of_tasks.md
