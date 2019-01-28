const { isArray, partial, assign, indexOf, each, map, reduce } = require('lodash');

const severity = require('./severity.js');
const formatters = require('./formatters.js');
const writers = require('./writers.js');

const DEFAULTS = {
  level: 'info',
  formatter: 'json',
  writer: 'stdout'
};

const logger = function (config) {
  const settings = assign({}, DEFAULTS, config);
  const { level, formatter, writer } = settings;

  const minSeverity = indexOf(severity, level);
  const format = partial(formatters[formatter], level);
  const write = writers[writer];

  return function (level, message) {
    if (severity[level] < minSeverity) { return; }

    write(format({
      timestamp: Date.now(),
      level: level,
      message: message
    }));
  };
};

const multiplexer = function (configs) {
  configs = isArray(configs) ? configs : [configs];
  const loggers = map(configs, logger);

  return reduce(severity, function (acc, level) {
    acc[level] = function (message) {
      each(loggers, function (logger) { logger(level, message); });
    };

    return acc;
  }, {});
};

module.exports = {
  logger: multiplexer
};
