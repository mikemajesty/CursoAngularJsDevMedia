
function Aula18controller($scope,$location) {
    $scope.$location = $location;
    $scope.setID = function (_id) {
        $location.search({id:_id});
    }
    $scope.$watch('$location.search().id', function (id) {
        console.log("Mudou o valor do ID: "+id);
    })
}

app.controller("Aula18controller", Aula18controller).config(function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    }).hashPrefix('#');
});

