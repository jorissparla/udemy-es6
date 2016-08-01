// filter

var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers= users.filter(function(user) {
    return user.admin
})

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
});

function reject(array, iteratorFunction) {
  return array.filter(function (item) {
  	return (! iteratorFunction(item))
  })
}