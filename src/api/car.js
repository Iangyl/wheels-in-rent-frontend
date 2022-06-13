import api from './api';

export const addCar = data => api('car/add-car', 'POST', data)

export const getAllCars = data => api('car/cars', 'GET', {}, false)

export const getCarById = data => api('car/car', 'GET', {}, false)

export const updateCar = data => api('car/update-car', 'PUT', data)

export const deleteModelCar = data => api('car/remove-car', 'DELETE', {})

