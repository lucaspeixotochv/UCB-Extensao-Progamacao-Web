const calculadora = require("../calculadora/calculadora");

exports.showForm = (req, res) => {
  res.render("index.ejs");
};

exports.calculate = (req, res) => {
  const { num1, num2, operacao } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    res.redirect("/");
    return;
  }

  const resultado = calculadora.calcular(Number(num1), Number(num2), operacao);
  res.render("resultado.ejs", {
    resultado,
    operacao: calculadora.getNomeOperacao(operacao),
  });
};
