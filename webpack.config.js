const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let pathsToClean = [
    'dist'
  ]
  
  // the clean options to use
  let cleanOptions = {
    verbose: true,
    dry: false,
    watch: true
  }

module.exports = () => {
    return {
        mode: 'none',
        devtool: 'false',
        plugins: [

                new htmlWebpackPlugin({
                    template: './static/template.html',
                    title: 'Изучаем вебпак'
                }),
                new CleanWebpackPlugin(pathsToClean, cleanOptions),

        ]
    }
}