import { createServer, request, ClientRequest, IncomingMessage, ServerResponse, Server, STATUS_CODES } from 'http'
import { Socket } from 'net'
import { Buffer } from 'buffer'

let server: Server = createServer()
server.keepAliveTimeout = 10 * 1000
server.timeout = 15 * 1000
server.on('request', (request: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/json', connection:'' });
    res.write(Buffer.alloc(JSON.stringify(STATUS_CODES).length,JSON.stringify(STATUS_CODES)))
  //console.log('HTTP client request ',request.httpVersion, res.statusCode, request.headers)
  res.end()

})

server.on('connect', (request: IncomingMessage, socket: Socket, head: Buffer) => {
  console.log(' connection HTTP CONNECT DONE  \n\r', request.headers , request.url)

  socket.write('HTTP/1.1 200 Connection Established\r\nProxy-agent: Node.js-Proxy\r\n\r\n') 

  
})

server.on('upgrade', (res : IncomingMessage, socket : Socket, head: Buffer) =>{
  console.log(' connection UPGRADE DONE  \n\r', res.headers)
  
  socket.write([
    'HTTP/1.1 101 Switching Protocols',
    'Upgrade: h2c',
    'Connection: Upgrade',
    '\r\n'
  ].join('\r\n'));
  

  socket.pipe(socket); // echo back

})
 
server.on('connection', (socket: Socket) => {
  console.log('connection server OPEN')

  socket.on('error', console.error);
  socket.on('data', (chunk: Buffer ) =>{
    console.log(' data from client ', chunk.toString() , "\r\nEND")
  });

  socket.on('close', (err)=>{
    console.log(' close socket connection ', err)
  })
  
})

server.on('error', (err) =>{
  console.log(' connection error ', err)
})

server.on('close', () => {
  console.log(' connection server CLOSE ')

})
server.listen(8124, () => {
  console.log('start server on port', 8124)
})
