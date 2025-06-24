import express from 'express';
import xvideos from 'xvideos-lib';

const app = express();
const port = process.env.PORT || 3000;

app.get('/video', async (req, res) => {
  const { query } = req;
  if (!query.search) {
    return res.status(400).json({ error: "Parâmetro ?search é obrigatório." });
  }

  try {
    const results = await xvideos.search(query.search);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar dados", details: err.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
