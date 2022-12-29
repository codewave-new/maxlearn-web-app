import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  applicationId: localStorage.getItem('applicationId'),
  learnerId: localStorage.getItem('userid'),
  token: localStorage.getItem('TOKEN_NAME'),
  fullName: localStorage.getItem('fullname'),
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    saveAuth: (state, action) => {
      console.log(action);
      return {
        ...state,
        learnerId: action.payload.userid,
        token: action.payload.TOKEN_NAME,
        fullName: action.payload.fullname,
        applicationId: action.payload.applicationId,
      };
    },
    removeAuth: () => {
      return {
        loading: null,
        applicationId: null,
        learnerId: null,
        token: null,
        fullName: null,
      };
    },
  },
});

export const { saveAuth, removeAuth } = loginSlice.actions;
export default loginSlice.reducer;
