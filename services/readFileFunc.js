const fs = require('fs').promises;

function readFileFunc(path) {
  return fs
    .readFile(path, 'utf8')
    .then((json) => JSON.parse(json))
    .then((data) => {
      console.log('Arquivo lido com sucesso.');
      return data;
    })
    .catch((err) => {
      console.error(`Não foi possível ler arquivo. Erro: ${err.message}`);
      return { messageError: `Erro no app: ${err.message}` };
    });
}

module.exports = readFileFunc;
