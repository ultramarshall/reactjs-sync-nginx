const chokidar = require('chokidar');
const { exec } = require('child_process');
const { target, ignored, script } = require('./config');
const _ = require('lodash');


chokidar.watch(target,{ 
  persistent: true,
  ignored: ignored,
  ignoreInitial: true
}).on('all', _.debounce( function(event, path) {
    console.log(event, path);
    const ls = exec(script.join(' && '), (error, stdout, stderr) => {
      console.log(stdout); 
    });
}, 10000));

