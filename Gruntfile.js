module.exports = function(grunt) {

    grunt.initConfig({

        concat : {
            options : {
                separator : '\n;\n',
            },
            dist : {
                src : [
                    'js/bower/jquery/dist/jquery.min.js',
                    'js/lib/ease.js',
                    'js/script.js'
                ],
                dest : 'main.js',
            },
        },
        watch : {
            files : [ 'js/**/*.js' ],
            tasks : [ 'concat' ]
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-concat' );

    grunt.registerTask( 'default', [ 'watch' ] );
};