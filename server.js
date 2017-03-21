var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var massive = require('massive');
var connectionString = 'postgres://postgres:Testies1-1@localhost/front2back';
var db = massive.connectSync({
  connectionString: connectionString
});
var session = require('express-session');
var config = require('./.config.js')
parseFloat
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use(session({
  secret: config.secret,
  resave: true,
  saveUninitialized: true
}));

app.post('/api/updatecart', function(req, res){
  req.session.cart = req.body; 
  res.status(200).send('updated cart');
})


app.post('/api/cart', function(req, res) {
  console.log(req.body)
  if (Array.isArray(req.session.cart)) {
    req.session.cart.push(req.body)
  } else {
    req.session.cart = [req.body]
  }
  res.status(200).send('ok');
});

app.get('/api/cart', function(req, res) {
  res.status(200).json(req.session.cart);
});

// app.post('/api/list/:id', function (req, res) {
//   db.add_to_cart([req.params.id], function (err, success) {
//     if (err) {
//       res.status(500).json(err)
//     } else {
//       res.status(200).json('success')
//     }
//   })
// })

app.get('/api/products', function (req, res) {
  db.see_products(function (err, item) {
    if (!err) {
      res.status(200).json(item)
    }
    else {
      res.status(500).json(err)
    }
  })
})

// app.get('/api/list', function (req, res) {
//   db.see_cart(function (err, item) {
//     if (!err) {
//       res.status(200).json(item)
//     }
//     else {
//       res.status(500).json(err)

//     }
//   })
// })

// app.delete('/api/list/:id', function (req, res) {
//   db.remove_from_cart([req.params.id], function(err, id) {
//     if (!err) {
//       res.status(200).send('deleted')
//     }
//     else {
//       res.status(500).json(err)
//     }
//   })
// })

// app.put('/api/list', function(req, res) {
//   console.log(req.body)
//   db.change_name([req.body.id, req.body.item], function(err, id){
// if (!err) {
//       res.status(200).send('updated')
//     }
//     else {
//       console.log(err)
//       res.status(500).json(err)

//     }
//   })
// })

app.listen(3000, function () {
  console.log('Listening on port 3000')
})