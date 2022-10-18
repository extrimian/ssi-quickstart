import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
}

export const formSlice = createSlice({
  name: 'formModal',
  initialState,
  reducers: {
    showForm: (state, action) => {
      state.show = true;
    },
    hideForm: (state, action) => {
      state.show = false;
    }
  }
})

export const { showForm, hideForm } = formSlice.actions