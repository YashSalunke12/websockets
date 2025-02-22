import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8000 }, () => console.log("ws server running..."));

wss.on("connection", (socket) => {
    console.log("user connected");
    socket.on("message", (event) => {
        console.log(event.toString());
        if(event.toString() === "ping") {
            socket.send("pong");
        }
    })
})