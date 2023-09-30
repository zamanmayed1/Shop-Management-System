import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: '#f3f4f6', 
  language: 'en', 
  companyName : "Shop Mangement System"
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
  },
});

export const { setTheme, setLanguage,setCompanyName } = settingsSlice.actions;

export default settingsSlice.reducer;
