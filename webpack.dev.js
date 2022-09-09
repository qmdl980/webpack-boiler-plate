import commonConfig from './webpack.config.js'
import { merge } from 'webpack-merge'

const config = merge(commonConfig, {
    mode: "development",

    devtool: "source-map",

    devServer: {
        port: 3000,
    }
})

export default config