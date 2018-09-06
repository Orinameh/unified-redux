module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "./lib/bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [ ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,

                use: [{
                    loader: 'awesome-typescript-loader'
                }],

                enforce: 'post'
            }
        ],

        rules: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.ts$/,

                use: [{
                    loader: 'ts-loader'
                }],

                enforce: 'pre'
            }
        ]
    },

    // Other options...
};