var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

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
    if (req.session.counter){
        req.session.counter++;
    } 
    else {
        req.session.counter = 0;
    }
    res.render('index', {'count':req.session.counter});
});

app.post('/add', function(req, res){
    req.session.counter++;
    res.redirect('/');
});

app.post('/reset', function(req, res){
    req.session.counter = 0;
    res.redirect('/');    
});

app.listen(8000, function(){
    console.log('listeniog on port 8000');
});