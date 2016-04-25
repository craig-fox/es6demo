module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify", {
                            plugins: ["transform-react-jsx", "transform-es2015-arrow-functions"],
                            presets: ["es2015", "react"]
                        }]
                    ]
                },
                files: {
                    "./build/bundle.js": ["./app/**/*.js"]
                }
            }
        },
        watch: {
            scripts: {
                files: ["./app/**/*.js"],
                tasks: ["browserify"]
            }
        }

    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["browserify"]);
}
