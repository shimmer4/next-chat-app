import { createSlice } from '@reduxjs/toolkit'
import { io } from 'socket.io-client'

const socket = io.connect('https://flask-socket-server.shimmer4.repl.co', {
    reconnect: false,
    autoConnect: false,
    cors: { origin: "http://localhost:3000", credentials: true },
    transports: ['websocket']
    } )

export default socket