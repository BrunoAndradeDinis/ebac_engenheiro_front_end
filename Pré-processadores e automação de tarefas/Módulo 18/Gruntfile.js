module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
  });

  grunt.registerTask("OlaGrunt", function () {
    const done = this.async();

    setTimeout(() => {
      console.log("Olá Grunt!");
      done();
    }, 3000);
  });

  grunt.registerTask("default", ["OlaGrunt"]);
};
