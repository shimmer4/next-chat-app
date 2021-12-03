import { createSlice } from '@reduxjs/toolkit'
import { io } from 'socket.io-client'

// websockets transport return 400 response code
// only polling working

// need to install eventlet in server side to run websockets transport

const socket = io.connect('https://flask-socket-server.shimmer4.repl.co', {
    reconnect: false,
    autoConnect: false,
    cors: { origin: "*", credentials: true },
    transports: ['websocket']
    } )

export default socket