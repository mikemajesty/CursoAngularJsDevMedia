app.controller("aula09.controller", ["$scope", "operacoes","Pessoa" ,function ($scope, operacoes,Pessoa) {
    $scope.pessoa = new Pessoa();
    console.log("Criou uma nova inatancia do objeto");
}]);