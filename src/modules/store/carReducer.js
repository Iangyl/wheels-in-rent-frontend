
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brands: [],
  car: {},
  cars: [],
  models: [],
}

export const carReducer = createSlice({
  name: 'car',
  initialState,
  reducers: {
    saveBrands: (state, action) => {
      state.brands = action.payload.brands;
    },
    saveCurrentCar: (state, action) => {
      state.car = action.payload.car;
    },
    saveCarList: (state, action) => {
      state.cars = action.payload.cars;
    },
    saveModelList: (state, action) => {
      state.models = action.payload.models;
    }
  },
});

export const { saveBrands, saveCurrentCar, saveCarList, saveModelList } = carReducer.actions;

export const selectCar = (state) => state.car;

export default carReducer.reducer;
