angular.module('myApp').config(function($routeProvider) {$routeProvider
    .when("/", {
        templateUrl : "main.html",
        controller: "MainCtrl"
    })
    .when("/obras", {
        templateUrl : "proyectos.html",
        controller: "ProyectoCtrl"
    })
    .when("/contacto", {
        templateUrl : "contacto.html",
        controller: "ContactoCtrl"
    })
    .when("/disenio", {
        templateUrl : "disenio.html",
        controller: "DisenioCtrl"
    })
});


