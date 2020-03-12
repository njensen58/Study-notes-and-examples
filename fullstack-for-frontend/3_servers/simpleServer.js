const http = require('http')

http.createServer(function (req, res) {
  res.write("Hello World!")
  res.end()
}).listen(8080)

console.log("Server started on 8080!")
