angular.module('myApp').controller("AsideCtrl",
function($scope,$location) {
	console.log('Llego al Aside');
	
	$scope.irAContacto = function()
	{
		$location.path('/contacto');
	}
	
	$scope.irADisenio = function()
	{
		$location.path('/disenio');
	}
	
	$scope.irAProyecto = function()
	{
		$location.path('/obras');
	}
	
	$scope.irAInicio = function()
	{
		$location.path('/');
	}

	
});



