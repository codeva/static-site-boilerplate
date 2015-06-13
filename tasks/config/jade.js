module.exports = function (grunt) {

  grunt.config.set('jade', {
    options: {
      pretty: true
    },
    files: {
      expand: true,
      src: "**/*.jade",
      dest: "dist/",
      cwd: "jade",
      ext: '.html'
    }
  });

  grunt.loadNpmTasks( "grunt-contrib-jade" );
};
