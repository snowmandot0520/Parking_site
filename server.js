const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const morgan = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const dbConnection = require("./models"); // loads our connection to the mongo database
const passport = require("./passport");

// ===== Middleware ====

// let's set up some basic middleware for our express app
// logs requests to the console. not necessary to make passport work, but useful
app.use(morgan('dev'));

// Use body-parser for reading application/json into objects
app.use(bodyparser.json());

app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
);

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser

// ==== if its production environment!
if (process.env.NODE_ENV === 'production') {
	app.use(express.static("client/build"));
}

// Add API Routes
/* Express app ROUTING */
app.use('/index', require('./routes'));

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactlandingpad");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
