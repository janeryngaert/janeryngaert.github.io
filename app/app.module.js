let app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
     $routeProvider
   .when('/', {
    templateUrl: 'home.html',
    controller: 'homeController',
  })
//   .when('/', {
//     templateUrl: 'chapter.html',
//     controller: 'ChapterController'
//   });
});