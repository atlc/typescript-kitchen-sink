var myName = 'Andrew Cartwright'; // My first and last names
var stateCount = 50; // Number of states currently in the US
var addition = 5 + 4;
function sayHello() {
    alert('Hello world!');
}
sayHello();
function checkAgeOf(name, age) {
    if (age < 21)
        alert("Sorry " + name + ", you aren't old enough to view this page!");
}
checkAgeOf('Charles', 21);
checkAgeOf('Abby', 27);
checkAgeOf('James', 18);
checkAgeOf('John', 17);
var favoriteVeggies = ['Whole broccoli(s)', 'Potatoes', 'Onions', 'Cloves of garlic', 'Carrots', 'Asparagus stalks', 'Spinach leaves'];
favoriteVeggies.forEach(function (veggie) { return console.log(veggie + " are some of my favorite vegetables"); });
// Array of objects representing celebrities and their ages to be evaluated later
var bouncerBot = [
    { 'name': 'Lil Nas X', 'age': 20 },
    { 'name': 'Joe Dart', 'age': 28 },
    { 'name': 'Macaulay \'Macaulay Culkin\' Culkin', 'age': 39 },
    { 'name': 'Liam Neeson', 'age': 67 },
    { 'name': 'North West', 'age': 19 }
];
bouncerBot.forEach(function (person) { return checkAgeOf(person.name, person.age); });
function getLengthOf(word) {
    return word.length;
}
var greetingLength = getLengthOf('Hello World');
greetingLength % 2 ? console.log('The world is nice and even!') : console.log('The world is an odd place!');
