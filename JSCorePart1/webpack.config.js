module.exports = {
    mode: "development",
    entry: "./src/js/app.js",
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader'
            }
        ]
    }
}