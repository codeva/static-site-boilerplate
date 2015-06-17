module.exports = function(grunt) {

  grunt.config.set('stylus', {
    compile: {
      files: {
        'dist/css/main.css': 'stylus/main.styl'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
};
