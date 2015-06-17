module.exports = function (grunt) {

  grunt.registerTask("assetsDev", [
    "jade:dev",
    "stylus:compile",
    "bower",
    "newer:copy"
  ]);

};
