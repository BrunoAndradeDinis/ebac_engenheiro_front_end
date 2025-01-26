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
      html:{
        files: ["src/index.html"], // acompanha todas as edições no html e assim que é editado executa a task a seguir, para que o replace sempre esteja atualizado.
        tasks: ["replace:dev"] // através da task replace.dev
      }
    },
    replace: {
      dev: { // ambiente
        options: {
          patterns: [
            {
              match: "ENDERECO_DO_CSS", // string que ele vai encontras
              replacement: "./styles/main.css", // a informação que ele vai replicar
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ["src/index.html"], // arquivo raiz, no qual onde a substituição será feita
            dest: "dev/", // o destino no qual será enviado a replica
          },
        ],
      },
      dist: { // ambiente
        options: {
          patterns: [
            {
              match: "ENDERECO_DO_CSS", // string que ele vai encontras
              replacement: "./styles/main.min.css", // a informação que ele vai replicar
            },
          ],
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ["prebuild/index.html"], // arquivo raiz, no qual onde a substituição será feita
            dest: "dist/", // o destino no qual será enviado a replica
          },
        ],
      },
    },
    htmlmin: {
      dist: { // ambiente de produção
        options: { 
          removeComments: true, // remove os comentarios
          collapseWhitespace: true, // remove os espaços em branco
        },
        files: {
          // 1 - minificação - valor
          // 2 - substituição - chave - destino para a pasta temporária
          "prebuild/index.html": "src/index.html",
        },
      },
    },
    clean: ["prebuild"],
  });

  grunt.loadNpmTasks("grunt-contrib-less"); // garantindo que o grunt contrib esteja carregando.
  grunt.loadNpmTasks("grunt-contrib-watch"); // garantindo que o grunt contrib esteja carregando.
  grunt.loadNpmTasks("grunt-replace"); // garantindo que o grunt replace esteja carregando.
  grunt.loadNpmTasks("grunt-contrib-htmlmin"); // garantindo que o grunt htmlmin esteja carregando.
  grunt.loadNpmTasks("grunt-contrib-clean"); // garantindo que o grunt clean esteja carregando.

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", [
    "less:production",
    "htmlmin:dist",
    "replace:dist",
    "clean",
  ]);
};
