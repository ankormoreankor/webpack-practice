// Core
import { HotModuleReplacementPlugin } from 'webpack';
import merge from 'webpack-merge';

// Configurations
import getCommonConfig from './webpack.common';

/**
 * Типы конфигов вебпак:
 * Function
 * Object
 * Promise
 */
export default () => {
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
