const fs = require('fs').promises;

function getTalkersController(req, res) {
  fs.readFile('./talker.json', 'utf8')
    .then((json) => JSON.parse(json))
    .then((data) => res.status(200).json(data));
}

module.exports = getTalkersController;
