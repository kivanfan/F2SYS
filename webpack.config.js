var path = require('path');
var SRC_PATH = path.resolve(__dirname,'public');

module.exports = {
    entry: './resources/js/main.js',
    output: {
        path:SRC_PATH+'/js',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-react']
                    }
                }
            }
        ]
    }
};