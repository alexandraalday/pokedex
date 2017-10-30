// Webpack is a tool that allows us to bundle all of our JavaScript files into ES5 using Babel plugins. 
// So, all we do is run our code in React and ES6 and Webpack helps us convert it instantly into ES5 standards.

const path = require('path');
const webpack = require('webpack');
const assetsPath = path.join(__dirname, 'src');

module.exports = {
    entry :  { // This is where Webpack looks for as a starting point for the bundle.
        bundle :  ['webpack-dev-server/client?http://0.0.0.0:8080', 
            'webpack/hot/only-dev-server',
           path.resolve(assetsPath,'index.js')],
    },
    output: {  // The publicPath key is crucial in this configuration. This means that our JavaScript will be served at http://localhost:8080/assets/bundle.js
        chunkFilename: '[name].js',
        filename: '[name].js', //
        path: path.join(assetsPath ,"dist/js/"),
        publicPath: 'http://localhost:8080/assets/'
    },
    module: {
        loaders: [ // This tells Webpack how it should render files with a particular extension.
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /.jsx?$/,
                loaders: ['react-hot-loader/webpack','babel-loader'],
                include: [path.resolve(assetsPath)]
           }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool : '#source-map',

    plugins: [
     new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin()
    ]
};
