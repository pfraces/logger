logger
======

Simple logging utitilty

Usage
-----

```js
var logger = require('logger');

var log = logger();
log.info('server up and running');
if (err) { throw log.error('an error ocurred', err); }
```

`logger` is based on the following components:

  * Levels
  * Formatters
  * Writers

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
