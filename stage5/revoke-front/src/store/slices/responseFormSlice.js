import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
  data: ''
}

export const responseFormSlice = createSlice({
  name: 'responseForm',
  initialState,
  reducers: {
    showResponseForm: (state, action) => {
      state.show = true;
    },
    hideResponseForm: (state, action) => {
      state.show = false;
    },
    setResponseFormData : (state, action) => {
      state.data = action.payload.data;
    }
  }
})

export const { showResponseForm, hideResponseForm } = responseFormSlice.actions