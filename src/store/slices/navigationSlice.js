import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'app-navigation',
  initialState: {
    activePage: 'home',
  },
  reducers: {
    updateActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { updateActivePage } = navigationSlice.actions;

export default navigationSlice.reducer;
