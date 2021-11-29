module.exports = {
    devServer: {
        port: 3000, 
        proxy: {
            '/api': {
                target: 'http://localhost:8080', 
                ws: true, 
                changeOrigin: true
            }
        }
    }, 
    publicPath: process.env.NODE_ENV === 'production'
        ? '/dist'
        : '/'
}