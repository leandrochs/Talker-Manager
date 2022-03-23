const validateDate = require('../services/validateDate');

function watchedAtMiddleware(req, res, next) {
  const { watchedAt } = req.body.talk;
  const watchedAtSplit = watchedAt.split('/');

  if (watchedAtSplit.length !== 3) {
    return res
      .status(400)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  const validWatchedAt = validateDate(watchedAtSplit);

  if (!validWatchedAt) {
    return res
      .status(400)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  next();
}

module.exports = watchedAtMiddleware;
