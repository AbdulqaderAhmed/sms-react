import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./admin/auth/authSlice";

export const store = configureStore({
  reducer: {
    adminAuth: authReducer,
  },
});
