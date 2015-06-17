module.exports = function( grunt ) {

  files = [
    "**/*.jade",
    "**/*.styl",
    "**/*.json",
    "**/*.html",
    "**/*.md",
    "**/*.js",
    "**/*.jpg",
    "**/*.png",
    "**/*.ico",
    "!dist/**/*"
  ]

  grunt.config(
    "watch",
    {
      dev: {
        files: files,
        tasks: [ "assetsDev" ],
        options: {
          interrupt: true,
          livereload: true
        }
      },
      prod: {
        files: files,
        tasks: [ "assetsProd" ],
        options: {
          interrupt: true
        }
      }
    }
  );

  grunt.loadNpmTasks( "grunt-contrib-watch" );

}
