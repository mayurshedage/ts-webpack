const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/app.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: [path.resolve(__dirname, 'src')],
                use: 'ts-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist',
        clean: true,
    },
};