const fs = require('fs').promises;
const readFileFunc = require('../services/readFileFunc');

async function putTalkerIdController(req, res) {
  try {
    const { name, age, talk } = req.body;
    const id = parseInt(req.params.id, 10);
    const updateTalker = { id, name, age, talk };
    const data = await readFileFunc('./talker.json');

    if (data.messageError) {
      return res.status(400).json({ message: data.messageError });
    }

    const oldTalkers = data.filter((talker) => talker.id !== parseInt(id, 10));
    fs.writeFile('./talker.json', JSON.stringify([...oldTalkers, updateTalker]), 'utf8')
      .then(() => res.status(200).json(updateTalker))
      .catch((err) => res.status(400)
        .json({ message: `Arquivo não escrito: ${err.message}` }));
  } catch (error) {
    res.status(401).json({ message: `Erro no app: ${error}` });
  }
}

module.exports = putTalkerIdController;
