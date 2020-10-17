const { createProxyMiddleware } = require('http-proxy-middleware');
var restream = function (proxyReq, req, res, options) {
    if (req.body) {
        let bodyData = JSON.stringify(req.body);
        proxyReq.setHeader('Content-Type', 'application/json');
        proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
        proxyReq.write(bodyData);
    }
};
module.exports = function (app) {
    app.use(
        createProxyMiddleware("https://api.igdb.com/v4/search", {
            target: "http://localhost:3000",
            secure: false,
            changeOrigin: true,
            onProxyReq: restream
        })
    );
};