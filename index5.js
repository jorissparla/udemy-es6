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

/*
The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in.  Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject.  Use array destructuring and the map helper.
An array for a class has the form [subject, time, teacher]
The resulting data structure should look something like the following:
const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]
*/


const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
	return {subject, time, teacher}
});


const numbers = [1,2,3,4,5,6];

function double(numbers) {
    const [number, ...rest] = numbers;
    
    if (rest.length) {
        return [number * 2, ...double(rest)];
    } else {
        return [number * 2];
    }
}
double(numbers);