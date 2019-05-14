const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const vueLoader = require('vue-loader')

const config = {
    mode : 'development',
    entry : './src/main.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename : 'bundle.js'
    }
}