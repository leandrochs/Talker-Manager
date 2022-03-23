const fs = require('fs').promises;
const readFileFunc = require('../services/readFileFunc');

async function postTalkerController(req, res) {
  try {
    const { name, age, talk } = req.body;
    const data = await readFileFunc('./talker.json');
    if (data.messageError) {
      return res.status(400).json({ message: data.messageError });
    }

    const newTalk = { name, age, id: data.length + 1, talk };
    fs.writeFile('./talker.json', JSON.stringify([...data, newTalk]), 'utf8')
      .then(() => res.status(201).json(newTalk))
      .catch((err) =>
        res.status(400).json({
          message: 'Não foi possível escrever o arquivo.',
          messageError: err.message,
        }));
  } catch (error) {
    res.status(401).json({ message: `Erro no app: ${error}` });
  }
}

module.exports = postTalkerController;
