//Konfiguracja Webpack
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ["./app.js","./scss/style.scss"],
    output: { filename: "./dist/out.js" },
    // devServer: {
    //     inline: true,
    //     contentBase: './',
    //     port: 3001
    // },
    watch: true,

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-2', 'react'] }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })

            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./dist/style.css')

    ]
};
