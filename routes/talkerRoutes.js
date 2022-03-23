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
const deleteTalkerIdController = require('../controllers/deleteTalkerIdController');
const searchNameController = require('../controllers/searchNameController');

const router = express.Router();

router.get('/search', tokenMiddleware, searchNameController);
router.get('/', getTalkersController);
router.get('/:id', getTalkerIdController);

router.use(tokenMiddleware);

router.delete('/:id', deleteTalkerIdController);

router.use(
  nameTalkerMiddleware,
  ageTalkerMiddleware,
  talkMiddleware,
  watchedAtMiddleware,
  rateMiddleware,
);

router.put('/:id', putTalkerIdController);
router.post('/', postTalkerController);

module.exports = router;
