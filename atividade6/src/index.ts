import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import path from "path";
const ejs = require("ejs");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

app.post("/dados", (req, res) => {
  console.log(req.body);

  const { nome, endereco, telefone, dataAgendamento } = req.body;

  ejs.renderFile(
    path.join(__dirname, "..", "views", "dados.html"),
    {
      nome,
      endereco,
      telefone,
      dataAgendamento,
    },
    (err: any, html: any) => {
      if (err) {
        console.error(err);
        res.status(500).send("Erro interno ao renderizar o HTML");
        return;
      }
      res.send(html);
    }
  );
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
