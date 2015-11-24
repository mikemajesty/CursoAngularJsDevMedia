
var appSaudacao = angular.module('appSaudacao', []);
appSaudacao.filter("Ola", function () {
    return function (nome) {
        return "Olá: " + nome + "!";
    }
});