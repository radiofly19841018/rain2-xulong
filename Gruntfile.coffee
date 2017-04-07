module.exports = (grunt)->
  'use strict'
  require("matchdep").filterAll("grunt-*").forEach grunt.loadNpmTasks

  grunt.initConfig
    includereplace:
      dev:
        options:
          includesDir: 'HTML'
          globals:
            ASSETS: ''
        files:[{
          expand: true
          dest: 'build/HTML/'
          cwd: 'HTML/'
          src:[
            '**/*.html'
            '!**/_*.hmtl'
          ]
        }]
      build:
        options:
          includesDir: 'HTML'
          globals:
            ASSETS: '@@ASSETS'
        files:[{
          expand: true
          dest: 'build/'
          cwd: 'HTML/'
          src:[
            '**/*.html'
            '!**/_*.hmtl'
          ]
        }]
      production:
        options:
          globals:
            ASSETS: 'http://www.sino-dragon.com'
        files:[{
          expand: true
          dest: 'build/'
          cwd: 'build/'
          src:[
            '**/*.html'
            '!**/_*.hmtl'
          ]
        }]
    filerev:
      images:
        files:[
          {
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif,svg}'],
            dest: 'build/images/'
          }
        ]
    filerev_assets:
      production:
        options:
          dest: './filerev.json'
          prettyPrint: true
    usemin:
      html: ['build/**/*.html']
      options:
        assetsDirs: './'
        revmap: './filerev.json'

    imagemin:
      production:
        files:[
          {
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif,svg}'],
            dest: 'images/'
          }
        ]
    jshint:
      options:
        jshintrc: true
      production: 'scripts/**/*.js'
    coffeelint:
      options:
        configFile: 'coffeelint.json'
      production: 'scripts/**/*.coffee'


  grunt.registerTask 'default',['includereplace:dev']
  grunt.registerTask 'files',['includereplace:build','filerev','filerev_assets']
  grunt.registerTask 'build',->
    webpackFilerev = grunt.file.readJSON 'webpack-assets.json'
    filerev = grunt.file.readJSON 'filerev.json'

    for own key,val of webpackFilerev
      filerev[key+'.js'] = val.js
      filerev[key+'.css'] = val.css

    for own key,val of filerev
      filerev['@@ASSETS/'+key] = val

    grunt.file.write './filerev.json',JSON.stringify(filerev)
    grunt.task.run 'usemin'
    grunt.task.run 'includereplace:production'

  grunt.registerTask 'test',['jshint','coffeelint']
