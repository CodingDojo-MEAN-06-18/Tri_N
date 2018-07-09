var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});

var route = require('./routes/index.js')(app, server);  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/static`));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.get('/', function(req, res){
    res.render('index');
});

