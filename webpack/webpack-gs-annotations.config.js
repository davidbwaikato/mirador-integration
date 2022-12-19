const path = require('path');

module.exports = {
    entry: './src/gs-index-annotations.js',
    output: {
	filename: 'mirador-with-annotations.js',
	library: 'mirador3WithAnnotations',
	path: path.resolve(__dirname, 'dist-gs-annotations'),
	publicPath: 'interfaces/intermuse/mirador3/dist/',
    },
};
