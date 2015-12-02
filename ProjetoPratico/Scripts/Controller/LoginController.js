var app = angular.module("app", []);
function LoginController($scope, $http) {
    console.log("Entrou");
    $scope.Login = {
        User: "",
        Senha: ""
    }
    $scope.fazerLogin = function () {
        debugger;
        $http.post("/Noticia/Login", $scope.Login)
        .success(function (data) {
            console.log(data);
            //redireciona o usuario
        });
        
    }
}
app.controller("LoginController", LoginController);
