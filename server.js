const express = require('express');
const app = express();

app.use(express.json());

const data = { message: 'Hello from backend!' };

app.get('/api/data', (req, res) => {
  res.json(data);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});