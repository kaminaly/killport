var Promise = require('es6-promise').Promise;
var cp = require('child_process');

module.exports = function killport(port) {
  return (new Promise(function(resolve, reject) {    
    var cmd = 'kill -9 `lsof -t -i:' + port + '`'; 
    cp.exec(cmd, function(err, stdout, stderr){
      // do not check `err`, if no process found
      // err will be an instance of Error
      if (stderr) return reject(stderr);
      resolve(stdout);
    });
  }));
};
