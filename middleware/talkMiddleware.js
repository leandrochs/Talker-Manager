function talkMiddleware(req, res, next) {
  if (!req.body.talk || !req.body.talk.watchedAt || !req.body.talk.rate) {
    return res.status(400).json({
      message:
        'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }

  next();
}

module.exports = talkMiddleware;
