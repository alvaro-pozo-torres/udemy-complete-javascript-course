///////////////////////////////////////
// Lecture: Hoisting
/*
//functions
calcAge(1980);

function calcAge(year) {
    console.log(2018 - year);
}

//calcYearsUntilRetirement(1980);

var calcYearsUntilRetirement = function(year) {
    console.log (65 - (2018 - year));
}

//variables
console.log(age);
var age = 41;

function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
*/
///////////////////////////////////////
// Lecture: Scoping


// First scoping example
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}
*/
///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);
/*
calcAge(1977);

function calcAge(year) {
    console.log(2018-year);
    console.log(this);
}
*/
var jhon = {
    name: 'Jhon',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2018-this.yearOfBirth);
        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
}

jhon.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth = 1984,
    
};

mike.calculateAge = jhon.calculateAge;
mike.calculateAge();






