var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'heroes_controller',
      controllerAs: 'heroes'
    })

    // .when('/heros', {
    //   templateUrl: '/views/templates/heroes.html',
    //   controller: 'heroes_Controller',
    //   controllerAs: 'heroes'
    // })

    .otherwise({
      redirectTo: 'home'
    });

}]);

// app.controller("heroes_Controller", ["$http", function($http) {
//   console.log('running hero');
//
//   var self = this;
//   self.name = {};
//   self.description = [];
//
//   getHeroes();
//
//   // read only
//   function getHeroes() {
//     console.log('heroes init');
//     $http.get('/heroes')
//       .then(function(response) {
//         console.log(response.data);
//         var empData = response.data;
//       self.data = response.data;
//     });
//   }
//
//
// }]);
app.controller("heroes_controller", ["$http", function($http) {
  console.log('running');

  var self = this;
  self.name = {};
  self.description = [];

  getSuperPower();

  // read only
  function getSuperPower() {
    console.log('heroes init');
    $http.get('/heroes')
      .then(function(response) {
        console.log(response.data);
        var empData = response.data;
      self.data = response.data;
    });
  }

  self.deletePower = function(heroObj){
    var id = heroObj.id;
    $http.delete('/heroes/' + id)
      .then(function(response){
        console.log("DELETE HIM!! NOW");
        getSuperPower();
      })
  }
}]);
