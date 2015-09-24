module.exports=function(grunt){
  grunt.initConfig({
    sass: {
      dist:{
        files: {
          'assets/stylesheets/src/land.css': 'assets/stylesheets/src/land.scss',
          'assets/stylesheets/src/about.css': 'assets/stylesheets/src/about.scss',
          'assets/stylesheets/src/blog.css': 'assets/stylesheets/src/blog.scss',
          'assets/stylesheets/src/culture.css': 'assets/stylesheets/src/culture.scss',
          'assets/stylesheets/src/awesome.css': 'assets/stylesheets/src/awesome.scss',
          'assets/stylesheets/src/contact.css': 'assets/stylesheets/src/contact.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['assets/stylesheets/src/*.scss'],
        tasks: ['sass','cssmin']
      }
    },
    cssmin: {
      target: {
        files: {
         'assets/stylesheets/app.min.css':
         [
         'assets/stylesheets/src/land.css',
         'assets/stylesheets/src/about.css',
         'assets/stylesheets/src/blog.css',
         'assets/stylesheets/src/culture.css',
         'assets/stylesheets/src/awesome.css',
         'assets/stylesheets/src/contact.css'
         ]
       }
     }
   }
 });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default',['sass','cssmin','watch:css']);
};  