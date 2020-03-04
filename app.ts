let myName:string = 'Andrew Cartwright'; // My first and last names
const stateCount:number = 50; // Number of states currently in the US
let addition:number = 5 + 4;

function sayHello() {
    alert('Hello world!')
}
sayHello();

function checkAgeOf(name:string, age:number) {
    if (age < 21) alert(`Sorry ${name}, you aren't old enough to view this page!`);
}

checkAgeOf('Charles', 21);
checkAgeOf('Abby', 27);
checkAgeOf('James', 18);
checkAgeOf('John', 17);

let favoriteVeggies:Array<string> = ['Whole broccoli(s)', 'Potatoes', 'Onions', 'Cloves of garlic', 'Carrots', 'Asparagus stalks', 'Spinach leaves'];
favoriteVeggies.forEach(veggie => console.log(`${veggie} are some of my favorite vegetables`));

// Array of objects representing celebrities and their ages to be evaluated later
let bouncerBot: { name:string, age:number }[] = [
    { 'name': 'Lil Nas X', 'age': 20 },
    { 'name': 'Joe Dart', 'age': 28 },
    { 'name': 'Macaulay \'Macaulay Culkin\' Culkin', 'age': 39},
    { 'name': 'Liam Neeson', 'age': 67 },
    { 'name': 'North West', 'age': 19 }
]
bouncerBot.forEach(person => checkAgeOf(person.name, person.age));

function getLengthOf(word:string) {
    return word.length;
}

let greetingLength:number = getLengthOf('Hello World');
greetingLength % 2 ? console.log('The world is nice and even!') : console.log('The world is an odd place!');