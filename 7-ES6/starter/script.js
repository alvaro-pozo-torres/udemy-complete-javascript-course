// lecture about LET and CONST
/*
//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';

console.log(name6);

//ES5
function dirversLicense5(passedTest) {
    
    if (passedTest) {
        var firstName = 'Jhon';
        var yearOfBirth = 1990;
    }
    
    console.log (firstName +', born on ' + yearOfBirth);
}

dirversLicense5(true);

//ES5
function dirversLicense6(passedTest) {
    
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
        let firstName = 'Jhon';
        
    }
    
    console.log (firstName +', born on ' + yearOfBirth);
}

dirversLicense6(true);


let i = 20;
console.log(i);

for ( let i=0; i < 5; i++) {
 
    console.log(i);
}

console.log(i);
*/

//////////////////////////
//Lecture: Blocks and IIFEs
/*
// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;   //VAR is function scoped. LET and CONST are block scoped
}

//console.log(a + b);
console.log(c);

// ES5 
(function () {
    var c = 3;
    
}) ();

//console.log(c);
*/

//////////////////////////
//Lecture: Strings
/*
let firstName = 'Jhon';
let lastName = 'Connor';
const yearOfBirth = 1980;

function calcAge (year) {
    return 2019 - year;
    
};

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born on ' + yearOfBirth + '. He is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`ES6. This is ${firstName} ${lastName}. He was born on ${yearOfBirth}. He is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;

console.log(n.startsWith('J'));
console.log(n.endsWith('nor'));
console.log(n.includes(' c'));
console.log(`${firstName} `.repeat(5));
*/

//////////////////////////
//Lecture: Arrow Functions I
/*
const years = [1990, 1965, 1982, 1977];

//ES5
var ages5 = years.map(function (element) {
    
   return 2018 - element;
    
});
console.log('ES5', years, ages5);

//ES6
let ages6 = years.map(el => 2018 - el);

ages6 = years.map((element, ind) => `Age element ${ind + 1}: ${2018 - element}`);

console.log('ES6', years, ages6);

ages6 = years.map ((element, index) => {

    const thisYear = new Date().getFullYear();
    const age = thisYear - element;
    
    return(`Age element ${index + 1}: ${age}`);
})

console.log('ES6', years, ages6);
*/

//////////////////////////
//Lecture: Arrow Functions II
/*
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {           
            var str = 'ES5. This is box # ' + self.position + ' and it is ' + self.color;
            
            alert(str);
        })
    }
};

//box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {           
            var str = 'ES6. This is box # ' + this.position + ' and it is ' + this.color;
            
            alert(str);
        })
    }
};

box6.clickMe();




function Person(name) {
    this.name = name;
    
}

//ES5
Person.prototype.myFriends5 = function (friends) {
    
    var arr = friends.map(function (element) {
       return this.name + ' is friend with ' + element;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('Alvaro').myFriends5(friends);

// ES6

Person.prototype.myFriends6 = function (friends) {
    
    var arr = friends.map(element => `${this.name} is friend with(ES6) ${element}`);
    console.log(arr);
};

new Person('Bru').myFriends6(friends);
*/

//////////////////////////
//Lecture: Destructuring
/*
// ES5
var jhon = ['Jhon', 26];

var name = jhon[0];
var age = jhon[1];

// ES6

const [name6, year] = ['Jhon', 26];
console.log(name6);
console.log(year);

const obj = {
    firstName: 'Ken',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() -year;
    return [age, 65 - age];
};


const [age2, retirement] = calcAgeRetirement(1977);
console.log(age2, retirement);

*/

//////////////////////////
//Lecture: Arrays
/*
const boxes = document.querySelectorAll('.box');

// ES5

var boxesArray5 = Array.prototype.slice.call(boxes);

boxesArray5.forEach(function(current) {
    current.style.backgroundColor='dodgerblue';
})


// ES6
const boxesArray6 = Array.from(boxes);
boxesArray6.forEach(cur => cur.style.backgroundColor='dodgerblue');


// ES5. loops

for(var i=0; i<boxesArray5.length; i++) {
    
    if (boxesArray5[i].className === 'box blue') {
        continue;
    } else {
        boxesArray5[i].textContent = 'I changed to blue!';
    }
}

for (const cur of boxesArray6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I chenged to blue!!';
}

// ES5

var ages = [12, 17, 8, 1, 24, 11];

var fullAge = ages.map(function(current) {
    return current >= 18;
});

console.log(ages);
console.log(fullAge);

console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

*/

//////////////////////////
//Lecture: The Spread Operator
/*
function addFourAges(a, b, c, d) {
    return a + b + c + d;
    
}

var sum1 = addFourAges(10, 20, 30, 40);
console.log(sum1);

// ES5
var ages = [10, 20, 30, 40];

var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['Jhon', 'June', 'Jane'];
const familyMiller = ['Mark', 'Mats', 'Milla'];

const bigFamily = [...familySmith, ...familyMiller];

console.log(bigFamily);

const heading = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [heading, ...boxes];

Array.from(all).forEach( cur => cur.style.backgroundColor = 'purple');
*/

//////////////////////////
//Lecture: Rest parameters
/*
// ES5
function isFullAge5() {
    //console.log(arguments);
    
    var argsArray = Array.prototype.slice.call(arguments);
    
    argsArray.forEach(function(cur) {
        console.log((2018-cur) >= 18);
    })
}

//isFullAge5(1990, 2005, 1977);

// ES6

function isFullAge6(...years) {
    years.forEach(cur => console.log((2018-cur) >= 18));
}

isFullAge6(1990, 2005, 1977, 2009, 1969);

function isFullAge5(limit) {
    var argsArray = Array.prototype.slice.call(arguments, 1);
    
    argsArray.forEach(function(cur) {
        console.log((2018-cur) >= limit);
    })
}

isFullAge5(16, 1990, 2005, 1977);

// ES6

function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2018-cur) >= limit));
}

isFullAge6(16, 1990, 2005, 1977, 2009, 1969);
*/

