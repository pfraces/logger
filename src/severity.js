const { indexOf } = require('lodash');

const levels = [
  'info',
  'error'
];

const isError = function (severity) {
  const errorSeverity = indexOf(levels, 'error');
  return severity >= errorSeverity;
};

module.exports = {
  levels: levels,
  isError: isError
};
