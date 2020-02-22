module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  else if (typeof date !== 'object' || {}.toString.call(date).slice(8, -1) !== 'Date') {
    throw new Error();
  }
  const month = date.getMonth();
  const season = (month) => {
    if (month >= 0 && month <= 1 || month === 11) { return 'winter' }
    else if (month >= 2 && month <= 4) { return 'spring' }
    else if (month >= 5 && month <= 7) { return 'summer' }
    else if (month >= 8 && month <= 10) { return 'autumn' }
  };
  return season(month);
};
