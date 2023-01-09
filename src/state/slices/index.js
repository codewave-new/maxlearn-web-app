import { combineReducers } from 'redux';
import appSlice from './appSlice';
import loginSlice from './loginSlice.';
import uiSlice from './uiSlice';
import profileInfoSlice from './profileInfo'
import challengeCompletionSlice from './challengeCompletionSlice';

export const RootReducers = combineReducers({
  app: appSlice,
  ui: uiSlice,
  auth: loginSlice,
  profile:profileInfoSlice,
  challengeCompletion:challengeCompletionSlice
});
