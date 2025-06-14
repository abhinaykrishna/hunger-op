import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'app-theme',
  initialState: {
    appTheme: 'light',
  },
  reducers: {
    toggleTheme: (state, action) => {
      state.appTheme = action.payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
