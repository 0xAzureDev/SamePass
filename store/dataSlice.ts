import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface BlurState {
  email: string
  password: string
  domain: string
  prevPasswords: string[]
}

const initialState: BlurState = {
  email: '',
  password: '',
  domain: '',
  prevPasswords: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    setDomain: (state, action: PayloadAction<string>) => {
      state.domain = action.payload
    },
    setPrevPasswords: (state, action: PayloadAction<string>) => {
      const index = state.prevPasswords.indexOf(action.payload)

      if (index > -1) state.prevPasswords.splice(index, 1)

      state.prevPasswords.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEmail, setPassword, setDomain, setPrevPasswords } =
  dataSlice.actions

export default dataSlice.reducer
