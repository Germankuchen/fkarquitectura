angular.module('myApp').controller("ProyectoCtrl",
function($scope) {
	
	$scope.irAAltos = function()
	{
		$location.path('/altosDelSauce');
	}
	
	
});



