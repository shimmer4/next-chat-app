import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";

const reducer = combineReducers( {
    login: loginSlice,
} )

const store = configureStore( {
    reducer: reducer
} )


export default store
