# serve-compass

[![NPM version](https://img.shields.io/npm/v/serve-compass.svg?style=flat-square)](https://npmjs.org/package/serve-compass)

> Serve middleware for mocking compass

## Usage

```js
// express
var express = require('express')
var serveCompass = require('serve-compass')

var app = express()

app.use(serveCompass())
app.listen(3000)
```

```js
// dong-queue
var Queue = require('dong-queue')
var serveCompass = require('serve-compass')

var queue = new Queue()

queue.use(serveCompass())

http.createServer(function onRequest(req, res){
  queue.run(req, res, function() {
    // finalhandler
  })
})
```
