var mongoose = require('mongoose');
var validator = require('validator');

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
  newUser.save(function(err, user) {
    if(err) res.json(err);

    res.json(user);
  });

};

exports.loginUser = function (req, res) {
  console.log(req.body.username);
  console.log(req.body.password);
}
