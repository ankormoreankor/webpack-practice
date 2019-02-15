// Core
const { HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');

// Configurations
const getCommonConfig = require('./webpack.common');

console.log('→ getCommonConfig', getCommonConfig);

/**
 * Типы конфигов вебпак:
 * Function
 * Object
 * Promise
 */
module.exports = () => {
    return merge(getCommonConfig(), {
        mode:    'development',
        devtool: 'cheap-module-eval-source-map',
        entry:   [ 'webpack-hot-middleware/client?reload=true&quiet=true' ],
        plugins: [
            // Каждый плагин — это конструктор
            new HotModuleReplacementPlugin(),
        ],
    });
};
