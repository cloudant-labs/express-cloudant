module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
        'assets/js/app.js', 
        'ddocs/*.js', 
        'routes/*.js',
        'Gruntfile.js',
        "app.js"
      ],
      options: {
        browser: true
      }
    },
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        // the files to concatenate
        src: [
          'assets/js/jquery.js',
          'assets/js/showdown.js',
          'assets/js/pouchdb.js',
          'assets/js/app.js'
        ],
        // the location of the resulting JS file
        dest: 'public/js/app.js'
      }
    },
    uglify: {
      build: {
        files: {
          'public/js/app.min.js': ['public/js/app.js']
        }
      }
    },
    cssmin: {
      minify: {
        files: {
          'public/css/style.css': ['assets/css/bootswatch.css', 'assets/css/custom.css']  
        }
      }
    },
    couchapp: require('./ddocs')
  });

  // Load plugins
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-couchapp');

  // Default task(s).
  grunt.registerTask('default', [
    'jshint',
    'concat',
    'uglify',
    'cssmin',
    'couchapp'
  ]);

};