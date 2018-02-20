var app = angular.module("HangmanApp",[]);
app.controller("GameController",['$scope',function($scope){
	$scope.test = "Helllo World";
	console.log($scope.test);
}]);