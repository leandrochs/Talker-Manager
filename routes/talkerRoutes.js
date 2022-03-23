const express = require('express');

const tokenMiddleware = require('../middleware/tokenMiddleware');
const nameTalkerMiddleware = require('../middleware/nameTalkerMiddleware');
const ageTalkerMiddleware = require('../middleware/ageTalkerMiddleware');
const talkMiddleware = require('../middleware/talkMiddleware');
const watchedAtMiddleware = require('../middleware/watchedAtMiddleware');
const rateMiddleware = require('../middleware/rateMiddleware');

const getTalkersController = require('../controllers/getTalkersController');
const getTalkerIdController = require('../controllers/getTalkerIdController');
const postTalkerController = require('../controllers/postTalkerController');
const putTalkerIdController = require('../controllers/putTalkerIdController');

const router = express.Router();

router.get('/', getTalkersController);

router.get('/:id', getTalkerIdController);

router.put(
  '/:id',
  tokenMiddleware,
  nameTalkerMiddleware,
  ageTalkerMiddleware,
  talkMiddleware,
  watchedAtMiddleware,
  rateMiddleware,
  putTalkerIdController,
);

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
