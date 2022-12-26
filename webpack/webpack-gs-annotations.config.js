const path = require('path');

module.exports = {
    entry: './src/gs-index-annotations.js',
    output: {
	filename: 'mirador-with-annotations.js',
	library: 'mirador3WithAnnotations',
	path: path.resolve(__dirname, 'dist-gs-annotations'),
	publicPath: 'ext/structured-image/mirador3/dist/',
    },
};
