app.controller("aula07.controller", function ($scope) {
	$scope.nomes = ["Mike", "Melky", "Alan", "Natali", "Cesar", "Dimas"];
	$scope.pessoas = [];
	$scope.pessoas.push({ nome: "Mike Rodrigues De Lima", idade: 26, estatus: true });
	$scope.pessoas.push({ nome: "Celso Lima", idade: 26, estatus: true });
	$scope.pessoas.push({ nome: "Osoario carlos", idade: 26, estatus: true });


	$scope.adicionaPessoa = function () {
		var nome = document.getElementById("txtNome");
		var idade = document.getElementById("txtIdade");
		var estatus = document.getElementById("txtEstatus");
		$scope.pessoas.push({ nome: nome.value, idade: idade.value, estatus: estatus.value });
		nome.value = "";	
		idade.value = "";
		estatus.value = "";
	}
});