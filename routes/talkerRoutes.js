const express = require('express');

const router = express.Router();
const fs = require('fs').promises;

router.get('/', (req, res) => {
  fs.readFile('./talker.json', 'utf8')
    .then((json) => JSON.parse(json))
    .then((data) => res.status(200).json(data));
});

module.exports = router;
