const express = require('express');
const corsAnywhere = require('cors-anywhere');

const app = express();
const host = '0.0.0.0'; // ホスト
const port = 8080;      // ポート番号

corsAnywhere.createServer({
    originWhitelist: [], // 全てのオリジンを許可（必要なら制限を追加）
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
    console.log(`CORS Proxy running on http://${host}:${port}`);
});
