const stdoutWriter = function (msg) {
  process.stdout.write(msg + '\n');
};

module.exports = {
  stdout: stdoutWriter
};
