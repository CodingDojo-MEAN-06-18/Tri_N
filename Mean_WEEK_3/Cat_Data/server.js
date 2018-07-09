var express = require('express');
var app = express();

app.use(express.static(`${__dirname}/static`));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');


app.get("/cats", function(request, response){
    var cats_array = [
        {'name':'nemo','source':'/images/cat1.jpg'},
        {'name':'boxcat','source':'/images/cat2.jpg'},
        {'name':'explosioncat','source':'/images/cat3.jpg'},
    ];
    response.render('cats', {cats: cats_array});
});

app.get("/cats/nemo", function (request, response){
    var cat1_array = [
      {detail: "grey"}, 
      {detail: "likes sunglasses"}, 
      {detail: "This cat just gets it"}, 
  ];
    response.render('details', {detail: cat1_array});
  })

app.get("/cats/boxcat", function (request, response){
    var cat2_array = [
        {detail: "loves sunglasses"}, 
        {detail: "lives in a box"}, 
        {detail: "three cats are one"}, 
    ];
    response.render('details', {detail: cat2_array});
})

app.get("/cats/explosioncat", function (request, response){
    var cat3_array = [
        {detail: "Explosion cat is his name"}, 
        {detail: "Loves Explosions"}, 
        {detail: "Walks with an attitude"}, 
    ];
    response.render('details', {detail: cat3_array});
})

app.listen(8000, function(){
    console.log('listeniog on port 8000');
});