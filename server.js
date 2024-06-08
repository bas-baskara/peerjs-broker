const {PeerServer} = require('peer')
const peerServer = PeerServer({
    port: 9000,
    path: '/',
    allow_discovery: true
})

peerServer.on('connection', (client) => {
    console.log(`Client connected: ${client.id}`)
})

peerServer.on('disconnect', (client) => {
    console.log(`Client disonnected: ${client.id}`)
})