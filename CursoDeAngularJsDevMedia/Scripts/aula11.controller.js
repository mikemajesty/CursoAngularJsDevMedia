angular.module("app", ["ngRoute"])
.controller("Aula11controller", function ($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
})
    .controller("InicialController", function ($scope) {
        console.log("Entrou no controle incial");
    })
    .controller("Pagina1Controller", function ($scope) {
        console.log("Entrou no controle 1");
    })
    .controller("Pagina2Controller", function ($scope, $routeParams) {
        $scope.parametros = $routeParams;
        console.log("Entrou no controle 2 com o produto com o id: " + $scope.parametros.idproduto);
    })
.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/',
    {
        templateUrl: 'aula11.inicial.html',
        controller: 'InicialController'
    })
        .when('/pagina1', {
            templateUrl: 'aula11.pagina1.html',
            controller: 'Pagina1Controller'
        })
        .when('/pagina2/:idproduto', {
            templateUrl: 'aula11.pagina2.html',
            controller: 'Pagina2Controller'
        })
    .otherwise
    ({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
});