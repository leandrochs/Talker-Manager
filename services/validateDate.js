function validateDate(watchedAtSplit) {
  const day = watchedAtSplit[0];
  const month = watchedAtSplit[1];
  const year = watchedAtSplit[2];

  const validDay = parseInt(day, 10) > 0 && parseInt(day, 10) < 32;
  const validMonth = parseInt(month, 10) > 0 && parseInt(month, 10) < 13;
  const validYear = year.length === 4;

  const validWatchedAt = validDay && validMonth && validYear;

  return validWatchedAt;
}

module.exports = validateDate;
