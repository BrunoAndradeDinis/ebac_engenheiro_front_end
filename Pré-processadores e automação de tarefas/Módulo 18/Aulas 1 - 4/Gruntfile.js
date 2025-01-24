const { option } = require("grunt");

module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "main.css": "main.less",
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          "main.min.css": "main.less",
        },
      },
    },
    sass: {
      dist: {
        options: {
          style: "compressed",
        },
        files: {
          "main2.css": "main.scss",
        },
      },
    },
    concurrent: {
      target: ["OlaGrunt", "less", "sass", "tarefaDemorada"],
    },
  });

  grunt.registerTask("OlaGrunt", function () {
    const done = this.async();

    setTimeout(() => {
      console.log("Olá Grunt!");
      done();
    }, 3000);
  });

  grunt.registerTask("tarefaDemorada", function () {
    const done = this.async();

    setTimeout(() => {
      console.log("Olá eu sou a Tarefademorada!");
      done();
    }, 5000);
  });

  grunt.loadNpmTasks("grunt-contrib-less"); // garantindo que o grunt contrib esteja carregando.
  grunt.loadNpmTasks("grunt-contrib-sass"); // garantindo que o grunt contrib esteja carregando.
  grunt.loadNpmTasks("grunt-concurrent"); // garantindo que o grunt concurrent esteja carregando.

  grunt.registerTask("default", ["concurrent"]);
};
