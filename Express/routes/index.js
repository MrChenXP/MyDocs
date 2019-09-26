let express = require('express');

let router = express.Router();//使用这个方法来响应

router.get('/', function(req, res, next) {
    res.send('root');
});

module.exports = router;//导出