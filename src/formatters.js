const jsonFormatter = function (event) {
  return JSON.stringify(event);
};

module.exports = {
  json: jsonFormatter
};
