const fs = require('fs').promises;

function getTalkerIdController(req, res) {
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
}

module.exports = getTalkerIdController;
