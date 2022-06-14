
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  user: {},
}

export const sessionReducer = createSlice({
  name: 'session',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = '';
      state.user = {};
    },
  },
});

export const { login, logout } = sessionReducer.actions;

export const selectSession = (state) => state.session;

export default sessionReducer.reducer;
