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
  var result = User.findOne({ username: req.body.username }, function(err, user) {
    if(err) return err;
    console.log(user.password);
    if(user.username == req.body.username && user.password == req.body.password) {
    session.setSession(req);
    console.log(req.session.loggedIn);
    } 
    // console.log(user.username);
  });
  // console.log(result.username);
}
