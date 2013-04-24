traveltours = {};

var travelToursModule = angular.module('TravelTours', ['ui.bootstrap', 'ngResource']);

/*
, function ($httpProvider) {
        $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    }
);
*/

//Set up the routes....
travelToursModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/home', {templateUrl: 'partials/traveltours/home/home.html', controller: traveltours.home.HomeCtrl}).
        when('/travel', {templateUrl: 'partials/traveltours/travel/travel.html', controller: traveltours.travel.TravelController}).
        otherwise({redirectTo: '/home'});
}]);
