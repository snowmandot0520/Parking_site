var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
const spaces = require('./routes/spaces')

// var account = require('./routes/account');
var auth = require('./routes/auth');
var app = express();
const PORT = process.env.PORT || 3001;


var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/landingpad-auth', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static('build'));



// app.use('/api/account', account);
app.use('/api/auth', auth);
app.use('/spaces', spaces)


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './client/build/index.html'))
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (process.env.NODE_ENV === 'production') {
	const path = require('path');
	console.log('YOU ARE IN THE PRODUCTION ENV');
	app.use('/static', express.static(path.join(__dirname, '../build/static')));
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../build/'));
	});
}

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});
