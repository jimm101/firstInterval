const firstInterval = require('./index.js');
const startTime = new Date();

let firstRun = true;

function cb(p) {
  if (p !== 'test') console.log('parameter passing failed');
  const lapse = new Date() - startTime;
  if (firstRun) {
    if (lapse > 100) console.log('first run failed to trigger within 100 msec');
    else console.log('first run passed');
    firstRun = false;
    return
  }
  if(lapse < 1000) console.log('second triggered too soon');
  else if(lapse > 1100) console.log('second run triggered late');
  else console.log('second run passed');
  process.exit()
}

firstInterval(cb, 1000, 'test');
