const readFileFunc = require('../services/readFileFunc');

async function getTalkersController(req, res) {
  try {
    const data = await readFileFunc('./talker.json');
    return res.status(200).json(data);
  } catch (error) {
    console.log(`Não foi possível ler arquivo. Erro: ${error.message}`);
    return res.status(401).json({ message: `Erro no app: ${error}` });
  }
}

module.exports = getTalkersController;
