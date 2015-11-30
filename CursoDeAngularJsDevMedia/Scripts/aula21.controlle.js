
var app = angular.module('app', ['angularFileUpload']);


function Aula21controller($scope,FileUploader) {
    var uploader = $scope.uploader = new FileUploader({
        url: "service/upload.php"
    });
    uploader.filters.push({
        name: "tamanhoFila",
        fn: function (item,options) {
            return this.queue.lenght < 4;
        }
    });
    uploader.onSuccessItem = function (fileItem) {
        console.log("Item enviado com sucesso");
        fileItem.remove();
    }
    //falha ao adicionar o arquivo
    uploader.onWhenAddingFileFailed = function (fileItem) {
        console.log("Erro ao adicionar o elemento",fileItem);
    }

}
app.controller("Aula21controller", Aula21controller);

