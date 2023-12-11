'use client'

import {useState} from "react";
import {io, Socket} from "socket.io-client";
import {WsRealEstateResponseData} from "@/shared/interfaces/ws-real-estate-response-data.interface";
import {useWebSocket} from "../context/WebSocketContext";

// WebSocketClientButton...
export default function WebsocketButton(props: UserFieldData) {
  const {
    fromOwner,
    swapOption,
    selectedTags,
    minRooms,
    maxRooms,
    minPrice,
    maxPrice
  } = props
  const {sendRealTimeData, deleteRealTimeData} = useWebSocket()
  const [isConnected, setIsConnected] = useState<boolean>(false)

  const clientFormData: {} = {
    districts: selectedTags,
    minPrice: minPrice,
    maxPrice: maxPrice,
    minRooms: minRooms,
    maxRooms: maxRooms,
    objectTypes: ["apartment"],
    fromOwner: fromOwner,
    swapOption: swapOption
  }

  function handleWebsocketConnection(): void {
    const socket: Socket = io("ws://localhost:8080", { transports: ["websocket"], reconnectionAttempts: 3 })
    deleteRealTimeData()

    socket.on("connect", (): void => {
      setIsConnected(true)
      console.log(`Websocket client connection established, client id: ${socket.id}`)
    })

    socket.on("disconnect", (): void => {
      setIsConnected(false);
      console.log(`Websocket client disconnected, client id: ${socket.id}`)
    })

    socket.on('real-estate-json-data-response', (data: WsRealEstateResponseData) => {
      sendRealTimeData(data)
      console.log(data)
    })

    socket.emit("real-estate", clientFormData)
  }

  return (
    <>
      <div>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          onClick={handleWebsocketConnection}
          disabled={isConnected}
        >{isConnected ? `OTSIN TULEMUSI` : "OTSI"}</button>
      </div>
    </>
  )
}