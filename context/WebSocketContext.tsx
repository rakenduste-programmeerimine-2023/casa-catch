'use client'

import {Context, createContext, useContext, useState} from "react";
import {WsRealEstateResponseData} from "@/shared/interfaces/ws-real-estate-response-data.interface";

interface WebSocketContextProps {
  realTimeData: WsRealEstateResponseData[];
  sendRealTimeData: (data: WsRealEstateResponseData) => void;
  deleteRealTimeData: () => void
}

const WebSocketContext: Context<WebSocketContextProps> = createContext<WebSocketContextProps>({
  realTimeData: [],
  sendRealTimeData: (): void => {},
  deleteRealTimeData: (): void => {}
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

  const deleteRealTimeData = (): void => {
    setRealTimeData([])
  }

  return (
    <WebSocketContext.Provider value={{ realTimeData, sendRealTimeData, deleteRealTimeData }}>
      {children}
    </WebSocketContext.Provider>
  )
}