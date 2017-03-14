const express = require('express');
const Auth0Strategy = require('passport-auth0');
const passport = require('passport');
const strategy = new Auth0Strategy({
    domain: config.domain,
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbuckURL: 'localhost:3000/callback'
},
function(accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
  }
);
 
passport.use(strategy);

app.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/login' }),
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("/");
  }
);

app.get('/login',
  passport.authenticate('auth0', {}), function (req, res) {
  res.redirect("/");
});