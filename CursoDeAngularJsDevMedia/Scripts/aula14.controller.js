
function Aula14controller($scope, $http) {
    console.log("Entrou no controller");
    $scope.dados = [];
    $scope.url = "http://api.openweathermap.org/data/2.5/weather?q=";
    $scope.cidade = "São Paulo";
    $scope.icone = "";
    $scope.carregaDados = function () {
        $http.get("Scripts/Aula14.dados.json").success(function (data) {
            console.log("Variavel data: " + data);
            $scope.dados = data;
        }).error(function () {
            alert('Não foí possível carregar os dados');
        });
    }
    //Se for pra executar só chamar a function abaixo.
    //$scope.carregaDados();
    $scope.carregaPrevisao = function () {
        $http.get($scope.url + $scope.cidade+"&units=metric").success(function (data) {
            console.log(data);
            $scope.icone = data.weather[0].icon;
            $scope.descricaoTempo = data.weather[0].description;
        }).error(function () {
            alert('Não foí possível carregar os dados');
        });
    }
}

app.controller("aula14controller", Aula14controller);
