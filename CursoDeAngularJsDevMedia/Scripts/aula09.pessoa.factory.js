app.factory('Pessoa', function () {
	console.log("Criou o objeto");
	var Pessoa = function () {
		console.log("Instanciou o objeto");
		this.nome = "Mike Rodrigues De Lima";
		this.idade = 26;
		this.andar = function () {
			return "Olá, " + this.nome + "!";
		}
	};
	return Pessoa;
});