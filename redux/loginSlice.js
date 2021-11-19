import { createSlice } from '@reduxjs/toolkit'

var initialState = null

export const loginSlice = createSlice( {
  name: 'login',
  initialState : initialState,
  reducers: {
    setLogin: (state, action) => {
        initialState = action.payload
        console.log(initialState)
    },
    returnLogin: (state) => (initialState)
  }
} )

// Action creators are generated for each case reducer function
export const { setLogin, returnLogin } = loginSlice.actions

export default loginSlice.reducer