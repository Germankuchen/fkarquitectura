angular.module('myApp').controller("ContactoCtrl",
function($scope) {
	$scope.nombre = null;
	$scope.email = null;
	$scope.mensaje = null;
	
	$scope.enviar = function()
	{
		console.log('Los datos ingresados son: ' + $scope.nombre + ' - ' + $scope.email + ' - ' + $scope.mensaje);
		alert('Su mensaje fue enviado con éxito');
	}
});



