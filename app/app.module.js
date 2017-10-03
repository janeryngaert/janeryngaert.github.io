let app = angular.module('jane-ryngaert-app', ['ngRoute']);

app.config([  
    '$locationProvider','$routeProvider', function (  
    $locationProvider, $routeProvider) {
  $routeProvider
      .when('/', {
      templateUrl: 'app/views/home.html',
      controller: 'homeController',
    })
    .when('/home', {
      templateUrl: 'app/views/home.html',
      controller: 'homeController',
    })
    .when('/contact', {
      templateUrl: 'app/views/contact.html',
      controller: 'contactController'
    }).otherwise({redirectTo: '/home' });

    
    $locationProvider.html5Mode(
        {
            enabled: false,
        });
}]);