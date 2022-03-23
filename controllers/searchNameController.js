const readFileFunc = require('../services/readFileFunc');

async function searchNameController(req, res) {
  try {
    const { q } = req.query;
    const data = await readFileFunc('./talker.json');

    if (data.messageError) return res.status(400).json({ message: data.messageError });

    const talkersFound = data.filter(({ name }) => name.indexOf(q) !== -1);

    if (!talkersFound) {
      return res
        .status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }

    res.status(200).json(talkersFound);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: `Erro no app: ${error.message}` });
  }
}

module.exports = searchNameController;
