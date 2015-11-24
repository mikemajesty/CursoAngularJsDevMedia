app.controller('aula06.controller', function ($scope) {
    $scope.nome = "Mike Rodrigues de Lima";
    $scope.olamundo = function (nome) {
        alert(nome);    
    }
});