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
    }).when('/cv', {
      templateUrl: 'views/cv.html',
      controller: 'cvController'
    }).when('/research', {
      templateUrl: 'views/research.html',
      controller: 'researchController'
    }).when('/teaching', {
      templateUrl: 'views/teaching.html',
      controller: 'teachingController'
    }).otherwise({redirectTo: '/home' });

    
    $locationProvider.html5Mode(
        {
            enabled: false,
        });
}]);