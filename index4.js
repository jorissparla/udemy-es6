// Template Strings

function doubleMessage(number) {
  return `Your number doubled is ${2*number}`
}

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red: `${red}`, blue: `${blue}` }

// arrow functions

/*
The function below uses the 'function' keyword.  There's nothing wrong with using the 'function' keyword here, but it might look a bit nicer if we refactor it to use the fat arrow syntax instead.  

Refactor the code below to use a fat arrow function.  Remember the rules of fat arrow functions:

If the function has a single expression in its body, the curly braces and 'return' keyword can be removed
If the function has a single argument, the parentheses around the argument list can be removed

*/

const fibonacci1 = function(n) {
  if (n < 3) return 1;
  return fibonacci1(n - 1) + fibonacci1(n - 2);
}

const fibonacci =(n) => {
 if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/*
Arrow functions bind the value of 'this' to the surrounding context, and sometimes this isn't the behavior we expect.  The code below has an object that represents a users profile.  The profile has a 'name' currently.  Add another key to this object called 'getName'.  'getName' should be a function that returns the profiles name, using 'this.name'.  Does the solution work with a fat arrow function or will you have to use a function keyword instead?
*/

const profile = {
    name: 'Alex',
  	getName: function() {return this.name}
};

// enhanced literals

const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields };


const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width, 
    height 
  };
}
// default function arguments

function addOffset(style ={}) {

  style.offset = '10px';
  
  return style;
}

