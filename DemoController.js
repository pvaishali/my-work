// Here the Component name is DemoComponent
// so saving the file as DemoComponent.js
app.controller('DemoController', function ($scope) {

	$scope.list = ['A', 'E', 'I', 'O', 'U'];
	$scope.choice = 'Your choice is: GeeksforGeeks';

	$scope.ch = function (choice) {
		$scope.choice = "Your choice is: " + choice;
	};

	$scope.c = function () {
		$scope.choice = "Your choice is: " + $scope.mychoice;
	};
});
