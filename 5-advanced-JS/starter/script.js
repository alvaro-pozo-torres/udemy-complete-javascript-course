// Function constructor

/*
var Jhon = {
    name: 'Jhon',
    yearOfBirth: 1980,
    job: 'teacher'
};
*/
/*
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
        console.log( 2018 - this.yearOfBirth );
    }

Person.prototype.lastName = 'Smith';

var jhon = new Person('Jhon', 1980, 'teacher');
var jane = new Person('Jane', 1985, 'Designer');
var mark = new Person('Mark', 1948, 'Retired');

jhon.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(jhon.lastName, jane.lastName, mark.lastName);
*/

// OBJECT.CREATE
/*
var personProto = {
    calculateAge: function() {
        console.log(2018 - this.yearOfBirth);
    }
};

var jhon = Object.create(personProto);

jhon.name = 'Jhon';
jhon.yearOfBirth = 1980;
jhon.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: {value: 1980},
    job: { value: 'driver'}
});

*/


// Primitives vs Objects
/*
// primitives
var a = 23;
var b = a;
a = 46,

console.log(a);
console.log(b);


// objects
var obj1 = {
    name: 'jhon',
    age: 26
}

var obj2 = obj1;
obj1.age = 62;

console.log (obj1.age);
console.log (obj2.age);

// functions

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change (age, obj);

console.log(age);
console.log(obj.city);
*/

// Passing functions as arguments
/*
var years = [1990, 1969, 2010, 1977, 2004];


function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i=0; i < arr.length; i++){
        arrResult.push(fn(arr[i]));
    }
    
    return arrResult;
}

function calcAge(el) {
    return 2018 - el;
}

function isFullAge(elem) {
    return elem >= 18;
}

function maxHeartRates(elem) {
    if (elem >= 18 && elem <= 81) {
        return Math.round(206.9 - (0.67*elem));
    } else{
        return -1;
    }
}

var ages = arrayCalc(years, calcAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var maxRates = arrayCalc(ages, maxHeartRates);
console.log(maxRates);
*/
/*
function interviewQuestion(job) {
    if (job === 'Designer') {
        return function(name) {
            console.log(name + ', can you explnain your UX experience');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('Jhon');

var designerQuestion = interviewQuestion('Designer');
designerQuestion('Mark');

interviewQuestion('teacher')('David');
*/

///////////////////////
////////// IIFE
/*
function game () {
    var score = Math.random() *10;
    console.log(score >= 5);
}

game();

(function(){
    var score = Math.random() *10;
    console.log(score >= 5);
})();

console.log(score);
*/

///////////////////////
////////// Closures
/*
function retirement(retirementAge) {
    var msg = ' years left until retirement.';
        return function (yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + msg);
    }
}

var retirementUS = retirement(66);

retirementUS(1977);
var retirementGER = retirement(65);
var retirementISL = retirement(67);
retirementUS(1990);
retirementGER(1990);
retirementISL(1990);

//retirement(66)(1987);

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you explnain your UX experience');
        } else if (job === 'teacher') {
            console.log('What subject do you teach ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('Jhon');
designerQuestion('clara');
interviewQuestion('cook')('Ken');
*/
///////////////////////
////////// Bind, call, and apply

var jhon = {
    name: 'Jhon',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good' + timeOfDay + 'ladies and gentelmen. I \'m ' + this.name + '. I work as ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hi there. I \'m ' + this.name + '. I work as ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
        }
    }
}

jhon.presentation('formal', 'morning');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

jhon.presentation.call(emily, 'friendly', 'morning');










