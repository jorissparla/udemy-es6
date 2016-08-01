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

//find

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

function findWhere(array, criteria) {
    var property = Object.keys(criteria);
    return array.find(function (item) {
        return item[property] === criteria[property]
    })
};


findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }

// every and some

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

users.every(function(user) {
    return user.hasSubmitted;
});

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request) {
    return request.status === 'pending'
});
