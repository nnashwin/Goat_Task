var mongoose = require('mongoose');


exports.checkSession = function (req) {
  if (req.session.loggedIn === true || req.path === '/login' || req.path === '/login/newRegister') {
    next();
  } else {
    res.redirect('/login');
  }
}

exports.setSession = function (req) {
  req.session.loggedIn = true;
}
  // User.findOne({ _id: req.body.id }, function(err, user) {
  //   if (err) return err;
  //   if (user != null) {  
  //     req.session.loggedIn = true;
  //     req.session.bleat = user.bleat;
  //     next();
  //   }
  // });
