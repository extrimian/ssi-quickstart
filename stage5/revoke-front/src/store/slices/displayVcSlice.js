import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  credential: "",
};

export const displayVcSlice = createSlice({
  name: "displayVc",
  initialState,
  reducers: {
    setCredential: (state, action) => {
      state.credential = action.payload.credential;
    },
  },
});

export const { setCredential } = displayVcSlice.actions;
