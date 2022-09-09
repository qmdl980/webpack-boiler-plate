import commonConfig from './webpack.config.js'
import { merge } from 'webpack-merge'

const config = merge(commonConfig, {
    mode: "development",

    devtool: "source-map",

    devServer: {
        port: 8080,
    }
})

export default config