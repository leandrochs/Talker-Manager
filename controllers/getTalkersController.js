const readFileFunc = require('../services/readFileFunc');

async function getTalkersController(req, res) {
  try {
    const data = await readFileFunc('./talker.json');

    if (data.messageError) {
      return res.status(400).json({ message: data.messageError });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.log(`Não foi possível ler arquivo. Erro: ${error.message}`);
    return res.status(401).json({ message: `Erro no app: ${error.message}` });
  }
}

module.exports = getTalkersController;
