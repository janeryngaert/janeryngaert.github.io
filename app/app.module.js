let app = angular.module('jane-ryngaert-app', ['ngRoute']);

app.config([  
    '$locationProvider','$routeProvider', function (  
    $locationProvider, $routeProvider) {
  $routeProvider
      .when('/', {
      templateUrl: 'views/home.html',
      controller: 'homeController',
    })
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'homeController',
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'contactController'
    }).otherwise({redirectTo: '/home' });

    
    $locationProvider.html5Mode(
        {
            enabled: false,
        });
}]);