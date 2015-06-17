module.exports = function(grunt) {

  grunt.config.set('copy', {
    compile: {
      files: [
        {
          "expand": "true",
          "cwd": "img/",
          "src": [ "**/*.png", "**/*.jpg", "**/*.ico", "!**/*full*" ],
          "dest": "dist/img/",
          "filter": "isFile"
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-newer');
};
