module.exports = {
    entry: "./source/js/main.js",
    output: {
        filename: "bundle.js",
        path: "./assets/js/bundle.js"
    },
    module: {
        rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}