/*
var firstName = 'Juan';
console.log(firstName);

var lastName = 'Perez';
var age = 28;

var fullAge = true;

console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

//comentario en linea
var $3years = 3;
*/
/*==============

* Variable mutation and type cohersion

==============*/
/*
//TYPE COHERSION
var firstName = 'Jhon';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married?: ' + isMarried);


//VARIABLE MUTATION
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married?: ' + isMarried);

var lastName = prompt('What is his lats name?');

console.log('Nombre completo: '+ firstName + ' ' + lastName);

*/
/*==============
* BASIC OPERATORS
==============*/
/*
//Math operators
console.log('Math Operators');

var now, yearJhon, yearCousin;
now = 2018;
ageJhon = 28;
ageCousin = 33;
yearJhon = now - ageJhon;
yearCousin = now - ageCousin;
console.log('year John was born: ' + yearJhon);
console.log('year cousin was born: ' + yearCousin);
console.log(now + 2);
console.log(now * 2);
console.log((now + 1) / 2);

//Logical operators
console.log('Logical Operators');

var isJohnOlder = ageJhon > ageCousin;
console.log('Is Jhon older: ' + isJohnOlder);

//typeof operator
console.log(typeof isJohnOlder);
console.log(typeof ageJhon);
console.log(typeof 'Cousin is older than Jhon');
var x;
console.log(typeof x);

var y;
console.log('type of y: ' + typeof y + ' ' +  y);
y = 3;
console.log('type of y: ' + typeof y + ' ' +  y);
y = 'hi there';
console.log('type of y: ' + typeof y + ' ' + y);
*/
/*==============
* OPERATORS PRECEDENCE
==============*/
/*
var now = 2018;
var yearJhon = 1986;
var fullAge = 18;

// multiple operators
var isFullAge = now - yearJhon >= fullAge; //true
console.log(isFullAge);

//grouping
var ageJhon = now - yearJhon;
var ageMark = 35;
var average = (ageJhon + ageMark) / 2;

console.log(average);

//multiple operators
var x, y;
x = (3 + 5) * 4 - 6;  //26
console.log(x);

// more operators
console.log(x *= 2);
console.log(x += 10);
x++;
console.log(x++);
console.log(x);
*/
/*=====
* CODING CHALLENGE #1
*/
/*
var weightJhon, weightMark, heightJhon, heightMark;

weightJhon = prompt('Ingresa el peso de Jhon');
heightJhon = prompt('Ingresa la estatura de Jhon');
weightMark = prompt('Ingresa el peso de Mark');
heightMark = prompt('Ingresa la estatura de Mark');

var bmiJhon = weightJhon / (heightJhon * heightJhon);
var bmiMark = weightMark / (heightMark * heightMark);

var isBmiOfMarkHigher = bmiMark > bmiJhon;

console.log('BMI de Jhon' + bmiJhon);
console.log('BMI de Mark' + bmiMark);
console.log("Is Mark's BMI higher than Jhon's?: " + isBmiOfMarkHigher);
*/
/* ==============
* IF / ELSE statements
*/
/*
var firstName = 'Jhon';
var civilStatus = 'Single';

if (civilStatus === 'Married') {
    console.log ( firstName + ' is married' );
 }
else {
    console.log ( firstName + ' is single' );
}

var isMarried = false;
    
if (isMarried) {
    console.log ( firstName + ' is married' );
}
else {
    console.log ( firstName + ' is single again' );
}
*/
/*=================
* BOOLEAN LOGIC
=================*/
/*
var firstName = 'Jhon',
    ageJhon = prompt('introduzca una edad.');

if (ageJhon < 13) {
    console.log(firstName + ' is a boy.');
} else if ( ageJhon >=13 && ageJhon < 20) { //between 13 and 20 === age >=13 AND age <20
    console.log(firstName + ' is a teenager'); 
}
else if ( ageJhon >=20 && ageJhon <30) {
    console.log(firstName + ' is a young man.');
}
else {
    console.log(firstName + ' is a man.');
}
*/
/*================
* THE TERNARY OPERATOR and SWITCH STATEMENTS
================*/
/*
var firstName = 'Jhon';
var age = prompt('edad?');
*/
/*
//ternary operator
*/
/*age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

//uso para asignar valor a una variable
var drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' drinks... ' + drink);

//switch statement
var job = prompt('profesion? ');

switch (job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches.');
        break;
    case 'driver':
        console.log(firstName + ' drives.');
        break;
    case 'designer':
        console.log(firstName + ' designs.');
        break;
    default :
        console.log(firstName + ' does other thing.');
}
*/
/*
switch (true) {
    case age < 13 :
        console.log(firstName + ' is a boy.');
        break;
    case age >=13 && age < 20 :
        console.log(firstName + ' is a teenager');
        break;
    case age >=20 && age <30 :
        console.log(firstName + ' is a young man.');
        break;
    default :
        console.log(firstName + ' is a man.');        
}
*/
/*=============
* TRUTHY and FALSY VALUES and EQUALITY OPERATORS
=============*/
/*
//Falsy: undefined, null, empty string (''), 0, Not a Number (NaN)
//Truthy: everything not Falsy
*/
/*
var height;

height = 0;

if (height || height === '0') {
    console.log('variable defined');
} else {
    console.log('variable has NOT been defined');
}
*/
/*
var jhonGame1 = 103,
    jhonGame2 = 101,
    jhonGame3 = 105,
    mikeGame1 = 54,
    mikeGame2 = 52,
    mikeGame3 = 56,
    saraGame1 = 50,
    saraGame2 = 60,
    saraGame3 = 70,
    avgJhon, avgMike, avgSara;

avgJhon = ((jhonGame1 + jhonGame2) + jhonGame3) / 3 ;
avgMike = ((mikeGame1 + mikeGame2 + mikeGame3) / 3) ;
avgSara = ((saraGame1 + saraGame2 + saraGame3) / 3) ;

console.log(jhonGame1, jhonGame2, jhonGame3, avgJhon);

switch (true) {
    case ( avgJhon > avgMike ) && ( avgJhon > avgSara ) :
            console.log('Winner: Jhon. Average: ' + avgJhon);
            break;
    
    case ( avgMike > avgJhon ) && ( avgMike > avgSara ) :
            console.log('Winner: Mike. Average: ' + avgMike);
            break;
        
    case ( avgSara > avgMike ) && ( avgSara > avgJhon ) :
            console.log('Winner: Sara. Average: ' + avgSara);
            break;
    
    default :
        if ( avgJhon === avgMike === avgSara ) {
            console.log('Empate. Average: ' + avgSara);
        }
}
*/
/*==============
* FUNCTIONS
==============*/
/*
function calculateAge ( birthYear ){
    return 2018 - birthYear;
}

console.log( calculateAge(1977) );

function yearsUntilRetirement(birthYear, firstName) {
    var age = calculateAge(birthYear);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired');
    }
        
}

yearsUntilRetirement(1977, 'Alvaro');
yearsUntilRetirement(1947, 'Alejandro');
yearsUntilRetirement(1997, 'Carlos');
*/
/*==============
* FUNCTIONS STATEMENTS AND EXPRESSIONS
==============*/
/*
// function expression

var whatDoYouDo = function(job, firstName) {
    switch (job){
        case 'teacher' :
            return firstName + ' teaches';
        case 'designer' :
            return firstName + ' designs';
        case 'Driver' :
            return firstName + ' drives';
        default :
            return firstName + ' does something else';
    }
}

console.log (whatDoYouDo ('taxista', 'Jhon'));
*/
/*=================
* ARRAYS
=================*/
/*
//definition of arrays
var names = [ 'Jhon', 'Mike', 'Jane'];
var years = new Array( 1990, 1969, 1948);

console.log (names[0]);
console.log (names);
console.log (names.length);

//data mutation within arrays
names[1] = 'Ray';
console.log (names);

names[5] = "mary";
console.log (names);

names[names.length] = "Cris";
console.log (names);

// different types within arrays
var jhon = ['Jhon', 'Rivers', 1980, 'driver', false];
console.log(jhon);

jhon.push('blue');
jhon.unshift('Mr.');
console.log(jhon);

jhon.pop();
console.log(jhon);

jhon.shift();
console.log(jhon);

console.log(jhon.indexOf(1980));
console.log(jhon.indexOf(1977));

var consulta = jhon.indexOf('designer') === -1 ? 'Jhon is NOT a designer' : 'Jhon is a designer';
console.log(consulta);
*/
/*=================
* CODING CHALLENGE III
=================*/
/*
var restaurantFees = [124, 48, 268];

function anyadePropina (fee) {
    if (fee<50){
        return fee*1.2;
    } else if (fee>200) {
        return fee*1.1;
    } else {
        return fee*1.15;
    }
}

var finalFees = new Array;
finalFees.push(anyadePropina(restaurantFees[0]));
finalFees.push(anyadePropina(restaurantFees[1]));
finalFees.push(anyadePropina(restaurantFees[2]));

console.log(restaurantFees);
console.log(finalFees);
*/
/*=================
* OBJECTS AND PROPERTIES
=================*/
/*
var jhon = {
    firstName:  'Jhon',
    lastName:   'Smith',
    birthDate:  1990,
    family:     ['Jane', 'Mark', 'Bob', 'Emily'],
    job:        'Driver',
    isMarried:  false
}

console.log(jhon.firstName);
console.log(jhon['lastName']);
var x = 'birthDate';
console.log(jhon[x]);

console.log(jhon);
jhon.job = 'designer';
jhon.isMarried = true;
console.log(jhon);

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1980;
jane['lastName'] = 'River';
console.log(jane);
*/
/*=================
* OBJECTS AND METHODS
=================*/
/*
var jhon = {
    firstName:  'Jhon',
    lastName:   'Smith',
    birthYear:  1990,
    family:     ['Jane', 'Mark', 'Bob', 'Emily'],
    job:        'Driver',
    isMarried:  false,
    calcAge:    function() {
        this.age = 2018 - this.birthYear;
    }
};

jhon.calcAge();
console.log(jhon);
*/
/*=============
* CODING CHALLENGE 4
=============*/
/*
var jhon = {
    fullName:   'Jhon Rivers',
    mass:       80,
    height:     1.60,
    calcBMI:    function() {
        this.bmi = this.mass / ( this.height * this.height);
        return this.bmi;
    }
}
var mark = {
    fullName:   'Mark Smith',
    mass:       80,
    height:     1.60,
    calcBMI:    function(){
        this.bmi = this.mass / ( this.height * this.height);
        return this.bmi;
    }
}
switch (true) {
    case (jhon.calcBMI > mark.calcBMI) :
        console.log('highest BMI: ' + jhon.bmi + ' from ' + jhon.fullName);
        break;
    case (jhon.calcBMI < mark.calcBMI) :
        console.log('highest BMI: ' + mark.bmi + ' from ' + mark.fullName);
        break;
    default :  
        console.log('BMI: ' + mark.bmi + ' de ambos');
}
*/
/*=========
* LOOPS AND ITERATIONS
=========*/
/*
// FOR loop
for (var i = 0; i<10; i++) {
    console.log(i);
}

var jhon = ['Jhon', 'Smith', 1990, 'Designer', false];
for (var i=0; i<jhon.length; i++){
    console.log(jhon[i]);
}

// WHILE loop
var i = 0;
while (i<jhon.length){
    console.log(jhon[i]);
    i++;
}

//continue and break statements
var jhon = ['Jhon', 'Smith', 1990, 'Designer', false];
for (var i=0; i<jhon.length; i++){
    if (typeof jhon[i] !== 'string') continue;
    console.log(jhon[i]);
}

console.log('.');
var jhon = ['Jhon', 'Smith', 1990, 'Designer', false];
for (var i=0; i<jhon.length; i++){
    if (typeof jhon[i] !== 'string') break;
    console.log(jhon[i]);
}

console.log('..');
console.log(jhon);
for (var j=jhon.length-1; j>=0; j--){
    console.log(jhon[j]);
}
*/
/*=========
* CODING CHALLENGE #5
=========*/

