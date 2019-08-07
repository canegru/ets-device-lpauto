const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', './src/app.js'],
    output: {
        // options related to how webpack emits results
        path: path.resolve(__dirname, 'build'), // string
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        filename: 'master.js', // string
        // the filename template for entry chunks
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                include: path.join(__dirname, ''),
                options: {
                    publicPath: './',
                    limit: 10000,
                },
            },
        ],
    },
};
