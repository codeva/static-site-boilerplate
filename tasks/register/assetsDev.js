module.exports = function (grunt) {

  grunt.registerTask("assetsDev", [
    "jade:dev",
    "bower"
  ]);

};
