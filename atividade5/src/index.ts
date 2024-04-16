import express, { Request, Response } from "express";
import { IProduto } from "./types/estoque.type";
import { estoque } from "./models/estoque.model";

const app = express();
const port = 3000;

app.get("/adicionar/:id/:nome/:qtd", (req: Request, res: Response) => {
  const id = req.params.id;
  const nome = req.params.nome;
  const qtd = parseInt(req.params.qtd);

  const produto: IProduto = {
    id,
    nome,
    qnt: qtd,
  };

  estoque.produtos.push(produto);

  res.send(`Produto ${nome} adicionado com sucesso!`);
});

app.get("/listar", (req: Request, res: Response) => {
  res.send(JSON.stringify(estoque));
});

app.get("/remover/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const index = estoque.produtos.findIndex((produto) => produto.id === id);

  if (index === -1) {
    res.send("Produto não encontrado!");
    return;
  }

  estoque.produtos.splice(index, 1);

  res.send("Produto removido com sucesso!");
});

app.get("/editar/:id/:qtd", (req: Request, res: Response) => {
  const id = req.params.id;
  const qtd = parseInt(req.params.qtd);

  const produto = estoque.produtos.find((produto) => produto.id === id);

  if (!produto) {
    res.send("Produto não encontrado!");
    return;
  }

  produto.qnt = qtd;

  res.send("Produto editado com sucesso!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
