const express = require('express');
const path = require('path');
const app = express();
const bodyparser = require('body-parser');
const engine = require( 'ejs-locals' );
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('engine', 'ejs');

mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.connection.on('connected', ()=> console.log('connected to mongoDB'))
const quoteSchema = new mongoose.Schema({
    name: {type:String, required:true, date:{type: Date, default: Date.now}},
    quote: {type:String, required:true}
  }, {timestamps: true });

const Quote = mongoose.model('quotes', quoteSchema);

app.use(session({
    secret: 'hush_hush',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}));


app.get('/', function(req, res) {
    res.render('index');
})

app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, quotes) {
      if (err) { console.log(err); }
      res.render('quotes', { quotes: quotes });
    });
});

app.post('/quotes', function(req, res) {
    Quote.create(req.body, function(err) {
      if (err) { console.log(err); }
      res.redirect('/quotes');
    });
  });

app.listen(8000, function() {
    console.log("listening on port 8000");
})
