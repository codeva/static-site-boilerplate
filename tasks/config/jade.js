module.exports = function (grunt) {

  grunt.config.set('jade', {
    dev: {
      options: {
        pretty: true
      },
      files: [{
        expand: true,
        src: "**/*.jade",
        dest: "dist/",
        cwd: "jade",
        ext: '.html'
      }],
      prod: {
        options: {
          pretty: false
        },
        files: [{
          expand: true,
          src: "**/*.jade",
          dest: "dist/",
          cwd: "jade",
          ext: '.html'
        }]
      }
    }
  });

  grunt.loadNpmTasks( "grunt-contrib-jade" );
};
