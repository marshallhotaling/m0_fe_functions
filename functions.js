// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting () {
console.log (" hello how are you")
}
greeting()

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting (name) {
    return `Hi, ${name}!`;
}
console.log (customGreeting("Marshall"));

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson (firstName,middle,lastName){
    return  `Hi, ${firstName},${middle},${lastName}`
}
console.log (greetPerson("Marshall","William","Hotaling"));





// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square (num1){
    return (Math.sqrt(num1))
}
console.log(square(3))
// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.
function checkStock (num1, name) {
    if (num1 >= 4 ) {
        console.log( `${name} is stocked`)
    } else if (num1 >= 1) {
        console.log( `${name} running low`)
    } else if (num1 === 0 ){
        console.log( `${name} out of stock`)
    } 
}
checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
function hello (){


    
}