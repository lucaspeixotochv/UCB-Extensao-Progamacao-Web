import express, { Request, Response } from "express";
import { IProduto } from "./types/estoque.type";
import { Estoque } from "./models/estoque";

const app = express();
const port = 3000;

const estoque = new Estoque();

app.get("/adicionar/:id/:nome/:qtd", (req: Request, res: Response) => {
  const id = req.params.id;
  const nome = req.params.nome;
  const qtd = parseInt(req.params.qtd);

  const produto: IProduto = {
    id,
    nome,
    qnt: qtd,
  };

  estoque.adicionarProduto(produto)

  res.send(`Produto ${nome} adicionado com sucesso!`);
});

app.get("/listar", (req: Request, res: Response) => {

  const estoqueListagem = estoque.listar();

  res.send(JSON.stringify(estoqueListagem));
});

app.get("/remover/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const remover = estoque.remover(id)

  if (!remover) {
    res.send("Produto não encontrado!");
  }

  res.send("Produto removido com sucesso!");
});

app.get("/editar/:id/:qtd", (req: Request, res: Response) => {
  const id = req.params.id;
  const qtd = parseInt(req.params.qtd);

  const editar = estoque.editar(id, qtd)

  if (!editar) {
    res.send("Produto não encontrado!");
    return;
  }

  res.send("Produto editado com sucesso!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
