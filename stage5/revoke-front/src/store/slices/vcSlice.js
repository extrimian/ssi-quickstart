import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "Loading",
};

export const vcSlice = createSlice({
  name: "vc",
  initialState,
  reducers: {
    setVCs: (state, action) => {
      state.data = action.payload.data;
    },
    setStatus: (state, action) => {
      state.status = action.payload.status;
    },
  },
});

export const { setVCs, setStatus } = vcSlice.actions;
