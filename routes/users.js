var mongoose = require('mongoose');
var validator = require('validator');
var session = require('./session');


var UserSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  bleet: {
    type: Number,
    default: 0
  }
});

var User = mongoose.model('User', UserSchema);

exports.register = function (req, res) {

  var newUser = new User(req.body);
  console.log(newUser);
  newUser.save(function(err, user) {
    if(err) res.json(err);

    res.json(user);
  });

};

exports.loginUser = function (req, res) {
  // var parsed = validator.toString(req.body.username);
  // var result = User.findOne({ username: req.body.username }, function(err, user) {
  //   if(err) return err;
  //   if(user.username === req.body.username && user.password === req.body.password) {
  //   session.setSession(req);
  //   console.log(user.bleet);
  //   res.send(200);
  //   } else {
  //     res.send('Your username was not found.')
  //   }
  var user_input = req.body.username;
  var pass_input = req.body.password;

  console.log('not findOne');
  if (user_input === '') {
    res.send('Please enter a username');
    return;
  }

  if (pass_input === '') {
    res.send('Please enter a password');
    return;
  }
  //end of username and password validation

  User.findOne({username: user_input}, function(err, user) {

    if (err) {
      console.log('error:' + err );
    }

    if (user == null) {
      res.send('User not found');
    }

    if (pass_input !== user.password) {
      res.send('Sorry, that password is not correct.');
    }

    if (pass_input === user.password) {
      req.session.name = user.username;
      req.session.userId = user._id;
      req.session.loggedIn = true;
      req.session.bleet = user.bleet
      console.log(req.session.bleet);
      res.redirect('/');
    }
  })
}

exports.logoutUser = function (req, res) {
  console.log('logged out');
  req.session = null;
  res.redirect('/login');
}

module.exports.BleetUser = User;