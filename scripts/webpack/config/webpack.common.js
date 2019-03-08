// Core
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
                path:     BUILD_DIRECTORY,
                filename: 'js/bundle.js',
            },
        },
        modules.loadJavaScript(),
        modules.loadSass(),
        modules.loadFonts(),
        modules.loadImages(),
        modules.loadSvg(),
        modules.setupHtml(),
    );
};
