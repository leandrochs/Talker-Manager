const fs = require('fs').promises;
const readFileFunc = require('../services/readFileFunc');

async function deleteTalkerIdController(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    const data = await readFileFunc('./talker.json');

    if (data.messageError) {
      return res.status(400).json({ message: data.messageError });
    }

    const maintainedTalkers = data.filter((talker) => talker.id !== id);

    fs.writeFile('./talker.json', JSON.stringify(maintainedTalkers), 'utf8')
      .then(() => res.sendStatus(204))
      .catch(() => res.status(400));
  } catch (error) {
    res.status(401).json({ message: `Erro no app: ${error}` });
  }
}

module.exports = deleteTalkerIdController;
