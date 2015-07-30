module.exports = function(grunt) {
		grunt.initConfig({
				watch: {
						style: {
								files: ['**/*.sass'],
								tasks: ['compass:dev'],
								options: {
										spawn: false,
								},
						},
						jade: {
							files: ['**/*.jade'],
							tasks: ['jade:compile']
						},
						clean: {
							files: ['**/*.html'],
							tasks: ['clean:html']
						}

				},
				compass: {
						dev: {
								options: {
										sassDir: 'assets/sass',
										cssDir: 'assets/css',
										imagesPath: 'assets/img',
										noLineComments: false,
										sourcemap: true,
										outputStyle: 'compressed'
								}
						}
				},
				connect: {
						server: {
								options: {
										port: 9001
								}
						}
				},
				jade: {
					compile: {
						options: {
							data: {
								debug: true,
								timestamp: "<%= new Date().getTime() %>"
							},
							client: false,
							pretty: true
						},
						files: [ {
							cwd: "",
							src: "**/*.jade",
							dest: "",
							expand: true,
							ext: ".html"
						} ]
					}
				},
				clean: {
					html: ["jade.resources/**/*.html"]
				}
		});
		grunt.loadNpmTasks('grunt-contrib-clean');
		grunt.loadNpmTasks('grunt-contrib-compass');
		grunt.loadNpmTasks('grunt-contrib-sass');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-jade');
		grunt.loadNpmTasks('grunt-contrib-connect');
};
