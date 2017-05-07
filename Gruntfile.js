module.exports = function(grunt){
    grunt.initConfig({
        responsive_images: {
              dev: {
                options: {
                  engine: 'im',
                  sizes: [{
                    width: 800,
                    suffix: '_large_1x',
                    quality: 30
                  },{
                    width: 600,
                    suffix: '_large_0x',
                    quality: 30 
                  },{
                    width: 1086,
                    suffix: '_large_2x',
                    quality: 30 
                  }]
                },

                /*
                You don't need to change this part if you don't change
                the directory structure.
                */
                files: [{
                  expand: true,
                  src: ['*.{gif,jpg,png}'],
                  cwd: 'original/',
                  dest: 'after_edit/'
                }]
              }
            },
    })
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('run',function(){
        console.log('running');
    })
    grunt.registerTask('default',['responsive_images']);
}