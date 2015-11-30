
var app = angular.module('app', ['pascalprecht.translate']);
app.config(function ($translateProvider) {
    $translateProvider.translations('pt-br', {
        TITULO: "seja bem vindo",
        PARAGRAFO: "Essa é uma frase de inicio",
        BTN_OK: "Confirmar",
        BTN_CANCEL: "Cancelar",
        EN_EN: "English",
        PT_BR: "Portugues"
    });
    $translateProvider.translations('en_en', {
        TITULO: "This is a Hello Page",
        EN_EN: "English",
        PT_BR: "Portugues",
        PARAGRAFO: "this is a start phrase",
        BTN_OK: "Confirm",
        BTN_CANCEL: "Cancel"
    });
    $translateProvider.preferredLanguage('pt-br');
});

function Aula20controller($scope, $translate) {
    $scope.setaIdioma = function (sigla) {
        $translate.use(sigla);
    }
}
app.controller("Aula20controller", Aula20controller);

