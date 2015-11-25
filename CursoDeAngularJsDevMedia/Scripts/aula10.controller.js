function Aula10controller($scope,$filter) {
    console.log("Iniciou o serviço");
    //tem que adicionar o Filter, na assinatura do metodo, padrão angular kkkk
    //console.log(retornaoiFilter("Digimon"));
    console.log($filter("retornaoi")("Agumon"));
    $scope.pessoa = {
        nome: "Mike Lima",
        idade: 26,
        estado: "SP"
    };
}
app.controller("Aula10controller", Aula10controller);