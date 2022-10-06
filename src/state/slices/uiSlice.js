import { createSlice } from '@reduxjs/toolkit';

const initialState = { sidebar: false };

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showSideBar: (state, action) => {
      return (state = !action.payload);
    },
    hideSideBar: (state, action) => {
      return (state = false);
    },
  },
});

export const { showSideBar, hideSideBar } = uiSlice.actions;
export default uiSlice.reducer;
