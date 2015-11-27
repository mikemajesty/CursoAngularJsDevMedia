
function Aula13controller($scope) {
    $scope.variavel = "Mike Rodrigues de lima"
    console.log("Entrou no controller");
}
app.controller("aula13controller", Aula13controller);

app.directive("ngOla", function () {
    console.log("Entrou na directive");
    return {
        //onde o [A] representa que sera exibido em um formato HTML
        //onde o [E] representa que sera exibido em um Elemento HTML personalizado
        //onde o [C]representa que sera exibido em um Elemento class
        restrinct: 'A',
        scope:{
            ngNome :'@'
        },
        template: '<h1>Ola Mike - {{ngNome}}</h1>',
        controller: ['$scope', function ($scope) {
            $scope.digaOla = function (nome) {
                alert('Ola '+ nome+"!");
            };
        }],
        link: function (scope, iElement, iAttrs) {
            console.log("Entrou no link");
            console.log("Entrou no link: scope" + scope);
            console.log("Entrou no link: iElement" + iElement);
            console.log("Entrou no link: iAttrs" + iAttrs);
            scope.digaOla(iAttrs.ngNome);
        }
}
});

