const express = require('express');
const fs = require('fs').promises;

// const authMiddleware = require('../middleware/authMiddleware');
const tokenMiddleware = require('../middleware/tokenMiddleware');
const nameTalkerMiddleware = require('../middleware/nameTalkerMiddleware');

const router = express.Router();

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
      .then((talkers) =>
        talkers.find((talker) => talker.id === parseInt(id, 10)))
      .then((talker) => {
        if (!talker) {
          return res
            .status(404)
            .json({ message: 'Pessoa palestrante não encontrada' });
        }
        res.status(200).json(talker);
      });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Erro no app.' });
  }
});

router.post('/', tokenMiddleware, nameTalkerMiddleware, (req, res) => {
  const { name, age, talk } = req.body;
  try {
    fs.readFile('./talker.json', 'utf8')
    .then((json) => JSON.parse(json))
    .then((talkers) => {
        const newTalk = { name, age, id: (talkers.length + 1), talk };
        fs.writeFile('./talker.json', JSON.stringify([...talkers, newTalk]), 'utf8')
          .then(() =>
            res.status(201).json(newTalk))
          .catch((err) =>
            res.status(400).json({
              message: 'Não foi possível escrever o arquivo.',
              messageError: err.message,
            }));
      });
  } catch (error) {
    res.status(401).json({ message: `Erro no app: ${error}` });
  }
});

module.exports = router;
