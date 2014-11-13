module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
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
			dist: {
				files: {
					'css/style.css': 'scss/style.scss'
				}
			}
		}

	});

	grunt.registerTask('default', ['sass:dist', 'watch']);
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

};
