const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
    res.end('Welcome to our Homepage')
    } 
    if (req.url === '/about') {
        res.end('This is our Story')
    } 
    res.end(`
    <h1>Oooops!</h1>
    <br /> 
    <p>We can't seem to find what you're looking for</p>
    <br />
    <a href="/">Back home</a>
    `)
})

server.listen(5000)