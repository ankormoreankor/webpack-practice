// Core
import env from 'postcss-preset-env';
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
                filename: 'bundle.js',
            },
            module: {
                rules: [
                    // loadJavaScript
                    // loadCss
                    {
                        // TODO: прокачать загрузку стилей
                        test: /\.css$/,
                        use:  [
                            'style-loader',
                            {
                                loader:  'css-loader',
                                options: {
                                    modules:        true,
                                    localIdentName:
                                        '[path][name]__[local]--[hash:base64:5]',
                                },
                            },
                            {
                                loader:  'postcss-loader',
                                options: {
                                    plugins: [
                                        // цепочка плагинов postcss

                                        env({
                                            stage:    0, // default: stage 2
                                            features: {
                                                'custom-media-queries': {
                                                    importFrom: [
                                                        {
                                                            customMedia: {
                                                                '--phonePortrait':
                                                                    '(width <= 414px)',
                                                                '--phoneLandscape':
                                                                    '(width >= 415px) and (width <= 667px)',
                                                                '--tabletPortrait':
                                                                    '(width >= 668px) and (width <= 768px)',
                                                                '--tabletLandscape':
                                                                    '(width >= 769px) and (width <= 1024px)',
                                                                '--desktopS':
                                                                    '(width >= 1025px) and (width <= 1366px)',
                                                                '--desktopM':
                                                                    '(width >= 1367px) and (width <= 1680px)',
                                                                '--desktopL':
                                                                    '(width >= 1681px) and (width <= 1920px)',
                                                                '--desktopXL':
                                                                    '(width >= 1921px)',
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        }),
                                    ],
                                },
                            },
                        ],
                    },
                    // loadImages
                    {
                        test: /\.(png|jpg|jpeg)$/,
                        use:  [
                            {
                                loader:  'file-loader',
                                options: {
                                    name: 'images/[name].[ext]',
                                },
                            },
                        ],
                    },
                ],
            },
        },
        modules.loadJavaScript(),
        modules.setupHtml(),
    );
};
