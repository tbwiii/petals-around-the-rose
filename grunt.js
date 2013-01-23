/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
    },

    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
    },
    qunit: {
      files: ['test/**/*.html']
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:lib/FILE_NAME.js>'],
        dest: 'dist/FILE_NAME.js'
      }
    },
    min: {
      dist: {
        src: 'scripts/petals.js',
        dest: 'scripts/roll.min.js'
      }
    },
    watch: {
      files: ['sass/screen.scss'],
      tasks: ['compass:dist']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {}
    },
    uglify: {},

    compass: {                 // Task
      dist: {
        src:  'sass',
        dest: 'css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-compass');

  // Default task.
  grunt.registerTask('default', 'lint qunit concat min');

};
