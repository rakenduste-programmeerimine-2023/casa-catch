'use client'

import { useState} from "react";
import {io, Socket} from "socket.io-client";
import {WsRealEstateResponseData} from "@/shared/interfaces/ws-real-estate-response-data.interface";
import CustomizedTables from "@/components/CustomizedTables";


export default function WebsocketButton() {
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [realTimeData, setRealTimeData] = useState<WsRealEstateResponseData[]>([]);
  // const [messages, setMessages] = useState<[]>([])
  const sampleData = {
    districts: ["Kadriorg", "Mustamäe"],
    minPrice: 200,
    maxPrice: 600,
    minRooms: 1,
    maxRooms: 3,
    objectTypes: ["apartment"]
  }

  function sendWebsocketServerHello(): void {
    const socket: Socket = io("ws://localhost:8080", { transports: ["websocket"], reconnectionAttempts: 3 });

    socket.on("connect", (): void => {
      setIsConnected(true);
      console.log(`Websocket client connection established, client id: ${socket.id}`);
      // socket.send(sampleData)
      // socket.emit("real-estate", sampleData);
    });

    socket.on("disconnect", (): void => {
      setIsConnected(false);
      console.log(`Websocket client disconnected, client id: ${socket.id}`)
    });

    // socket.on("acknowledgement", (e): void => {
    //   console.log(`Message from the server: ${e}`);
    //
    //   // Closes the connection with the websocket once the data is received (server will do this as well)
    //   socket.close();
    // });

    socket.on('real-estate-json-data-response', (data: WsRealEstateResponseData) => {
      // const responseData: WsRealEstateRequestData = {
      //   districts: data.districts,
      //   fromOwner: data.fromOwner,
      //   maxPrice: data.maxPrice,
      //   maxRooms: data.maxRooms,
      //   minPrice: data.minPrice,
      //   minRooms: data.minRooms,
      //   objectTypes: data.objectTypes,
      //   propertySwapOption: data.propertySwapOption,
      //   propertyType: data.propertyType,
      // }
      console.log(data)
      setRealTimeData(prevArray => [...prevArray, data])
    })

    // socket.on("hello", (message): void => {
    //   console.log(message)
    //   // socket.close()
    // })
    // console.log("Just sampleData: ", sampleData)
    // console.log("Stringified: ", JSON.stringify(sampleData))

    socket.emit("real-estate", sampleData)
  }

  return (
    <>
      <div>
        <p>Status: {isConnected ? `Connected` : "Disconnected"}</p>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          onClick={sendWebsocketServerHello}
        >Test websocket</button>
        <CustomizedTables realTimeData={realTimeData} />
      </div>
    </>
  )
}