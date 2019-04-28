let app = angular.module('jane-ryngaert-app', ['ngRoute']);

app.config([  
    '$locationProvider','$routeProvider', function (  
    $locationProvider, $routeProvider) {
  $routeProvider
      .when('/', {redirectTo: '/home' })
    .when('/home', {
      templateUrl: '/app/views/home.html',
      controller: 'homeController',
    })
    .when('/contact', {
      templateUrl: '/app/views/contact.html',
      controller: 'contactController'
    }).when('/cv', {
      templateUrl: '/app/views/cv.html',
      controller: 'cvController'
    }).when('/research', {
      templateUrl: '/app/views/research.html',
      controller: 'researchController'
    }).when('/teaching', {
      templateUrl: '/app/views/teaching.html',
      controller: 'teachingController'
    }).otherwise({redirectTo: '/home' });
    $locationProvider.html5Mode(
        {
            enabled: false,
        });
   // $locationProvider.hashPrefix("");
}]);