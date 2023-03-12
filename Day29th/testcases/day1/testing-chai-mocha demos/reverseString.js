const reserveString = str =>
  str
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

module.exports = reserveString;
