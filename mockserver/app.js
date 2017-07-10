let express = require('express');
let app = express();

// 解决跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

let appData = require('./data.json');
let seller = appData.seller;
let goods = appData.goods;
let ratings = appData.ratings;

let apiRoutes = express.Router();

apiRoutes.get('/seller', function (req, res) {
  res.jsonp({
    errno: 0,
    data: seller
  });
});

apiRoutes.get('/goods', function (req, res) {
  res.jsonp({
    errno: 0,
    data: goods
  });
});

apiRoutes.get('/ratings', function (req, res) {
  res.jsonp({
    errno: 0,
    data: ratings
  });
});

app.use('/api', apiRoutes);
// 启动服务，监听一个端口，不要和页面的端口一样
app.listen(3030);
console.log('> Listening at 3030...');
