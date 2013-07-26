// Grunt file

// 'grunt' runs default build tasks
    // concatenates and minifies js/main.js with Uglify via Requirejs r.js file
    // optimizes images
// 'grunt jekyll' runs 'jekyll serve --watch --port 4000 --baseurl  ""' and regenerates _site upon saved changes
// 'grunt watch' concatenates and minifies CSS via compass

/*
TODO: need to add html minify for deployment - https://github.com/gruntjs/grunt-contrib-htmlmin
*/

module.exports = function(grunt) {

// Initialize Grunt
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          config: 'config.rb' // compass config file is located in project root
        }
      }
    },

    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['css/*.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['css/*.css']
      }
    },

    imagemin: {
        all: {
            files: [{
              expand: true,
              cwd: 'images',
              src: ['*.{png,jpg, jpeg}'],
              dest: 'images'
            }]
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

    watch: {
      sass: {
        files: ['scss/**/*.scss'],
        tasks: ['compass']
      }
    }

  });

  // Load the plugin(s)
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['requirejs', 'imagemin']);
  grunt.registerTask('test', ['csslint']);
  grunt.registerTask('build', ['requirejs', 'imagemin']);

  grunt.registerTask('image', ['imagemin']);

};
