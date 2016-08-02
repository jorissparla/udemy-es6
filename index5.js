// Rest and Spread

// Refactor the following function to use the rest operator.  Remember, an argument using the rest operator does *not* need to be called 'rest'.

function productOld(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

function product(...numbers) {
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

var total = product(23,12,38);

// refactor

function joinOld(array1, array2) {
  return array1.concat(array2);
}

function join(array1, array2) {
  return [...array1, ...array2];
}

// refactor

function unshiftOld(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

function unshift(array, ...numbers) {
  return [...numbers, ...array];
}

// DESTRUCTURING

/*The snippet of code below duplicates references to 'profile' inside of the 'isEngineer' function.  Perhaps we can reduce the amount of code used for referencing the 'title' and 'department' properties.  Refactor this code to use destructuring.  Can you get the body of the 'isEngineer' function down to a single line?*/

function isEngineerOld(profile) {
  var title = profile.title;
  var department = profile.department;
  return title === 'Engineer' && department === 'Engineering';
}


const profile = {
  title: 'Engineer',
  department: 'Engineering'
};



function isEngineer({title, department}) {
  return title === 'Engineer' && department === 'Engineering';
}
