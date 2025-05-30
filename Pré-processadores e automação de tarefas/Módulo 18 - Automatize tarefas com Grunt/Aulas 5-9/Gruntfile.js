const { task } = require("grunt");
const { flatten } = require("lodash");

module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "dev/styles/main.css": "src/styles/main.less",
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          "dist/styles/main.min.css": "src/styles/main.less",
        },
      },
    },
    watch: {
      less: {
        files: ["src/styles/**/*.less"],
        tasks: ["less:development"],
      },
      html: {
        files: ["src/index.html"],
        tasks: ["replace:dev"],
      },
    },
    replace: {
      dev: {
        options: {
          patterns: [
            {
              match: "ENDERECO_DO_CSS",
              replacement: "./styles/main.css",
            },
            {
              match: "ENDERECO_DO_JS",
              replacement: "../src/scripts/main.js",
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ["src/index.html"],
            dest: "dev/",
          },
        ],
      },
      dist: {
        options: {
          patterns: [
            {
              match: "ENDERECO_DO_CSS",
              replacement: "./styles/main.min.css",
            },
            {
              match: "ENDERECO_DO_JS",
              replacement: "./scripts/main.min.js",
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ["prebuild/index.html"],
            dest: "dist/",
          },
        ],
      },
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        files: {
          // 1 - minificação
          // 2 - substituição
          "prebuild/index.html": "src/index.html",
        },
      },
    },
    clean: ["prebuild"],
    uglify: {
        target: {
          files: {
            // 1 - minificação
            // 2 - substituição
            "dist/scripts/main.min.js": "src/scripts/main.js",
          },
        },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less"); // garantindo que o grunt contrib esteja carregando.
  grunt.loadNpmTasks("grunt-contrib-watch"); // garantindo que o grunt contrib esteja carregando.
  grunt.loadNpmTasks("grunt-replace"); // garantindo que o grunt replace esteja carregando.
  grunt.loadNpmTasks("grunt-contrib-htmlmin"); // garantindo que o grunt htmlmin esteja carregando.
  grunt.loadNpmTasks("grunt-contrib-clean"); // garantindo que o grunt clean esteja carregando.
  grunt.loadNpmTasks("grunt-contrib-uglify"); // garantindo que o grunt uglify esteja carregando.

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", [
    "less:production",
    "htmlmin:dist",
    "replace:dist",
    "clean", "uglify"
  ]);
};
