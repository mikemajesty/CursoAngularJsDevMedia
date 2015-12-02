var app = angular.module("app", []);
function LoginController($scope, $http) {
    console.log("Entrou");
    $scope.Login = {
        User: "",
        Senha: ""
    };

    //$scope.fazerLogin = function () {
       
        //$http.post("/Noticia/Index", $scope.Login)
        //.success(function (data) {
        //    debugger;
        //    console.log(data);
        //    //redireciona o usuario
        //});
        //alert('oi');
    //}
}
app.controller("LoginController", LoginController);
