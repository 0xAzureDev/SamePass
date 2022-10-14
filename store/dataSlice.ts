import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface BlurState {
  email: string
  password: string
  domain: string
  encrypted: string
}

const initialState: BlurState = {
  email: '',
  password: '',
  domain: '',
  encrypted: '',
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
    setEncrypted: (state, action: PayloadAction<string>) => {
      state.encrypted = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEmail, setPassword, setDomain, setEncrypted } =
  dataSlice.actions

export default dataSlice.reducer
