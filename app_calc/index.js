const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const calculadoraRoutes = require("./src/routes/calculadoraRoutes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", calculadoraRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
