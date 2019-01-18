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






