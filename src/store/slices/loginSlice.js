import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    signin: state => {
      state.isAuthenticated = true;
    },
  },
});

export const { signin } = loginSlice.actions;

export default loginSlice.reducer;
