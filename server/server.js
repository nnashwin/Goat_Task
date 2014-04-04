Meteor.startup(function () {
    if (Tasks.find().count() === 0) {
        Tasks.insert({
        	task: 'Alex', 
        	date: 'Hello world!'
        });
    }
});