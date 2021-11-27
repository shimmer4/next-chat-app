import { createSlice } from '@reduxjs/toolkit'

var initialState = []

export const chatSlice = createSlice( {
  name: 'login',
  initialState : initialState,
  reducers: {
    setChat: (state, action) => {
        let tempArray = [action.payload]
        initialState = initialState.concat(tempArray)
    },
    returnChat: (state) => (initialState)
  }
} )

// Action creators are generated for each case reducer function
export const { setChat, returnChat } = chatSlice.actions

export default chatSlice.reducer