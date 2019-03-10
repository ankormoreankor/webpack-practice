// Core
import { DefinePlugin } from 'webpack';
import merge from 'webpack-merge';

// Constants
import { SOURCE_DIRECTORY, BUILD_DIRECTORY } from '../constants';

// Modules
import * as modules from '../modules';

/**
 * Типы конфигов вебпак:
 * Function
 * Object
 * Promise
 */
export default () => {
	const { NODE_ENV } = process.env;

    return merge(
        {
            entry:  [ SOURCE_DIRECTORY ],
            output: {
                path:     BUILD_DIRECTORY,
				filename: 'js/bundle.js',
				publicPath: '/',
			},
			plugins: [
				new DefinePlugin({
					__ENV__: JSON.stringify(NODE_ENV),
					__DEV__: NODE_ENV === 'development',
					__STAGE__: NODE_ENV === 'stage',
					__PROD__: NODE_ENV === 'production',
				}),
			],
        },
        modules.loadJavaScript(),
        modules.loadSass(),
        modules.loadFonts(),
        modules.loadImages(),
        modules.loadSvg(),
        modules.setupHtml(),
    );
};
