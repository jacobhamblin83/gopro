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

app.set('db', db);
db.schema((err, data) => {
  if (err) console.log(err);
  else console.log('All tables successfully reset');
})

app.post('/api/updatecart', (req, res) => {
  req.session.cart = req.body; 
  res.status(200).send('updated cart');
})

app.delete('/api/deletecart', (req, res) => {
  req.session.cart = null;
  res.send('yum')
})

app.post('/api/cart', (req, res) => {
  console.log(req.body)
  if (Array.isArray(req.session.cart)) {
    req.session.cart.push(req.body)
    console.log(req.session)
  } else {
    req.session.cart = [req.body]
  }
  res.status(200).send('ok');
});

app.get('/api/cart', (req, res) => {
  res.status(200).json(req.session.cart);
  console.log(req.session)
});

app.get('/api/products', (req, res) => {
  db.see_products((err, item) => {
    if (!err) {
      res.status(200).json(item)
    }
    else {
      res.status(500).json(err)
    }
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

//need to figure out the flow of data for most simple login. Check req.body.password and req.body.username against the table for a match. If there is a match, set the id of the user on the cookie? Not sure about that part.