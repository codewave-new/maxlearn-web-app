import { combineReducers } from 'redux';
import appSlice from './appSlice';
import uiSlice from './uiSlice';

export const RootReducers = combineReducers({ app: appSlice, ui: uiSlice });
