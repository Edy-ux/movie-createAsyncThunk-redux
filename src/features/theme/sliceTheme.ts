import { createSlice } from '@reduxjs/toolkit';

type ThemeState = boolean;
const themeFromLocalStorage = !!localStorage.getItem('theme-movie');
const initialState: ThemeState = themeFromLocalStorage;

const themeSlice = createSlice({
  name: 'theme',
  initialState,

  reducers: {
    toogleTheme(state) {
      state
        ? localStorage.removeItem('theme-movie')
        : localStorage.setItem('theme-movie', 'dark-on');
      return (state = !state);
    },
  },
});

export const { toogleTheme } = themeSlice.actions;
export default themeSlice.reducer;
