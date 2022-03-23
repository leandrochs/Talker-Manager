const fs = require('fs').promises;

function postTalkerController(req, res) {
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
  }

module.exports = postTalkerController;
