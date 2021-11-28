import { configureStore, combineReducers } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";
import loginSlice from "./loginSlice";
import socketSlice from './socketSlice'

const reducer = combineReducers( {
    login: loginSlice,
    chat: chatSlice,
    socket: socketSlice,
} )

const store = configureStore( {
    reducer: reducer
} )


export default store
