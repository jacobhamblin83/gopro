const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const massive = require('massive');
const connectionString = 'postgres://rtyyxmec:oB2LM_6r0dfnAWwMBeL2cWEq1UpL6b_b@stampy.db.elephantsql.com:5432/rtyyxmec';
const db = massive.connectSync({
  connectionString: connectionString
});
const passport = require('passport')
const session = require('express-session');
const config = require('./.config.js')
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use(session({
  secret: config.secret,
  resave: true,
  saveUninitialized: true
}));

//RESET DATA TABLES IN DATABASE
app.set('db', db);
db.schema((err, data) => {
  if (!err) return err;
  else console.log('All tables successfully reset');
})

//UPDATE CART ON THE COOKIE
app.post('/api/updatecart', (req, res) => {
  req.session.cart = req.body; 
  res.status(200).send('updated cart');
})

//CLEAR CART FROM COOKIE
app.delete('/api/deletecart', (req, res) => {
  req.session.cart = null;
  res.send('yum')
})

//ADD ITEM TO CART ON COOKIE
app.post('/api/cart', (req, res) => {
  if (Array.isArray(req.session.cart)) {
  } else {
    req.session.cart = [req.body]
  }
  res.status(200).send('ok');
});

app.post('/api/ditem/:id', function(req, res){
  var wrongid = req.params.id.toString().split('')
  var id = wrongid[1]
  for (var i = 0; i < req.session.cart.length ; i ++){
    if (req.session.cart[i].id == id){
      req.session.cart.splice(i,1)
    }
  }
  res.status(200).send('ok')
})

//POST ORDER FROM COOKIE INTO DATABASE
app.post('/api/addcart', function(req, res) {
  var cart = req.session.cart;
  for (var i = 0; i < cart.length; i++) {
    var params = [
      cart[i].id,
      cart[i].name,
      cart[i].quantity,
      cart[i].price
    ]; 
    db.add_cart(params, function(err, response) {
    })
  }
});


//GET CART FROM COOKIE
app.get('/api/cart', (req, res) => {
  res.status(200).json(req.session.cart);
});

//GET PRODUCTS FROM DATABASE
app.get('/api/products', (req, res) => {
  db.see_products((err, item) => {
    if (!err) {
      res.status(200).json(item)
    }
    else {
      res.status(500).json(err)
    }
  })
});

app.post('/api/register', (req, res) => { 
  db.add_user([req.body.firstname, req.body.lastname, req.body.address, req.body.city, req.body.state, req.body.zipcode, req.body.email, req.body.password], (err, response) => {
    !err ? res.status(200).json(response) : res.status(500).json(err)
  })
})

app.post('/api/check_user', function(req, res) {
  db.check_user([req.body.email, req.body.password], function(err, info) {
    !err ? res.status(200).json(info) : res.status(500).json(err)
  })
})


app.listen(3000, () => {
  console.log('Listening on port 3000')
})

//need to figure out the flow of data for most simple login. Check req.body.password and req.body.username against the table for a match. If there is a match, set the id of the user on the cookie? Not sure about that part.