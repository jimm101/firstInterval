# firstInterval

Same as setInterval, but triggers immediately as well.

This pattern

    callback(p1, p2);
    setInterval(callback, 1000, p1, p2);

is identical to this

    firstInterval(callback, 1000, p1, p2);

## Installation

    $ npm i --save firstInterval

## Example

    const firstInterval = require('./firstInterval');

    console.log('starting', new Date())
    const timer = firstInterval(()=>{
      console.log('interval', new Date());
    }, 1000);


outputs

    starting 2018-04-06T11:01:35.058Z
    interval 2018-04-06T11:01:35.062Z
    interval 2018-04-06T11:01:36.067Z

## Test

To keep things light, there's a test, but it only logs to console.

    $ npm test