//////////////////////////
//Lecture: Default parameters
/*
// ES5

function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName; 
    nationality === undefined ? nationality = 'American' : nationality = nationality;
    this.firsName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
    
}

var jhon = new SmithPerson('Jhon', 1990);
var emily = new SmithPerson('Emily', 1983, 'Matias', 'Spanish');


// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
    
    this.firsName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
    
}
var jhon = new SmithPerson('Jhonn', 1990);
var emily = new SmithPerson('Emilyy', 1983, 'Matias', 'Spanish');
*/

//////////////////////////
//Lecture: Maps
/*
const question = new Map();

question.set('question', 'What is the name of latest major JS version');

question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'correct answer');
question.set(false, 'Wrong answer. please try again.');

console.log(question.get('question'));

//console.log(question.size);

if (question.has(4)) {
    //question.delete(4);
//    console.log('there is an answer #4');
}

//question.clear;

//question.forEach((v, k) => console.log(`This is ${k}, and it is set to ${v}`));

for (let [key, value] of question.entries()) {
    
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const answer = parseInt(prompt('Write the correct answer.'));

console.log(question.get(answer === question.get('correct')));
*/

//////////////////////////
//Lecture: Classes
/*
// ES5
var Person5 = function(name, yearOfBirth, job) {
    
    this.name = name;
    this.yearOfBirth =yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var jhon = new Person5('Jhon', 1990, 'writter');

// ES6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth =yearOfBirth;
        this.job = job;
    }
    
    calculateAge () {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
    
    static greeting() {
        console.log('Hey there!!!');
    }
}

const jhon6 = new Person6('Jhon6', 1996, 'writter6');

Person6.greeting();
*/

//////////////////////////
//Lecture: Classes and subclasses
/*
// ES5
var Person5 = function(name, yearOfBirth, job) {
    
    this.name = name;
    this.yearOfBirth =yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
    
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var jhonAtl5 = new Athlete5('Jhon', 1995, 'swimmer', 3, 10);

jhonAtl5.wonMedal();


// ES6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth =yearOfBirth;
        this.job = job;
    }
    
    calculateAge () {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athelete6 extends Person6 {
    
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    
    wonMedals() {
        this.medals++;
        console.log(this.medals);
    }
}

const jhonAtl6 = new Athelete6('Jhon6', 1995, 'runner', 5, 7);

jhonAtl6.wonMedals();
jhonAtl6.calculateAge();
*/

//////////////////////////
// CODING CHALLENGE

class TownElement {
    constructor (name, yearOfBuild) {
        this.name = name;
        this.yearOfBuild = yearOfBuild;
    }
}

class Park extends TownElement {
    constructor(name, yearOfBuild, trees, parkArea){
        super(name, yearOfBuild);
        this.trees = trees;
        this.parkArea = parkArea;
    }
    calculateTreesDensity() {
        return (this.trees/this.parkArea);
    }
    hasMore1KTrees() {
        return (this.trees > 1000);
    }
}

class Street extends TownElement {
    constructor(name, yearOfBuild, length, classification = 'Normal'){
        super(name, yearOfBuild);
        this.lenght = length;
        this.classification = classification;
    }
}

// Parks reports

const arrayOfParks = [
    new Park('San Pedro', 1950, 200, 5),
    new Park('ExCombatientes', 1960, 4000, 8),
    new Park('Demetrio Canelas', 1977, 1200, 7.5)
]

const arrayOfStreets = [
    new Street('Bolivar', 1945, 0.6, 'Normal'),
    new Street('Colombia', 1950, 1.2, 'Huge'),
    new Street('Venezuela', 1955, 0.8),
    new Street('Paccieri', 1960, 0.3, 'Tiny')
    
]

console.log('----- PARKS ------');

// average of parks: Our X parks have an avg of N years old.

const currentYear = new Date().getFullYear();
let avgAgeOfParks = 0;

arrayOfParks.forEach(val => {
    avgAgeOfParks = avgAgeOfParks + (currentYear - val.yearOfBuild)
});

avgAgeOfParks = avgAgeOfParks / arrayOfParks.length;

console.log(`Our ${arrayOfParks.length} have an average of ${avgAgeOfParks} years.`);

// list of parks density: X park has a tree density of N tress per square km
arrayOfParks.forEach(val => console.log(`${val.name} park has a tree density of ${val.calculateTreesDensity()} tress per square km.`));

arrayOfParks.forEach(val => {
    if (val.hasMore1KTrees()) console.log(`MINE. ${val.name} park has more than 1K trees.`)
});


const i = arrayOfParks.map(element => element.trees).findIndex(element => element >= 1000);
console.log(`${arrayOfParks[i].name} park has more than 1K trees.`)


console.log('----- STREETS ------');

let totalLengthOfStreets = 0;

arrayOfStreets.forEach(val => {
    totalLengthOfStreets = totalLengthOfStreets + val.lenght
});

console.log(`Our ${arrayOfStreets.length} have a total length of ${totalLengthOfStreets} Km and average of ${(totalLengthOfStreets/arrayOfStreets.length)} Km.`);

arrayOfStreets.forEach(val => console.log(`${val.name} street, build on ${val.yearOfBuild}, is a ${val.classification} street.`));

