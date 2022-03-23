const fs = require('fs').promises;

function deleteTalkerIdController(req, res) {
  const id = parseInt(req.params.id, 10);
  try {
    fs.readFile('./talker.json', 'utf8')
      .then((json) => JSON.parse(json))
      .then((talkers) => {
        const oldTalkers = talkers.filter((talker) => talker.id !== id);
        fs.writeFile('./talker.json', JSON.stringify(oldTalkers), 'utf8')
          .then(() => res.sendStatus(204))
          .catch((err) =>
            res
              .status(400)
              .json({ message: `Arquivo não escrito: ${err.message}` }));
      });
  } catch (error) {
    res.status(401).json({ message: `Erro no app: ${error}` });
  }
}

module.exports = deleteTalkerIdController;
