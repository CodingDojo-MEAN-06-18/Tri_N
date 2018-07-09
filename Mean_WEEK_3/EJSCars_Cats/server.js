var express = require('express');
var app = express();

app.use(express.static(`${__dirname}/static`));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/cars', function(request, response){
    var cars_array = [
        {'name':'car1','source':'/images/car1.jpg'},
        {'name':'car2','source':'/images/car2.jpg'},
        {'name':'car3','source':'/images/car3.jpg'},
    ];

    response.render('cars',{cars:cars_array});
});

app.get('/cats', function(request, response){
    var cats_array = [
        {'name':'cat1','source':'/images/cat1.jpg'},
        {'name':'cat2','source':'/images/cat2.jpg'},
        {'name':'cat3','source':'/images/cat3.jpg'},
    ];

    response.render('cats',{cats:cats_array});
});

app.get("/cars/new", function (request, response){
    response.render('form');
});

app.listen(8000, function(){
    console.log('listeniog on port 8000');
});