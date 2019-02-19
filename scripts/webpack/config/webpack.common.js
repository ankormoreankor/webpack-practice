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
    return merge(
        {
            entry:  [ SOURCE_DIRECTORY ],
            output: {
                path:       BUILD_DIRECTORY,
                filename:   'js/bundle.js',
                publicPath: '/',
            },
            plugins: [
                new DefinePlugin({
                    RELEASE:          '2.0',
                    TWO:              '1+1',
                    THREE:            JSON.stringify(3),
                    FOUR:             4,
                    TRUE_SIMPLE:      true,
                    TRUE_STRINGIFIED: JSON.stringify(true),
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
