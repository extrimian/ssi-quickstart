import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'loading...'
}

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      state.status = action.payload.status
    }
  }
})

export const { updateStatus } = statusSlice.actions