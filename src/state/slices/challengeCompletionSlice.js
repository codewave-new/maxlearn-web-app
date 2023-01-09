import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  points: null,
  type: null,
};

const challengeCompletionSlice = createSlice({
  name: 'challengeCompletion',
  initialState,
  reducers: {
    saveChallengeDetails: (state, { payload }) => {
      return {
        ...state,
        name: payload?.name,
        points: payload?.points,
        type: payload?.type,
      };
    },

    removeChallengeDetails: () => {
      return initialState;
    },
  },
});

export const { saveChallengeDetails, removeChallengeDetails } =
  challengeCompletionSlice.actions;
export default challengeCompletionSlice.reducer;
