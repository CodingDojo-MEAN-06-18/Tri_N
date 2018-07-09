// 1
var hello;
console.log(hello)
hello = 'world'       

undefined

// 2
var needle;
test();
function test(){
    var needle;
    needle = 'magnet'
    console.log(needle)


magnet

// 3
var brendan;
brendan = 'super cool'
function print(){
    brendan = 'only okay';
    console.log(brendan)
}
console.log(brendan);
super cool

// 4
var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food)
eat();

chicken
half-chicken

// 5
var mean;
mean();
console.log(food);
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);

error

// 6
var genre;
function rewind(){
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre)

undefined
rock
r&b
disco

// 7
function learn(){
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose"
console.log(dojo);
learn();
console.log(dojo);

san jose
seattle
burbank
san jose

//8
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50){
        dojo.hiring = true;
    } else if (dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

output:
{ name: 'Chicago', students: 65, hiring: true }
TypeError: 'const can't be changed'