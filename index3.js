// reduce
/*
Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'
*/
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce((tot, trip)=> tot+trip.distance,0)




/*

Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
Hint: Don't forget to return the accumulator object (the first argument to the iterator function)
*/
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var result = {
    standing: 0,
    sitting: 0
}

var deskTypes = desks.reduce(function(result, desk) {
    if (desk.type === 'sitting') {
        result.sitting++;
    }
    if (desk.type === 'standing') {
        result.standing++;
    }
    return result;
}, result);
/*
Write a function called 'unique' that will remove all the duplicate values from an array.

For example, given the following array:
var numbers = [1, 1, 2, 3, 4, 4];
Your function should return
[1, 2, 3, 4]
Hint: Use the 'reduce' and 'find' helpers. 

*/
var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
    return array.reduce(function(uniq, item) {
        if (uniq.length === 0) {
            uniq.push(item)
        }
        else {
            if (! uniq.find (function(i) { return i===item})) 
            {
                uniq.push(item)
                
            }
        }
        console.log(uniq)
        return uniq
    }, [])
}

var a = unique(numbers)