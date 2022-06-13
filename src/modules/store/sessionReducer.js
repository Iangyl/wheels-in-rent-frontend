
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
}

export const sessionReducer = createSlice({
  name: 'session',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.token = initialState.token;
    },
  },
});

export const { login, logout } = sessionReducer.actions;

export const selectSession = (state) => state.session;

export default sessionReducer.reducer;
