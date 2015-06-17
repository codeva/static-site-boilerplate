module.exports = function (grunt) {

  grunt.registerTask("assetsProd", [
    "jade:prod",
    "stylus:compile",
    "bower",
    "newer:copy"
  ]);

};
