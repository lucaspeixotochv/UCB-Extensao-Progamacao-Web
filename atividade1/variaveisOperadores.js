var Calculos = /** @class */ (function () {
    function Calculos(a, b) {
        this.a = a;
        this.b = b;
    }
    Calculos.prototype.soma = function () {
        return this.a + this.b;
    };
    Calculos.prototype.subtracao = function () {
        return this.a - this.b;
    };
    Calculos.prototype.multiplicacao = function () {
        return this.a * this.b;
    };
    Calculos.prototype.divisao = function () {
        return this.a / this.b;
    };
    Calculos.prototype.exibirResultados = function () {
        console.log("Soma: ".concat(this.soma()));
        console.log("Subtra\u00E7\u00E3o: ".concat(this.subtracao()));
        console.log("Multiplica\u00E7\u00E3o: ".concat(this.multiplicacao()));
        console.log("Divis\u00E3o: ".concat(this.divisao()));
    };
    return Calculos;
}());
var calculos = new Calculos(10, 5);
calculos.exibirResultados();
