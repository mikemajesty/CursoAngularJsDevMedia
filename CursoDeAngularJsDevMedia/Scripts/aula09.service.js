app.service('operacoes', function () {
   
    this.somar = function (valor1, valor2) {
        return valor1 + valor2;
    };
    this.subtrair = function (valor1, valor2) {
        return valor1 - valor2;
    };
    this.dividir = function (valor1, valor2) {
        return valor1 / valor2;
    };
    this.multiplicar = function (valor1, valor2) {
        return valor1 * valor2;
    };
});