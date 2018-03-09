angular.module('myApp').controller("MainCtrl",
function($scope, $location) {
	console.log('Llego al Main');
	
	$scope.irADisenio = function()
	{
		$location.path('/disenio');
	}
	
});



