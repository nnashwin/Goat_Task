var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Goat_Task');

var UserSchema = mongoose.Schema({
	username: String,
	password: String,
	bleet: Number
});

var User = mongoose.model('User', UserSchema);

exports.add = function (req, res) {

	var newUser = new User(req.body);
	newUser.save(function(err, user) {
		if(err) res.json(err);

		res.json(tweet);
	});

};