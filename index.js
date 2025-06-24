import { search } from 'xvideos-lib';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/search', async (req, res) => {
  const query = req.query.query;
  if (!query) return res.status(400).json({ error: 'Missing query parameter' });

  try {
    const result = await search(query);
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: 'Scraping failed', details: e.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
