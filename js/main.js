/**
 * Main AngularJS Web Application
 */
var app = angular.module('sarahtursiWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "components/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "components/about.html", controller: "PageCtrl"})
    .when("/rates", {templateUrl: "components/rates.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "components/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "components/contact.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "components/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});