var express      = require('express');
var bodyParser   = require("body-parser");
var session      = require('express-session');
var MongoStore   = require('connect-mongo')(session);
var mongoose     = require("mongoose");

var app =  express();

app.use(bodyParser.json());

app.set('port',(process.env.PORT || 2000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port puerto', app.get('port'));
});

var BD = process.env.MONGODB_URI || "mongodb://Localhost/servidor";
mongoose.connect(BD);
mongoose.Promise = require('bluebird');
  
app.use(session({
	secret: '1234', 
	saveUninitialized:true, 
	resave:true,
  cookie: { maxAge: 18000000 },
	store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

require('./routes')(app);
