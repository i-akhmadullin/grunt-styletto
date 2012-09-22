[![build status](https://secure.travis-ci.org/i-akhmadullin/grunt-styletto.png)](http://travis-ci.org/i-akhmadullin/grunt-styletto)
# grunt-styletto

[Grunt](https://github.com/cowboy/grunt) plugin for processing CSS with [Styletto](https://github.com/jetstyle/styletto)

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
    src: "blocks/style.css",
    dest: "blocks/__style.css",
    compress: "csso",
    base64: 15000,
    // possible values are: "error" , "alert", "ignore"
    errors: "alert",
    // same but with more control
    // errors: {
    //   imports: 'alert',
    //   resources: 'alert',
    //   processors: 'alert'
    // },

    // optional
    // path: "../"
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


[types_of_tasks]: https://github.com/cowboy/grunt/blob/master/docs/types_of_tasks.md