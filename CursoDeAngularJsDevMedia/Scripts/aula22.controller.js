
var app = angular.module('app', ['ui.highlight', 'ui.mask', 'ngSanitize']);


function Aula22controller($scope) {

    $scope.texto = "essa é uma breve introduçãoessa é uma breve introduçãoessa é uma breve introduçãoessa é uma breve introduçãoessa é uma breve introduçãoessa é uma breve introduçãoessa é uma breve introduçãoessa é uma breve introduçãoessa é uma breve introduçãoessa é uma breve introduçãoessa é uma breve introduçãoessa é uma breve introduçãoessa é uma breve introduçãoessa é uma breve introduçãoessa é uma breve introduçãoessa é uma breve introduçãoessa é uma breve introduçãoessa é uma breve introduçãoessa é uma breve introdução";
    $scope.maskCPF = '999.999.999-99';
    $scope.maskPhone = '(99) 99999-9999';
    /*
    9 somente numeros;
    A somente letras
    * qualquer coisa
    */
}
app.controller("Aula22controller", Aula22controller);

