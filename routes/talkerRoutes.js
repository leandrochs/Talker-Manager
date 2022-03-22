const express = require('express');

const router = express.Router();
const fs = require('fs').promises;

router.get('/', (req, res) => {
  fs.readFile('./talker.json', 'utf8')
    .then((json) => JSON.parse(json))
    .then((data) => res.status(200).json(data));
});

router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    fs.readFile('./talker.json', 'utf8')
      .then((json) => JSON.parse(json))
      .then((talkers) => talkers.find((talker) => talker.id === parseInt(id, 10)))
      .then((talker) => {
        if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
        res.status(200).json(talker);
      });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Erro no app.' });
  }
});

module.exports = router;
