var app = angular.module("HangmanApp",[]);
app.controller("GameController",['$scope','$timeout',function($scope,$timeout){
	
	var randomWords = ["jigar","jeel","ruchi","ravi","joy","fenil"];
	$scope.incorrectLetter = [];
	$scope.correctLetter = [];
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
		
		$scope.incorrectLetter = [];
		$scope.correctLetter = [];
		$scope.guesses = 6;
		$scope.displayWord = '';

		selectedWord = randomWord();
		console.log(selectedWord);
		var starselectedWord = '';
		for (var i = 0; i < selectedWord.length; i++) {
			starselectedWord += '*';
		}
		console.log(starselectedWord);
		$scope.displayWord = starselectedWord; 
	}

	$scope.letterchosen = function(){
		for (var i = 0; i < $scope.correctLetter.length; i++) {
			if ($scope.correctLetter[i].toLowerCase()==$scope.input.letter.toLowerCase) {
				$scope.input.letter="";
				return;
			}
		}

		for (var i = 0; i < $scope.incorrectLetter.length; i++) {
			if ($scope.incorrectLetter[i].toLowerCase()==$scope.input.letter.toLowerCase) {
				$scope.input.letter="";
				return;
			}
		}

		var correct = false;
		for (var i = 0; i < selectedWord.length; i++) {
			
			if (selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()) {
				$scope.displayWord =  $scope.displayWord.slice(0,i)+$scope.input.letter.toLowerCase()+$scope.displayWord.slice(i+1);
				correct = true;
				// console.log(correct);
			}
		}
		// console.log(correct);
		if(correct){
			// console.log('in true');
			$scope.correctLetter.push($scope.input.letter.toLowerCase());
		}else{
			$scope.guesses--;
			// console.log('in false');
			$scope.incorrectLetter.push($scope.input.letter.toLowerCase());
		}
		$scope.input.letter='';
		if($scope.guesses==0){
			alert("you lost!");
			$timeout(function(){
				gamestart();
			},500);
		}
		if($scope.displayWord.indexOf("*")==-1){
			alert("you won");
			$timeout(function(){
				gamestart();
			},500);
		}
	}

	gamestart();

}]);