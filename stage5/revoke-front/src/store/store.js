import { configureStore } from "@reduxjs/toolkit";
import {
  vcSlice,
  formSlice,
  revokeFormSlice,
  sendFormSlice,
  logsSlice,
  statusSlice,
  displayVcSlice,
} from "./slices";

export const store = configureStore({
  reducer: {
    vc: vcSlice.reducer,
    formM: formSlice.reducer,
    revokeForm: revokeFormSlice.reducer,
    sendForm: sendFormSlice.reducer,
    logs: logsSlice.reducer,
    status: statusSlice.reducer,
    displayVc: displayVcSlice.reducer,
  },
});
