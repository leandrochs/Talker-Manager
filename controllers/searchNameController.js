const fs = require('fs').promises;

function searchNameController(req, res) {
  try {
    const { q } = req.query;
    console.log(q);
    fs.readFile('./talker.json', 'utf8')
      .then((json) => JSON.parse(json))
      .then((talkers) => talkers.filter(({ name }) => name.indexOf(q) !== -1))
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

module.exports = searchNameController;
