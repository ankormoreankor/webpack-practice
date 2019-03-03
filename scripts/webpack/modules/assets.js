import HtmlWebpackPlugin from 'html-webpack-plugin';

export const setupHtml = () => ({
	plugins: [
		// Каждый плагин — это конструктор
		new HtmlWebpackPlugin({
			template: './static/template.html',
			title:    'Изучаем вебпак! 🚀',
			favicon:  './static/favicon.ico',
		}),
	]
});

export const loadImages = () => ({
	module: {
		rules: [
			{
				test: /\.(png|jpg|jpeg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: `images/[name].[ext]`,
						},
					},
				],
			},
		],
	},
});

export const loadSvg = () => ({
    module: {
        rules: [
            {
                test:   /\.svg$/,
                issuer: {
                    test: /\.js$/,
                },
                use: [
                    '@svgr/webpack',
                    {
                        loader:  'file-loader',
                        options: {
                            name: 'images/[name].[hash:5].[ext]',
                        },
                    },
                ],
            },
            {
                test:   /\.svg$/,
                issuer: {
                    test: /\.css$/,
                },
                use: [
                    {
                        loader:  'file-loader',
                        options: {
                            // limit: 0,
                            name: 'images/[name].[hash:5].[ext]',
                        },
                    },
                ],
            },
        ],
    },
});