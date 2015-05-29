'use strict';

var shell = require('shelljs')

module.exports = function() {
  return function(req, res, next) {
    if (/\.css$/.test(req.url)) {
      shell.exec('compass compile', {
        silent: true
      })
    }

    next()
  }
}
