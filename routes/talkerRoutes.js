const express = require('express');
const fs = require('fs').promises;

const tokenMiddleware = require('../middleware/tokenMiddleware');
const nameTalkerMiddleware = require('../middleware/nameTalkerMiddleware');
const ageTalkerMiddleware = require('../middleware/ageTalkerMiddleware');
const talkMiddleware = require('../middleware/talkMiddleware');
const watchedAtMiddleware = require('../middleware/watchedAtMiddleware');
const rateMiddleware = require('../middleware/rateMiddleware');

const postTalkerController = require('../controllers/postTalkerController');
const getTalkerIdController = require('../controllers/getTalkerIdController');

const router = express.Router();

router.get('/', (req, res) => {
  fs.readFile('./talker.json', 'utf8')
    .then((json) => JSON.parse(json))
    .then((data) => res.status(200).json(data));
});

router.get('/:id', getTalkerIdController);

router.post(
  '/',
  tokenMiddleware,
  nameTalkerMiddleware,
  ageTalkerMiddleware,
  talkMiddleware,
  watchedAtMiddleware,
  rateMiddleware,
  postTalkerController,
);

module.exports = router;
