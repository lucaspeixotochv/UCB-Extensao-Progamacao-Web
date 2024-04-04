const verificarNumeroPrimo = (numero: number): void => {
  const exibirMensagem = (primo: boolean): void => {
    if (!primo) {
      console.log(`O número ${numero} não é primo.`);
      return;
    }

    console.log(`O número ${numero} é primo.`);
  };

  if (numero < 2) {
    exibirMensagem(false);
    return;
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      exibirMensagem(false);
      return;
    }
  }

  exibirMensagem(true);
};

verificarNumeroPrimo(0);
verificarNumeroPrimo(1);
verificarNumeroPrimo(2);
verificarNumeroPrimo(3);
verificarNumeroPrimo(7);
verificarNumeroPrimo(83);
verificarNumeroPrimo(100);
verificarNumeroPrimo(991);
verificarNumeroPrimo(104729);
verificarNumeroPrimo(14348907);
