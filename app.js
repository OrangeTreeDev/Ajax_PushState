var Koa = require('koa');
var Router = require('koa-router');
var static = require('koa-static');
var os = require('os');

var app = new Koa();
var router = new Router();
router.get('/student-lists', (ctx) => {
  var fields = ctx.querystring.split('&');
  var params = fields.reduce((previous, current) => {
    var values = current.split('=');
    previous[values[0]] = values[1];
    return previous;
  }, {});
  var data = [];
  if (params.grade === 'one') {
    data = [
      {
        name: '小红',
        score: 32,
      },
      {
        name: '小白',
        score: 45,
      }
    ];
  } else if (params.grade === 'two') {
    data = [
      {
        name: '小成',
        score: 67,
      },
      {
        name: '小花',
        score: 21,
      },
      {
        name: '小新',
        score: 90,
      }
    ];
  } else if (params.grade === 'three') {
    data = [
      {
        name: '小王',
        score: 39,
      },
      {
        name: '小李',
        score: 87,
      },
      {
        name: '小刚',
        score: 89,
      },
      {
        name: '小兆',
        score: 87,
      }
    ];
  }
  ctx.body = {data: data};
});
app.use(router.routes());

app.use(static('static'));
process.on('uncaughtException', err => {
    console.log('process catch');
    console.log(err);
});

app.listen(3000);
