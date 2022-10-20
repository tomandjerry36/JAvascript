module.exports = {
    target: 'webworker',
    entry: "./test/lib/serviceworker-mocha-harness.js",
    mode: "development",
    optimization: {
        minimize: false
    },
    performance: {
        hints: false
    },
    node: {
        fs: 'empty'
    },
    module: {
        exprContextCritical: false
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "dist",
        filename: "worker-mocha-harness.js"
    }
};