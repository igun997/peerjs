const { PeerServer } = require('peer');

const peerServer = PeerServer(
    {
        port: 3879,
        path: '/interaksi',
        config: {
            iceServers: [
                {
                    urls: 'stun:stun.l.google.com:19302'
                }
            ]
        },
        key:'interaksi'
    }
);
peerServer.on("connection",(client)=>{
    console.log("Connected ID", client.getId())
})
peerServer.on("disconnect",(client)=>{
    console.log("Disconnected ID", client.getId())
})
console.log("Run On port 3879")