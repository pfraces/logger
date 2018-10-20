const { isArray, partial, assign, indexOf, each, map, reduce } = require('lodash');

const { levels, isError } = require('./severity.js');
const formatters = require('./formatters.js');
const writers = require('./writers.js');

const DEFAULTS = {
  level: 'info',
  formatter: 'json',
  writer: 'console'
};

const logger = function (config) {
  const settings = assign({}, DEFAULTS, config);
  const { level, formatter, writer } = settings;

  const minSeverity = indexOf(levels, level);
  const format = partial(formatters[formatter], level);
  const write = writers[writer];

  return function (severity, entry) {
    if (severity < minSeverity) { return; }
    write(format(entry));
  };
};

const multiplexer = function (config) {
  const configs = isArray(config) ? config : [config];
  const logs = map(configs, logger);

  return reduce(levels, function (acc, level, severity) {
    acc[level] = function (message) {
      const entry = {
        timestamp: Date.now(),
        level: level,
        message: message
      };

      each(logs, function (log) { log(severity, entry); });
      return isError(severity) ? new Error(entry) : entry;
    };

    return acc;
  }, {});
};

module.exports = {
  logger: multiplexer
};
