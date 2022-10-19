import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
}

export const revokeFormSlice = createSlice({
  name: 'revokeForm',
  initialState,
  reducers: {
    showRevokeForm: (state, action) => {
      state.show = true;
    },
    hideRevokeForm: (state, action) => {
      state.show = false;
    }
  }
})

export const { showRevokeForm, hideRevokeForm } = revokeFormSlice.actions