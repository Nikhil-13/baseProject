import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
  test: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    testReducer: (state, action) => {
      state.test = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(testThunk.pending, (state, action: any) => {});
    builder.addCase(testThunk.fulfilled, (state, action: any) => {});
    builder.addCase(testThunk.rejected, (state, action: any) => {});
  },
});

export const testThunk = createAsyncThunk(
  'auth/testThunk',
  async (_, {dispatch, getState}) => {
    try {
    } catch (error) {}
  },
);

export const testSelector = state => state.auth.test;

export default authSlice.reducer;
