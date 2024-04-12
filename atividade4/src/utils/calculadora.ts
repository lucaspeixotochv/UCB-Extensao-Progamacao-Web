export const somar = (a: number, b: number): number => {
  return a + b;
};

export const subtrair = (a: number, b: number): number => {
  return a - b;
};

export const multiplicar = (a: number, b: number): number => {
  return a * b;
};

export const dividir = (a: number, b: number): number | undefined => {
  if (b === 0) {
    return undefined;
  }
  return a / b;
};
