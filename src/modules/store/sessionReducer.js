
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
}

export const sessionReducer = createSlice({
  name: 'session',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload.user;
    },
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    connect: (state, action) => {
      state.address = action.payload.addressToken;
    },
    logout: (state) => {
      state.token = initialState.token;
      state.user = initialState.user;
      state.address = initialState.address;
    },
  },
});

export const { login, logout, connect, updateUser } = sessionReducer.actions;

export const selectSession = (state) => state.session;

export default sessionReducer.reducer;
