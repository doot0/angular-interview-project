 var app = angular.module('app', [])

.controller('FriendsCtrl', ['$scope', function($scope){

  $scope.friends = [{
    name: 'Patrick',
    age: 40,
    gender: 'boy'
  }, {
    name: 'Samantha',
    age: 60,
    gender: 'girl'
  }, {
    name: 'Mackenzie',
    age: 28,
    gender: 'girl'
  }];

  $scope.loadUserStories = function(){
    console.log('load user data');
  };

}])

.controller('FeedCtrl', ['$scope', function($scope){

  $scope.activities = [
    {author: 'Patrick', type: 'add', ts: 1442411533, data: {
      subject : 'Samantha'
    }},
    {author: 'Samantha', type: 'like', ts : 1442411563, data: {
      subject : 'Mackenzie'
    }},
    {author: 'Mackenzie', type: 'photo_upload', ts : 1442411593, data: {
      subject : 'Check out this cool photo!',
      photo_url : 'http://placehold.it/640x640'
    }}
  ];



}])
