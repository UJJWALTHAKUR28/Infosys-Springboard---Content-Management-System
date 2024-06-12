import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketIo = io('http://127.0.0.1:5000');

    setSocket(socketIo);

    socketIo.on('connect', () => {
      console.log('connected to WebSocket');
    });

    socketIo.on('disconnect', () => {
      console.log('disconnected from WebSocket');
    });

    return () => {
      socketIo.disconnect();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  return useContext(WebSocketContext);
};
