const express = require("express");
const app = express();

app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333");
});

app.use(express.json());

app.post("/:nome", (req, res) => {
  console.log(`Rota de API criada pelo(a): ${req.params.nome}`);
  res.send(`Rota de API criada pelo(a): ${req.params.nome}`);
});
