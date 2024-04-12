import express, { Request, Response } from "express";
import { somar, subtrair, multiplicar, dividir } from "./utils/calculadora";

const app = express();
const port = 3000;

app.get("/somar/:a/:b", (req: Request, res: Response) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  const resultado = somar(a, b);
  res.send(`O resultado da soma de ${a} e ${b} é ${resultado}`);
});

app.get("/subtrair/:a/:b", (req: Request, res: Response) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  const resultado = subtrair(a, b);
  res.send(`O resultado da subtração de ${a} por ${b} é ${resultado}`);
});

app.get("/multiplicar/:a/:b", (req: Request, res: Response) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  const resultado = multiplicar(a, b);
  res.send(`O resultado da multiplicação de ${a} por ${b} é ${resultado}`);
});

app.get("/dividir/:a/:b", (req: Request, res: Response) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  const resultado = dividir(a, b);
  if (resultado === undefined) {
    res.status(400).send("Não é possível dividir por zero");
  } else {
    res.send(`O resultado da divisão de ${a} por ${b} é ${resultado}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
