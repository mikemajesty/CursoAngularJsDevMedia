app.controller("aula08.controller", function ($scope) {
    $scope.pessoa = novaPessoa();
    $scope.estados = ["RS", "SP", "RJ", "PR", "SC"];

    $scope.pessoas = [];
    $scope.salvarPessoa = function (pessoa) {
        $scope.pessoas.push(pessoa);
        console.log($scope.pessoas);
        $scope.pessoa = novaPessoa();
        $scope.form.$setUntouched();       
        $scope.form.$setPristine();
    }
});

function novaPessoa() {
    return { nome: "", email: "", sexo: "F",estado: "SP" }
}