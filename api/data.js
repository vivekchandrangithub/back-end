// api/data.js
const express = require('express');
const router = express.Router();

const data = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Doe', age: 25 },
];

router.get('/', (req, res) => {
  res.json(data);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const foundData = data.find(item => item.id === parseInt(id));
  if (foundData) {
    res.json(foundData);
  } else {
    res.status(404).json({ message: 'Not found' });
  }
});

module.exports = router;