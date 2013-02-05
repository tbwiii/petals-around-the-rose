/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0'
    },
    watch: {
      files: ['sass/screen.scss'],
      tasks: ['compass:dist']
    },
    compass: {                 // Task
      dist: {
        src:  'sass',
        dest: 'css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-compass');

  // Default task.
  grunt.registerTask('default', 'watch');

};
