import express from "express";
import { verificarNumeroPrimo } from "./utils/matematica";

const app = express();
const port = 3000;

app.get("/verificar-numero-primo/:numero", (req, res) => {
  const numero = parseInt(req.params.numero);

  const numeroPrimo = verificarNumeroPrimo(numero);

  if (!numeroPrimo) {
    return res.send(`O número ${numero} não é primo`);
  }

  return res.send(`O número ${numero} é primo`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