var jhonRestaurants = {
    bills:      [124, 48, 268, 180, 42],
    tips:       [],
    calcTip:    function() {
                    for (var i=0; i<this.bills.length; i++) {
                        switch (true) {
                            case this.bills[i] < 50: 
                                this.tips.push(this.bills[i]*0.2);
                                break;
                            case this.bills[i] > 200: 
                                this.tips.push(this.bills[i]*0.1);
                                break;
                            default:
                                this.tips.push(this.bills[i]*0.15);
                        }
    
                    }
                }
}
    
jhonRestaurants.calcTip();

var finalBills = jhonRestaurants.bills,
    finalTips = jhonRestaurants.tips,
    totals = [];

for (var i=0; i<jhonRestaurants.bills.length; i++) {
    totals.push(jhonRestaurants.bills[i] + jhonRestaurants.tips[i]);
}

var marksRestaurants = {
    bills:      [77, 375, 110, 45],
    tips:       [],
    calcTip:    function() {
                    for (var i=0; i<this.bills.length; i++) {
                        switch (true) {
                            case this.bills[i] < 100: 
                                this.tips.push(this.bills[i]*0.2);
                                break;
                            case this.bills[i] > 300: 
                                this.tips.push(this.bills[i]*0.25);
                                break;
                            default:
                                this.tips.push(this.bills[i]*0.1);
                        }
    
                    }
                }
    }

marksRestaurants.calcTip();
function calcAVG(values) {
    var sum = 0;
    for (var i=0; i<values.length; i++) 
        sum+=values[i];
    return sum/values.length;
}

jhonRestaurants.average = calcAVG(jhonRestaurants.tips);
marksRestaurants.average = calcAVG(marksRestaurants.tips);

console.log(jhonRestaurants.tips, marksRestaurants.tips);
console.log(jhonRestaurants.average, marksRestaurants.average);


if (jhonRestaurants.average > marksRestaurants.average) console.log('Jhon tips avg is the highest');
else if (jhonRestaurants.average < marksRestaurants.average) console.log('Marks tips avg is the highest');
else console.log('Both families paid the same');




