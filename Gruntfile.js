// Grunt file

// 'grunt' runs default build tasks
    // concatenates and minifies js/main.js with Uglify via Requirejs r.js file
// 'grunt jekyll' runs 'jekyll serve --watch --port 4000 --baseurl  ""' and regenerates _site upon saved changes
// 'grunt watch' concatenates and minifies CSS via compass

/*
TODO: need to add html minify for deployment - https://github.com/gruntjs/grunt-contrib-htmlmin
*/

module.exports = function(grunt) {

// Load the plugin(s)
grunt.loadNpmTasks('grunt-contrib-requirejs');
grunt.loadNpmTasks('grunt-jekyll');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-imagemin');

// Initialize Grunt
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    requirejs: {
      compile: {
        options: {
          mainConfigFile: 'js/main.js',
          baseUrl: 'js',
          name: 'main',
          out: 'js/main.min.js'
          /*
          TODO: call this file in production
          */
        }
      }
    },

    jekyll: {
      server: {
        server : true,
        watch: true,
        baseurl: ' "" ',
        server_port : 4000
      },
      config: '_config.yml' // Jekyll config file is located in project root
    },

    compass: {
      dist: {
        options: {
          config: 'config.rb' // compass config file is located in project root
        }
      }
    },

    imagemin: {
        all: {
            options: {
                optimizationLevel: 2
            },
            files: [{
                expand: true,
                cwd: 'temp/',
                src: ['images/*.{png,jpg,jpeg}'],
                dest: 'images/test'
            }]
        }
    },

    watch: {
      sass: {
        files: ['scss/*.scss'],
        tasks: ['compass']
      }
    }

  });


  // Default task(s).
  grunt.registerTask('default', ['requirejs', 'imagemin']);

};
