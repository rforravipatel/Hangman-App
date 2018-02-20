var app = angular.module("HangmanApp",[]);
app.controller("GameController",['$scope',function($scope){
	
	var randomWords = ["jigar","jeel","ruchi","ravi","joy","fenil"];
	$scope.incorrectWords = [];
	$scope.correctWords = [];
	$scope.guesses = 6;
	$scope.displayWord = '';
	$scope.input = {
		letter : ''
	}

	var randomWord = function(){
		var index = Math.round(Math.random()*randomWords.length);
		return randomWords[index];
	}

	var gamestart = function(){
		
		$scope.incorrectWords = [];
		$scope.correctWords = [];
		$scope.guesses = 6;
		$scope.displayWord = '';

		selectedWord = randomWord();
		console.log(selectedWord);
	}

	gamestart();

}]);