const readFileFunc = require('../services/readFileFunc');

async function getTalkerIdController(req, res) {
  try {
    const { id } = req.params;
    const data = await readFileFunc('./talker.json');
    const talkerFound = data.find((talker) => talker.id === parseInt(id, 10));

    if (!talkerFound) {
      return res
        .status(404)
        .json({ message: 'Pessoa palestrante não encontrada' });
    }

    res.status(200).json(talkerFound);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Erro no app.' });
  }
}

module.exports = getTalkerIdController;
