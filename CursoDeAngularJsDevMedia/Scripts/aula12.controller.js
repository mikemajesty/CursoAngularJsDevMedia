var app = angular.module("app", ["ngSanitize"]);
function Aula12controller($scope) {
    $scope.mostrar = false;
    $scope.variavelHtml = "<h1>seja bem vindo mike rodrigues de lima</h1>";
    $scope.minhaClass = "";
    $scope.variavelCloack = "meu texto muito grandão";
    $scope.minhaFoto = "foto1.png";
}
app.controller("aula12controller", Aula12controller);
