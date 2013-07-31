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
      dev: {
        options: {
          sassDir: 'scss',
          cssDir: 'css/test',
          outputStyle: 'expanded'
        }
      },

      prod: {
        options: {
          config: 'config.rb' // compass config file is located in project root
        }
      }
    },

    csslint: {
      options: {
          csslintrc: '.csslintrc' // get CSSLint options from .csslintrc file in project root
      },
      src: ['css/test/*.css']
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
        server_port: 4000
      },
      config: '_config.yml' // get Jekyll config options from _config.yml file in project root
    },

    requirejs: {
      prod: {
        options: {
          mainConfigFile: 'js/main.js',
          baseUrl: 'js',
          name: 'main',
          out: 'js/main.min.js' /* TODO: call this file in production */
        }
      }
    },

    watch: {
      sass: {
        files: ['scss/**/*.scss'],
        tasks: ['compass:prod']
      },
      livereload: {
        options: {
          livereload: true,
          debounceDelay: 2000
        },
        files: ['_site/css/global.css']
      }
    }

  });

  // Load the plugin(s)
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');

  // Default task(s).
  grunt.registerTask('default', ['requirejs', 'imagemin']);
  grunt.registerTask('test', ['requirejs', 'csslint']);
  grunt.registerTask('build', ['requirejs', 'imagemin']);

  grunt.registerTask('image', ['imagemin']);

};
