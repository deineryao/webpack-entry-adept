var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    entry: {
        'a':'./demo/example1.1',
        'b':'./demo/example1.2'
    },
    output:{
        filename: '[name].js',
        path: './demo'
    },
    plugins: [new CommonsChunkPlugin("init.js")]
}