
/**
 * Module dependencies
 */

var express = require('express'),
  routes = require('./routes'),
  tasks = require('./routes/tasks'),
  users = require('./routes/users'),
  session = require('./routes/session'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser('SecretSquirrelIsRealBro'));
app.use(express.cookieSession());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session.checkSession);
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
}


/**
 * Routes
 */

// serve index and view partials
// app.get('/', routes.index);

app.get('/tasks', tasks.list);
app.post('/tasks', tasks.add);
app.post('/login/newRegister', users.register);
app.post('/login', users.loginUser);
app.get('/logout', users.logoutUser);
app.delete('/tasks/:id', tasks.deleteAdd);
app.get('*', routes.index);
// app.get('/login/newRegister', users.)
// app.get('/tasks', tasks.list);
// app.post('/tasks', tasks.add);

// app.get('/partials/:name', routes.partials);

// JSON API
// app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
// app.get('*', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
