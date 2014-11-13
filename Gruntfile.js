module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				separator: ";"
			},

			dist: {
				src: [
					'js/vendor/foundation.min.js',
					'js/build/<%= pkg.name %>.js'
				],
				dest: 'js/dist/<%= pkg.name %>.js'
			}

		},


		browserify: {
			options: {
				//transform: [ require('grunt-react').browserify ]
			},
			default: {
				src: ['js/src/**/*.js'],
				dest: 'js/build/<%= pkg.name %>.js'
			}
		},


		watch: {

			dist: {
				files: ['<%= concat.dist.src %>'],
				tasks: ['concat']
			},

			js: {
				files: ['js/src/**/*.js'],
				tasks: ['browserify']
			},


			grunt: {
				files: ["Gruntfile.js"]
			},

			sass: {
				files: ['scss/**/*.scss'],
				tasks: ['sass:dist']
			},

			css: {
				files: ['css/**/*.css'],
				options: {
					livereload: true
				}
			}

		},

		sass: {
			options: {
				sourceMap: true,
				includePaths: [
					require('node-bourbon').includePaths
				]
			},

			dist: {
				files: {
					'css/style.css': 'scss/style.scss'
				}
			}
		}

	});

	grunt.registerTask('default', ['sass:dist', 'watch']);
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');

};
