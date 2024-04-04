var Matriz = /** @class */ (function () {
    function Matriz(matriz) {
        this.matriz = matriz;
    }
    Matriz.prototype.transporMatriz = function () {
        var matrizOriginal = "";
        for (var i = 0; i < this.matriz.length; i++) {
            for (var j = 0; j < this.matriz[0].length; j++) {
                matrizOriginal += this.matriz[i][j] + " ";
            }
            matrizOriginal += "\n";
        }
        console.log(matrizOriginal);
        var matrizTransposta = "";
        for (var j = 0; j < this.matriz[0].length; j++) {
            for (var i = 0; i < this.matriz.length; i++) {
                matrizTransposta += this.matriz[i][j] + " ";
            }
            matrizTransposta += "\n";
        }
        console.log(matrizTransposta);
    };
    return Matriz;
}());
var matriz = new Matriz([
    [1, 2],
    [3, 4],
    [5, 6],
]);
matriz.transporMatriz();
