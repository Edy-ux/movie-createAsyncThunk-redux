import { createSlice } from '@reduxjs/toolkit';



type ThemeState = boolean
const initialState: ThemeState = false;


const themeSlice = createSlice({
  name: 'theme',
  initialState,

  reducers: {
    toogleTheme(state) {
      return state = !state
    },
  },
});



export const {toogleTheme } =  themeSlice.actions
export default themeSlice.reducer