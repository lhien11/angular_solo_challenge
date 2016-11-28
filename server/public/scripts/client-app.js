var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'heroes_controller',
      controllerAs: 'heroes'
    })

    .otherwise({
      redirectTo: 'home'
    });

}]);

app.controller("heroes_controller", ["$http", function($http) {
  console.log('running');

  var self = this;

  getHeroes();

  // read only
  function getHeroes() {
    console.log('heroes init');
    $http.get('/heroes')
      .then(function(response){
        console.log(response.data);
        //var empData = response.data;
      self.data = response.data;
    });
  }

  self.addHero = function() {
  //console.log('new employee: ', self.newEmp);
  $http.post('/heroes', self.newHero)
    .then(function(response) {
      //console.log('POST finished. Get salaries again.');
      getHeroes();
    });
}

  self.deletePower = function(heroObj){
    var id = heroObj.id;
    $http.delete('/heroes/' + id)
      .then(function(response){
        console.log("DELETE HIM!! NOW");
        getSuperPower();
      });
  }
}]);
