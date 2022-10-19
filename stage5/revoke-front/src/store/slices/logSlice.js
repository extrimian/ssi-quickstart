import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  logs: [],
  show: false
}

export const logsSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    setLog: (state, action) => {
      state.logs.push(action.payload.data);
    },
    showFormLog: (state, action) => {
      state.show = true
    },
    hideFormLog: (state, action) => {
      state.show = false
    }
  }
})

export const { setLog, showFormLog, hideFormLog } = logsSlice.actions