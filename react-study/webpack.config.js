
const path = require('path');
module.exports = {
    mode:'development',
    entry:{
        app:'./src/index.js',
        vendor:['react']
    },
    output:{
        path:path.resolve(__dirname, 'public'),
        filename:'my-react-webpack-[name][hashContent].js',
    },
    module:{
        rules:[
            {test:/\.txt$/, use:'raw-loader'}
        ]
    }
}
