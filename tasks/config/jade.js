var context = require( "../util/context" );

module.exports = function (grunt) {

  pages = [
    "index.jade"
  ]

  grunt.config.set('jade', {
    dev: {
      options: {
        pretty: true,
        data: function(dest, src) {
          context = context.readContext();
          context.livereload = true;
          return context;
        }
      },
      files: [{
        expand: true,
        src: pages,
        dest: "dist/",
        cwd: "jade",
        ext: '.html'
      }],
      prod: {
        options: {
          pretty: false,
          data: function(dest, src) {
            return readContext();
          }
        },
        files: [{
          expand: true,
          src: pages,
          dest: "dist/",
          cwd: "jade",
          ext: '.html'
        }]
      }
    }
  });

  grunt.loadNpmTasks( "grunt-contrib-jade" );
};
