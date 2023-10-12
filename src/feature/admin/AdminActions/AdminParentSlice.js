import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../../../api/http";

export const getAllParent = createAsyncThunk(
  "AdminPrent/getAllParent",
  async (token, thunkApi) => {
    try {
      const res = await http("/admin/parent/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res) {
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

export const addParent = createAsyncThunk(
  "AdminParent/addParent",
  async (parentData, thunkApi) => {
    try {
      const token = thunkApi.getState().adminAuth.user.token;
      const res = await http.post("/admin/parent/create", parentData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res);
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
  data: null,
  isLoading: false,
  isError: false,
  message: null,
};

const adminParentSlice = createSlice({
  name: "adminParent",
  initialState,
  reducers: {
    clear: (state) => {
      state.isError = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addParent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addParent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(addParent.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      })
      .addCase(getAllParent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllParent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(getAllParent.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
      });
  },
});

export const { clear } = adminParentSlice.actions;
export default adminParentSlice.reducer;
