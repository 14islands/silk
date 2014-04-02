module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        /*autoprefixer: {
            style: {
                src: 'css/style.css',
                dest: 'css/style.css'
            }
        },

        notify: {
          watch: {
            options: {
                message: 'SASS compiled'
            }
          }
        },*/

        coffee: {
            compile: {
                files: {
                    'silk.js': [
                        'raf.coffee',
                        'silk.coffee'
                    ] 
                }
            }
        },

       /* sass: {
            dev: {
                options: {
                    style: 'uncompressed'
                },
                files: {
                    'css/style.css': 'css/style.scss'
                }
            },
            dist: {
              options: {
                style: 'compressed'
              },
              files: {
                'css/style.css': 'css/style.scss'
              }
            }
        },*/

        watch: {
            options: {
              livereload: false,
            },
            scripts: {
                files: ['*.coffee'],
                tasks: ['coffee:compile']
            }
        }

    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['watch']);
};