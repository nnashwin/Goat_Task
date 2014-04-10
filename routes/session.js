var mongoose = require('mongoose');


exports.checkSession = function (req, res, next) {
  if (req.session.loggedIn === true || req.path === '/login' || req.path === '/login/newRegister') {
    next();
  } else {
    // res.json({loggedIn: false});
    res.redirect('/login');
  }
}

exports.setSession = function (req) {
  req.session.loggedIn = true;
}
  