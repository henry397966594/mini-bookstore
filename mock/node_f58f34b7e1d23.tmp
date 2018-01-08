//server 是提供数据接口的
// 第一个接口 获取轮播图数据 /api/sliders
// 第二个接口  获取最新上映书籍 /api/hot

let http = require('http');
let url = require('url');
let sliders = require('./sliders');
let fs = require('fs');

function read(callback) {
  fs.readFile('./book.json', 'utf8', function (err, data) {
    if (err || data === '') return callback([]); // 如果文件不存在或者问件事空的 没有图书，返回空数组
    callback(JSON.parse(data))
  })
}

function write(data, callback) {
  fs.writeFile('./book.json', JSON.stringify(data), callback);
}

//写到book.json中的方法
// function write(data, callback) {
//     fs.writeFile('./book.json', JSON.stringify(data),callback)
// }
// read(function(data){
//  console.log(data)
// })






http.createServer(function (req, res) {
  let {
    pathname,
    query
  } = url.parse(req.url, true);
  if (pathname === '/api/sliders') {
    res.end(JSON.stringify(sliders))
  } else if (pathname === '/api/hot') {
    read(function (data) {
      let books = data.reverse().slice(0, 9); //截取最后田间的9本图书
      res.end(JSON.stringify(books))

    })
  } else if (pathname === '/api/book') {
    //请求方法
    let method = req.method;
    let id = parseInt(query.id);
    if (method === 'GET') {
      if (id) { //获取一个
        read(function (books) {
          let book = books.find(item => item.id == id);
          res.end(JSON.stringify(book))
        })
      } else { //获取全部
        read(function (books) {
          res.end(JSON.stringify(books)) // 返回所有图书
        });
      }
    } else if (method === 'POST') {
      let str = '';
      req.on('data', function (data) {
        str += data;
      });
      req.on('end', function () {
        let book = JSON.parse(str);
        read(function (books) {
          book.id = books.length === 0 ? 1 : books[books.length - 1].id + 1;
          books.push(book);
          write(books, function () {
            res.end(JSON.stringify(book))
          })
        });
      });
    } else if (method === 'PUT') {
      let str = '';
      req.on('data', function (chunk) {
        str += chunk;
      });
      req.on('end', function () {
        let book = JSON.parse(str);
        read(function (books) {
          books = books.map(item => {
            if (item.id == id) {
              return book;
            }
            return item;
          });
          write(books, function () {
            res.end(JSON.stringify(book))
          })
        })
      })


    } else if (method === 'DELETE') {
      read(function (books) {
        books = books.filter(item => item.id != id);
        write(books, function () {
          res.end(JSON.stringify({}));
        })
      })
    }

  }
}).listen(3000, function () {
  console.log('监听3000端口成功')
})
