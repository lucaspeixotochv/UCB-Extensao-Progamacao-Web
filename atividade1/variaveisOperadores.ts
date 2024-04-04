class Calculos {
  private a: number;
  private b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  public soma(): number {
    return this.a + this.b;
  }

  public subtracao(): number {
    return this.a - this.b;
  }

  public multiplicacao(): number {
    return this.a * this.b;
  }

  public divisao(): number {
    return this.a / this.b;
  }

  public exibirResultados(): void {
    console.log(`Soma: ${this.soma()}`);
    console.log(`Subtração: ${this.subtracao()}`);
    console.log(`Multiplicação: ${this.multiplicacao()}`);
    console.log(`Divisão: ${this.divisao()}`);
  }
}

const calculos = new Calculos(10, 5);
calculos.exibirResultados();
