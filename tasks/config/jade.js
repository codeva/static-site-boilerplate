var context = require( "../util/context" );

module.exports = function (grunt) {

  pages = [
    "index.jade",
    "about.jade"
  ];

  grunt.config.set('jade', {
    dev: {
      options: {
        pretty: true,
        data: function(dest, src) {
          ctx = context.readContext();
          ctx.livereload = true;
          return ctx;
        }
      },
      files: [{
        expand: true,
        src: pages,
        dest: "dist/",
        cwd: "jade",
        ext: '.html'
      }],
    },
    prod: {
      options: {
        pretty: false,
        data: function(dest, src) {
          return context.readContext();
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
  });

  grunt.loadNpmTasks( "grunt-contrib-jade" );
};
