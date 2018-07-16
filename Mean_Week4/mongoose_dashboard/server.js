const express = require('express');
const path = require('path');
const app = express();
const bodyparser = require('body-parser');
const engine = require( 'ejs-locals' );
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/animal_dashboard')

app.use(express.static(path.join(__dirname, './public')));
app.use(session({
  secret: 'hush_hush',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
app.use(flash());
app.use(bodyparser.urlencoded({ extended : true }));

app.engine('ejs', engine);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const animalSchema = new Schema({
    name: {type: String, required: true},
    color: {type: String, required: true}
});
const Animal = mongoose.model('Animal', animalSchema);

app.get('/', routes.index);
app.get('/animal/new', routes.new);
app.post('/animal', routes.create);
app.get('/animal/:id', routes.show);
app.get('/animal/edit/:id', routes.edit);
app.post('/animal/:id', routes.save);
app.get('/animal/remove/:id', routes.remove);

app.listen(8000, () => console.log('listening on port 8000'))