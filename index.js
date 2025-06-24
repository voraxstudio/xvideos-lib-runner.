const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  res.send("Servidor Xvideos-lib ativo!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
