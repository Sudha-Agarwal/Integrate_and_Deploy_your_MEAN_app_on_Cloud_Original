import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

let items = [{ id: 1, name: 'Item 1' }];

app.get('/api/items', (req, res) => {
  res.status(200).json(items);
});

app.post('/api/items', (req, res) => {
  const item = req.body;
  item.id = items.length + 1;
  items.push(item);
  res.status(201).json(item);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

export default app;
