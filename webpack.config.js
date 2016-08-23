module.exports = {
    entry: "./app/js/main.js",
    output: {
        path: __dirname + "./app/js/",
        filename: "main.js"
    },
    module: {
        loaders: [
            { 
                test: /(\.jsx|\.js)$/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }   
        ]
    }
};