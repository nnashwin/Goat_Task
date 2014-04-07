var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	username: String,
	password: String,
	bleet: Number
});

var User = mongoose.model('User', UserSchema);

exports.register = function (req, res) {

	var newUser = new User(req.body);
	newUser.save(function(err, user) {
		if(err) res.json(err);

		res.json(tweet);
	});

};

exports.login = function (req, res) {

}
