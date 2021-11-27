import { configureStore, combineReducers } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";
import loginSlice from "./loginSlice";

const reducer = combineReducers( {
    login: loginSlice,
    chat: chatSlice,
} )

const store = configureStore( {
    reducer: reducer
} )


export default store
