logger
======

Simple logging utility

Usage
-----

```js
const { logger } = require('logger');

const log = logger();
log.info('server up and running');
log.error(`an error ocurred: ${err}`);
```

Components
----------

**logger** is based on the following components:

  * Severity levels
  * Formatters
  * Writers

Loggers created with `logger()` are defined with these properties by default.
You can customize them with the optional `config` paramenter

```js
// default config
var log = logger({
  level: 'info',
  formatter: 'json',
  writer: 'stdout'
});
```

### Severity levels

  * `debug`
  * `info` (default)
  * `error`

### Formatters

  * `json` (default)
  * `pretty` (e.g. `[27/01/2019] info: server up and running`)

### Writers

  * `stdout` (default)
  * `file` (_TODO_)
  * `http` (_TODO_)

Multiplexing
------------

Probably you will need to log messages to multiple destinations with different
formatters and severity levels for each one

You can easily achieve this by passing to `logger()` an array of config objects

```js
var log = logger([
  {
    level: 'info',
    formatter: 'json',
    writer: 'stdout'
  },
  {
    level: 'error',
    formatter: 'pretty',
    writer: 'file'
  }
]);
```
