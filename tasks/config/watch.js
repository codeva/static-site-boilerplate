module.exports = function( grunt ) {

  grunt.config(
    "watch",
    {
      dev: {
        files: [
          "**/*.jade"
        ],
        tasks: [ "assetsDev" ],
        options: {
          interrupt: true,
          livereload: true
        }
      },
      prod: {
        files: [
          "**/*.jade"
        ],
        tasks: [ "assetsProd" ],
        options: {
          interrupt: true
        }
      }
    }
  );

  grunt.loadNpmTasks( "grunt-contrib-watch" );

}
