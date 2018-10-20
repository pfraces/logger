logger
======

Simple logging utility

Usage
-----

```js
const { logger } = require('logger');

const log = logger();
log.info('server up and running');
if (err) { throw log.error(`an error ocurred: ${err}`); }
```

Components
----------

**logger** is based on the following components:

  * Levels
  * Formatters
  * Writers

Loggers created with `logger()` are defined with these properties by default.
You can customize them with the optional `config` paramenter

```js
// default config
var log = logger({
  level: 'info',
  formatter: 'json',
  writer: 'console'
});
```

### Levels

  * Info (default)
  * Error
  * Custom

### Formatters

  * JSON (default)
  * String templates
  * Custom

### Writers

  * Console (default)
  * File
  * Http
  * Custom

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
    writer: 'console'
  },
  {
    level: 'error',
    formatter: 'compact',
    writer: 'file'
  }
]);
```
