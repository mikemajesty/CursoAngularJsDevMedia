var app = angular.module('app', ['ngAnimate']);
function Aula17controller($scope) {
    $scope.itens = ['1','2','3','4','5'];
    $scope.adicionaItem = function () {
        if ($scope.itens.indexOf($scope.itemadd) == -1) {
            $scope.itens.push($scope.itemadd);
        }
       
    }
}

app.controller("Aula17controller", Aula17controller);

