import { createSlice } from '@reduxjs/toolkit'

var initialState = false

export const socketSlice = createSlice( {
  name: 'socket',
  initialState : initialState,
  reducers: {
    setSocket: (state, action) => {
        initialState = action.payload
        return initialState
    },
    returnSocket: (state) => (initialState)
  }
} )

// Action creators are generated for each case reducer function
export const { setSocket, returnSocket } = socketSlice.actions

export default socketSlice.reducer