import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
  response: null
}

export const sendFormSlice = createSlice({
  name: 'sendForm',
  initialState,
  reducers: {
    showSendForm: (state, action) => {
      state.show = true;
    },
    hideSendForm: (state, action) => {
      state.response = null;
      state.show = false;
    },
    setResponse: (state, action) => {
      state.response = action.payload.response;
    }
  }
})

export const { showSendForm, hideSendForm, setResponse } = sendFormSlice.actions