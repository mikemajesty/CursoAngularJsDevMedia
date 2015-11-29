
var app = angular.module('app', ['ngCookies']);


function Aula19controller($scope, $cookieStore) {
    //Setar um cookie
   // $cookieStore.put("nome", "Mike Rodrigues De Lima");
    //remover um cookie
    //$cookieStore.remove("nome");
    $scope.criarCookie = function () {
        $cookieStore.put("dados", { nome: "Mike Rodrigues De Lima", idade: 26 });
    }
    $scope.getValorCookie = function () {
        console.log($cookieStore.get("dados"));
    }
    $scope.removeCookie = function () {
        $cookieStore.remove("dados");
    }
}
function Aula19controller_2($scope, $cookieStore) {
    $scope.getValorCookieC2 = function () {
        console.log($cookieStore.get("dados"));
    }
}
app.controller("Aula19controller_2", Aula19controller_2);
app.controller("Aula19controller", Aula19controller);

