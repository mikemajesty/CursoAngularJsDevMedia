function onGloogleReady() {
    console.log("entrou na função");
    return angular.bootstrap(document.getElementsByTagName('body')[0], ['app']);
}
angular.module('app', ['uiGmapgoogle-maps'])
       .controller("Aula24Controller", function ($scope) {
           debugger;
           console.log("entrou no controller");
           $scope.map = { center: { latitute: 45, longitude: -73 }, zoom: 10 };
           $scope.marker = {
               id: 0,
               coords: {
                   latitute: 45, longitude: -73
               }
           };
       });