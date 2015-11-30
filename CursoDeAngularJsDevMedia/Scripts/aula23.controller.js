
var app = angular.module('app', ['ui.unique','ui.validate']);


function Aula23Controller($scope) {
    $scope.usuario = [{ nome: 'mike', idade: 26 }, { nome: 'mike 1' , idade: 26 }, { nome: 'mike 1', idade: 27 }, { nome: 'mike', idade: 27 }];
    $scope.validar = function (valor) {
        return valor === $scope.senha;
    }
}
app.controller("Aula23Controller", Aula23Controller);

