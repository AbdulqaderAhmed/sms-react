import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../../../api/http";

export const registerAdmin = createAsyncThunk(
  "auth/registerAdmin",
  async (userData, thunkApi) => {
    try {
      const res = await http.post("/admin/auth/register", userData);
      if (res.data) {
        console.log(res.data);
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

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
  message: null,
};

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    clear: {
      reducer: (state) => {
        state.isError = false;
        state.message = null;
      },
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
      .addCase(registerAdmin.rejected, (state, { payload }) => {
        (state.isLoading = false), (state.isError = true);
        state.message = payload;
      });
  },
});

export default adminAuthSlice.reducer;
