const dateformat = require('dateformat');

const jsonFormatter = function (entry) {
  return JSON.stringify(entry);
};

const prettyFormatter = function ({ timestamp, level, message }) {
  const date = dateformat(timestamp, 'dd/mm/yyyy HH:MM:ss');
  return `[${date}] ${level}: ${message}`;
};

module.exports = {
  json: jsonFormatter,
  pretty: prettyFormatter
};

