const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.end('Welcome')
// })

// USING EVENT EMITTER API
const server = http.createServer()
// emits request event
//subscribe to it / listen to it / respond to it
server.on('request', (req, res)=>{
    res.end('WELCOME')
})

server.listen(5000)