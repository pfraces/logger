var { noop, partial, assign, indexOf, reduce } = require('lodash');

var LEVELS = [
  'info',
  'error'
];

var DEFAULTS = {
  level: 'info',
  formatter: 'json',
  writer: 'console'
};

var formatters = {
  json: function (level, message) {
    return JSON.stringify({
      timestamp: Date.now(),
      level: level,
      message: message
    });
  }
};

var writers = {
  console: console.log.bind(console)
};

var writer = function (config) {
  var { level, formatter, writer } = config;
  var format = partial(formatters[formatter], level);

  return function (message) {
    writers[writer](format(message));
    return message;
  };
};

var methods = function (config) {
  var levelIndex = indexOf(LEVELS, config.level);
  var write = writer(config);

  return reduce(LEVELS, function (acc, level, index) {
    acc[level] = index >= levelIndex ? write : noop;
    return acc;
  }, {});
};

var logger = function (config) {
  return methods(assign({}, DEFAULTS, config));
};

module.exports = {
  logger: logger
};
