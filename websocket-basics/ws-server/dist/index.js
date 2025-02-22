"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8000 }, () => console.log("ws server running..."));
wss.on("connection", (socket) => {
    console.log("user connected");
    socket.on("message", (event) => {
        console.log(event.toString());
        if (event.toString() === "ping") {
            socket.send("pong");
        }
    });
});
