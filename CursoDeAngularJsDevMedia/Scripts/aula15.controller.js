var app = angular.module('app', ['ngResource']);
function Aula15controller($scope, Livros) {
    console.log("Entrou no Controller")
    $scope.carregaLivros = function () {
        Livros.get();
    }
    $scope.getLivro = function (livroid) {
        Livros.get({ livroid: livroid }, function () {
            console.log("Entrou no  Livros.get")
        });
    }
    $scope.salvarLivro = function () {
        livro = {
            "id": 40,
            "titulo": "DevMedia"
        };  
        Livros.save({},livro);
    }
}
app.factory('Livros', ['$resource', function ($resource) {
    console.log("Entrou na Função Listas")
    return $resource('/Scripts/Aula15.dados.json')
}]);
app.controller("aula15controller", Aula15controller);
