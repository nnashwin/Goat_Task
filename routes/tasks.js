var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost: 27017/Goat_Task');

var TaskSchema = mongoose.Schema({
	task: String,
	dateComplete: Date,
	timestamp: {
		type: Date,
		default: Date.now()
	},
});

var Task = mongoose.model('Task', TaskSchema);

exports.list = function (req, res) {

	Task.find().sort('-timestamp').exec(function(err, tasks) {
		if(err) res.json(err);

		res.json(tasks);
	});

};

//xhr POST /tasks

exports.add = function (req, res) {
	var newTask = new Task(req.body);
	newTask.save(function(err, task) {
		if(err) res.json(err);
		console.log(task);
		res.json(task);
	});

}