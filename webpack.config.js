import path from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const dirname = path.dirname(fileURLToPath(import.meta.url))

const config = {
    entry: { index: path.resolve(dirname, 'src', 'index.js') },
    output: { path: path.resolve(dirname, 'build'), filename: 'main.js' },

    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(dirname, 'src', 'index.html'),
          }),
    ],

    resolve: {
        alias: {
            '@': path.resolve(dirname, 'src')
        }
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ]
    }
}

export default config