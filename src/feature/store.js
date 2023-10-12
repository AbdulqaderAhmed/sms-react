import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./admin/auth/authSlice";
import AdminParentReducer from "./admin/AdminActions/AdminParentSlice";

export const store = configureStore({
  reducer: {
    adminAuth: authReducer,
    adminParent: AdminParentReducer,
  },
});
