var searchApp = angular.module("searchApp", ["ngRoute", "ngAnimate"]);

searchApp.config(function($routeProvider){
	$routeProvider
		.when("/angularApp", {
			templateUrl: "Partials/angularApp.html",
			controller: "CarListCtrl"
		})
		.when("/JavaScriptApp", {
			templateUrl: "Partials/JavaScriptApp.html",
			controller: "CarListCtrl2"
		})
		.when("/details",{
			templateUrl: "Partials/details.html"
		})
		.otherwise({
			redirectTo: "/angularApp"
		});
});

searchApp.controller("HeaderCtrl", function($scope, $location){
	$scope.appDetails = {
		title: "carStock",
		tagline: "search your fav cars here"
	}
	$scope.nav = {};
	$scope.nav.isActive = function(path){
		if(path == $location.path()){
			return true;
		}
		return false;
	}

});

searchApp.controller("CarListCtrl", function($scope, $http) {
	$http.get('data/car.json').then(function(response){
		$scope.cars = response.data.carStock;
		console.log($scope.cars);
	});

	$scope.searchString = "";

	 $scope.price = {
	 	min: 0,
	 	max: 120000
	 };
});

searchApp.controller("CarListCtrl2", function($scope, $http) {
	$http.get('data/car.json').then(function(response){
		$scope.cars = response.data.carStock;
		console.log($scope.cars);
	});

	$scope.searchString = "";

	 $scope.price = {
	 	min: 0,
	 	max: 120000
	 };
});

searchApp.filter('priceFilter', function(){
	return function(cars, val) {
		var filtered = [];

		var max = val.max;
		var min = val.min;

		angular.forEach(cars, function(car){
			if(car.price <= max && car.price >= min){
				filtered.push(car);
			}
		});
		return filtered;
	}
});