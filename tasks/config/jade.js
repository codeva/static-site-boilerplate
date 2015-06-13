var Path = require( "path" );

module.exports = function (grunt) {

  grunt.config.set('jade', {
    dev: {
      options: {
        pretty: true,
        data: function(dest, src) {
          return readContext();
        }
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
          pretty: false,
          data: function(dest, src) {
            return readContext();
          }
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

var readContext = function() {
  globalContext = require( Path.join( process.cwd(), "context/global.json" ) );
  return globalContext;
}