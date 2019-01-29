const wrap = (line, maxLen) => {
  if (line.length < maxLen) return line;
  else {
    line = line.slice(0, maxLen - 2) + " \n" + line.slice(maxLen - 2);
    return line;
  }
};

module.exports = wrap;
