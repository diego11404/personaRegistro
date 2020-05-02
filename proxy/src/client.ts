import { request, ClientRequest, IncomingMessage, Agent } from 'http'
import { Socket } from 'net';

let req: ClientRequest = request({
  port: 8124,
  host: '127.0.0.1',
  method: 'GET',
  headers: {
    connection: 'Upgrade, HTTP2-Settings',
    upgrade: 'h2c',
    'HTTP2-Settings': '',
    'user-agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36 RuxitSynthetic/1.0 v4769527643 t38550'
  }
});

req.on('connect', (request: IncomingMessage, socket: Socket, head: Buffer) => {
  console.log(' client connected ', request.headers)

})

req.on('upgrade', (res: IncomingMessage, socket: Socket, head: Buffer) => {
  console.log('client upgrade:', res.statusCode, res.httpVersion, res.statusMessage, res.headers);
  socket.end();
});


req.on('response', (res: IncomingMessage) => {
  console.log(' server response ', res.statusCode, res.httpVersion, res.statusMessage, res.headers)

  res.on('data', (chunk: Buffer) => {
    console.log('Data from server \n', chunk.toString(), 'end \n')
  })

  res.on('end', () => {
    console.log('END client')
  })


})
req.on('close', () => {
  console.log(' client close  ')

})
req.end()


let req2: ClientRequest = request({
  port: 8124,
  host: '127.0.0.1',
  method: 'GET',
  headers: {
    'HTTP2-Settings': '',
    'user-agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36 RuxitSynthetic/1.0 v4769527643 t38550',
  },
  agent: new Agent({ keepAlive: true })
});

req2.on('response', (res: IncomingMessage) => {
  console.log(' server response2 ', res.statusCode, res.httpVersion, res.statusMessage, res.headers)

  res.on('end', () => {
  })
})
req2.on('close', () => {
  console.log(' client2 closed  ')

})

req2.on('error', (err) => {
  console.log('error: ', err);

})
req2.end()




