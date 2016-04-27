module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

  convert: {
    options: {
      explicitArray: false,
    },
    csv2json: {
      src: ['departments.csv'],
      dest: 'departments.json'
    }
  }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-convert');

  // Default task(s).
  grunt.registerTask('default', ['convert']);

};