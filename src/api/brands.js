import api from './api';

export const addBrand = data => api('brand/add-brand', 'POST', data);

export const getAllBrands = () => api('brand/brands', 'GET', {}, false);

export const updateBrand = data => api('brand/update-brand', 'PUT', data);

export const deleteBrand = data => api('brand/remove-brand', 'DELETE', {});
