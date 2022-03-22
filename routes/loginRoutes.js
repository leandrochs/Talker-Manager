const express = require('express');
const randomToken = require('../services/randomToken');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, (req, res) => {
  try {
    const token = randomToken(16);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: `Erro no app: ${error}` });
  }
});

module.exports = router;
