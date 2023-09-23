import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../../../api/http";

export const registerAdmin = createAsyncThunk(
  "auth/registerAdmin",
  async (userData, thunkApi) => {
    try {
      const res = await http.post("/admin/auth/register", userData);
      if (res.data) {
        return res.data.admin;
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.toString();

      return thunkApi.rejectWithValue(message);
    }
  }
);

export const loginAdmin = createAsyncThunk(
  "auth/loginAdmin",
  async (userData, thunkApi) => {
    try {
      const res = await http.post("/admin/auth/login", userData);
      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
        return res.data;
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.toString();

      return thunkApi.rejectWithValue(message);
    }
  }
);

export const logoutAdmin = createAsyncThunk("auth/logoutAdmin", () => {
  localStorage.removeItem("user");
});

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isLoading: false,
  isError: false,
  message: null,
};

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    clear: (state) => {
      state.isError = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerAdmin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(loginAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAdmin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(logoutAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutAdmin.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(loginAdmin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(registerAdmin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      });
  },
});

export const { clear } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
