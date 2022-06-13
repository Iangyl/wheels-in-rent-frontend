import api from './api';

export const addModel = data => api('car-model/add-model', 'POST', data)

export const getAllModels = data => api('car-model/models', 'GET', {}, false)

export const updateModel = data => api('car-model/update-model', 'PUT', data)

export const deleteModel = data => api('car-model/delete-model', 'DELETE', {})
