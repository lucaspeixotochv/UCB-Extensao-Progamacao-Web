class Matriz {
  private matriz: number[][];

  constructor(matriz: number[][]) {
    this.matriz = matriz;
  }

  public transporMatriz(): void {
    let matrizOriginal: string = "";

    for (let i = 0; i < this.matriz.length; i++) {
      for (let j = 0; j < this.matriz[0].length; j++) {
        matrizOriginal += this.matriz[i][j] + " ";
      }
      matrizOriginal += "\n";
    }

    console.log(matrizOriginal);

    let matrizTransposta: string = "";

    for (let j = 0; j < this.matriz[0].length; j++) {
      for (let i = 0; i < this.matriz.length; i++) {
        matrizTransposta += this.matriz[i][j] + " ";
      }

      matrizTransposta += "\n";
    }

    console.log(matrizTransposta);
  }
}

const matriz = new Matriz([
  [1, 2],
  [3, 4],
  [5, 6],
]);

matriz.transporMatriz();
