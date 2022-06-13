
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  offices: [],
  comfortTypes: [],
}

export const otherReducer = createSlice({
  name: 'other',
  initialState,
  reducers: {
    saveOffices: (state, action) => {
      state.offices = action.payload.offices;
    },
    saveComfortTypes: (state, action) => {
      state.comfortTypes = action.payload.comfortTypes;
    },
  },
});

export const { saveOffices, saveComfortTypes } = otherReducer.actions;

export const selectOther = (state) => state.other;

export default otherReducer.reducer;
