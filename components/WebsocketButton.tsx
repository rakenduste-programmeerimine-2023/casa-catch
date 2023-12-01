'use client'

import { useState} from "react";
import {io, Socket} from "socket.io-client";

export default function WebsocketButton() {
  const [isConnected, setIsConnected] = useState<boolean>(false)
  // const [messages, setMessages] = useState<[]>([])

  function sendWebsocketServerHello(): void {
    const socket: Socket = io("ws://localhost:8080", { transports: ["websocket"] });

    socket.on("connect", (): void => {
      setIsConnected(true);
      console.log(`Websocket client connection established, client id: ${socket.id}`)
    });

    socket.on("disconnect", (): void => {
      setIsConnected(false);
    });

    socket.on("acknowledgement", (e): void => {
      console.log(`Message from the server: ${e}`);

      // Closes the connection with the websocket once the data is received (server will do this as well)
      socket.close();
    });

    socket.emit("chat", "Hello world");
  }

  return (
    <>
      <div>
        <p>Status: {isConnected ? `Connected` : "Disconnected"}</p>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          onClick={sendWebsocketServerHello}
        >Test websocket</button>
      </div>
    </>
  )
}