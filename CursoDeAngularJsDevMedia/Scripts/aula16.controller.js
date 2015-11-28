
function Aula16controller($scope) {
    $scope.mike = "Mike LIma";
}
app.directive('tooltip', function () {
    debugger;
    console.log("Entrou na diretiva");
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            console.log(scope);
            console.log(element);
            console.log(attr);
            alement.show({
                offset: [0, 10]
            });
        }
    };
});
app.controller("Aula16controller", Aula16controller);

