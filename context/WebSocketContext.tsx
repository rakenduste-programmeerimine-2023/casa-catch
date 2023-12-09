'use client'

import {Context, createContext, useContext, useState} from "react";
import {WsRealEstateResponseData} from "@/shared/interfaces/ws-real-estate-response-data.interface";

interface WebSocketContextProps {
  realTimeData: WsRealEstateResponseData[];
  sendRealTimeData: (data: WsRealEstateResponseData) => void;
}

const WebSocketContext: Context<WebSocketContextProps> = createContext<WebSocketContextProps>({
  realTimeData: [],
  sendRealTimeData: (): void => {},
})

export const useWebSocket = () => {
  return useContext(WebSocketContext)
}

//@ts-ignore
export const WebSocketProvider = ({ children }) => {
  const [realTimeData, setRealTimeData] = useState<WsRealEstateResponseData[]>([])

  const sendRealTimeData = (data: WsRealEstateResponseData): void => {
    setRealTimeData((prevState: WsRealEstateResponseData[]) => [...prevState, data])
  }

  return (
    <WebSocketContext.Provider value={{ realTimeData, sendRealTimeData }}>
      {children}
    </WebSocketContext.Provider>
  )
}