var verificarNumeroPrimo = function (numero) {
    var exibirMensagem = function (primo) {
        if (!primo) {
            console.log("O n\u00FAmero ".concat(numero, " n\u00E3o \u00E9 primo."));
            return;
        }
        console.log("O n\u00FAmero ".concat(numero, " \u00E9 primo."));
    };
    if (numero < 2) {
        exibirMensagem(false);
        return;
    }
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            exibirMensagem(false);
            return;
        }
    }
    exibirMensagem(true);
};
verificarNumeroPrimo(0); //false
verificarNumeroPrimo(1); //false
verificarNumeroPrimo(2); //true
verificarNumeroPrimo(3); //true
verificarNumeroPrimo(7); //true
verificarNumeroPrimo(83); //true
verificarNumeroPrimo(100); //false
verificarNumeroPrimo(991); //true
verificarNumeroPrimo(104729); //true
verificarNumeroPrimo(14348907); //false
