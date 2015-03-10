/**
 * Module Dependencies
 */

var sys = require('sys')
var exec = require('child_process').exec;
var request = require('superagent');
var config = require('./config.js');


setInterval(function(){
  makeRequest(config.URL, function(){
    executeComamnd(config.COMMAND)
  })
}, config.REQUEST_INTERVAL)

function executeComamnd(command) { 
  exec(command, function (error, stdout, stderr) {
    sys.print('stdout: ' + stdout);
    sys.print('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

function makeRequest(url, cb){
  console.log('making request', url);
  request
    .get(url)
    .end(function(err, res){
      if(err) {
        console.log('There was an error! Running command');
        cb()
      }
    })
}
