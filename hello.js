console.log('Hello');

/* let str = 12;
console.log(typeof(str));

let arr = [1, 'Tea', undefined];
console.log(typeof(arr));
*/

// Exercise 1 ************************************************************
/* let Ex1 = [];
//console.log(typeof(Ex1));

Ex1['Name'] = 'Sam';
Ex1['Age'] = '12';
Ex1['Country'] = 'Australia';
Ex1['City'] = 'Sydney';

// output
// ?name=Sam&age=12&country=Australia&city=Sydney
let dummy;
for (let key in Ex1) {
     dummy += "?" + key + "=" + Ex1[key] + "&";
 }

console.log(dummy); */
// ************************************************************************

//Exercise 2

/* function add(number) {
    for( let i=0; i < arguments.length; i++) {
        i += arguments[i];
        // return i;
    }
}
let output = add(2, 4);
console.log(output); */



/* let doSomeWork = function() {
return console.log("worked out");
}
// doSomeWork();
 console.log(doSomeWork()) */

 //********************************************************************
// function overloading

function play() {
    console.log("I'm called without parameter");
}

function play(one) {
    console.log("I'm called with one parameter");
}
play('one');
function play(one, two) {
    console.log("I'm called with two parameter");
}

play();

/* function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

let output = function(a, b, operand) {
    if( operand == '+') {
        return add(a, b);
    }
    else if ( operand == '-' ) {
        return subtract(a, b);
    }
    else {
        console.log("unknown operand");
    }

    }


// console.log(output(2, 4, '+'));
// console.log(output(2, 4, '-'));
// console.log(output(2, 4, '0'));

let numbers = [101, 22, 43, 14, 5, 906, 310, 561, 84, 23, 100];
//numbers.forEach(function(num) {
//    console.log(num)
//})

let oddNum = numbers.forEach(function(num) {
    if(num % 2 == 0 ) {
        console.log(num);
    }
})

// console.log(oddNum);
*/





