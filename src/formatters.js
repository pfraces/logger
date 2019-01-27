const dateformat = require('dateformat');

const jsonFormatter = function (entry) {
  return JSON.stringify(entry);
};

const compactFormatter = function ({ level, message }) {
  return `${level}: ${message}`;
};

const verboseFormatter = function ({ timestamp, level, message }) {
  const date = dateformat(timestamp, 'dd/mm/yyyy HH:MM:ss');
  return `[${date}] ${level}: ${message}`;
};

module.exports = {
  json: jsonFormatter,
  compact: compactFormatter,
  verbose: verboseFormatter
};

