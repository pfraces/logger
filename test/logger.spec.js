const expect = require('expect.js');
const { logger } = require('../src/logger.js');

describe('src/logger', function () {
  describe('logger', function () {
    it('should be a function', function () {
      expect(logger).to.be.a('function');
    });

    it('sould return a Log object', function () {
      expect(logger()).to.be.an('object');
    });

    describe('Log', function () {
      it('should provide an `info` method', function () {
        expect(logger().info).to.be.a('function');
      });

      it('should provide an `error` method', function () {
        expect(logger().error).to.be.a('function');
      });
    });
  });
});
