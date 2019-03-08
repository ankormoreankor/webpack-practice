// Core
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');

// Constants
const { PROJECT_ROOT, BUILD_DIRECTORY } = require('../constants');

// Configurations
const getCommonConfig = require('./webpack.common');

// Modules
import * as modules from '../modules';

// the clean options to use
const cleanOptions = {
    verbose: true,
    root:    PROJECT_ROOT,
};

/**
 * Типы конфигов вебпак:
 * Function
 * Object
 * Promise
 */
module.exports = () => {
    return merge(
		getCommonConfig.default(),
		{
	        mode:    'none',
	        devtool: false,
	        plugins: [ new CleanWebpackPlugin([ BUILD_DIRECTORY ], cleanOptions) ],
		},
		modules.loadProdCss(),
	);
};
