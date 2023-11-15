"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

//Question 1
function isTrue(userInput) {
    if( userInput === true) {
        return true;
    } else{
        return false;
    }
}

//Question 2
function isFalse(userInput) {
    if( userInput === false) {
        return true;
    } else{
        return false;
    }
}

//Question 3
function not(userInput) {
    if (!(userInput)) {
        return true;
    } else{
        return false;
    }
}

//Question 4
function addOne(userInput) {

       return Number(userInput) + 1;
}


//Question 5
function isEven(input) {
    if(typeof input === "number" || typeof input === "string" && !isNaN(input)) {
        return Number(input) % 2 === 0;
    } else {
        return false;
    }
}


//Question 6
function isIdentical(input, number) {
    if( input === number) {
        return true;
    } else {
        return false;
    }
}


//Qusetion 7

function isEqual(input, number){
    if( input == number) {
        return true;
    } else {
        return false;
    }
}

//Question 8
function or(input, number) {
    return (input || number);
}

//Question 9

function and(input, number) {
    return input && number;
}



//question 10
function concat(input, number) {
    if(typeof input === "string" && typeof number === "string") {
        return input + number;
    }

    if(typeof input === "number" && typeof number === "number") {
        return input.toString() + number.toString();
    }

    if(typeof input === "string" && typeof number === "number") {
        return input + number.toString();
    }

    if(typeof input === "boolean" && typeof number === "boolean") {
        return input.toString() + number.toString();
    }
}



















