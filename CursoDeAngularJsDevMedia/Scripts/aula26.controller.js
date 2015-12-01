var app = angular.module('app', ['ui.bootstrap']);

function Aula26Controller($scope) {

    console.log('entrou');
    $scope.accor = { heading: "", conteudo: "" };

    $scope.addAccordion = function () {
        $scope.grupos.push($scope.accor);
        $scope.accor = { heading: "", conteudo: "" };
    }
    $scope.grupos = [{ heading: "dynamic contet", conteudo: "Group's dynamic contet" }, { heading: "dynamic contet", conteudo: "Group's dynamic contet" }, { heading: "dynamic contet", conteudo: "Group's dynamic contet" }];
}
app.controller("Aula26Controller", Aula26Controller);

