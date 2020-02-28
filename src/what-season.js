module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (Object.keys(date).length > 0) {
    throw new Error();
}

  let month = date.getMonth();
  let season;
  if (month >= 2 && month <= 4) {
    season = 'spring';
  }
  if (month >= 5 && month <= 7) {
    season = 'summer';
  }
  if (month >= 8 && month <= 10) {
    season = 'autumn';
  }
  if (month == 11 || month <= 1) {
    season = 'winter';
  }
  return season;
}

