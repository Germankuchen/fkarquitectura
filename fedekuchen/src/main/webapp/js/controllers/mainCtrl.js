angular.module('myApp').controller("MainCtrl",
function($scope, $location) {
	console.log('Llego al Main');
	
	$scope.init = function()
	{
		$('.carousel').carousel({
	        interval: 4000
	    })
	}
	
	$scope.irADisenio = function()
	{
		$location.path('/disenio');
	}
	
	$scope.init();
	
});



