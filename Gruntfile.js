module.exports = function (grunt) {

  "use strict";

  // this saves us having to load each plugin individually
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({

      pkg: grunt.file.readJSON("package.json"),

    

    // List of available tasks
    grunt.registerTask("default", []);
    grunt.registerTask("build", ["sftp-deploy"]);
    grunt.loadNpmTasks('sftp-deploy');
  }
  'sftp-deploy': {
    build: {
      auth: {
        host: '178.62.115.200',
        // port: 22,
        authKey: 'key1'
      },
      cache: 'sftpCache.json',
      src: '/path/to/source/folder',
      dest: '/path/to/destination/folder',
      exclusions: ['/path/to/source/folder/**/.DS_Store', '/path/to/source/folder/**/Thumbs.db', 'dist/tmp'],
      serverSep: '/',
      concurrency: 4,
      progress: true
    }
}
}
