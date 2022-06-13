import api from './api';

export const addComfortType = data => api('add-comfort', 'POST', data);

export const getComfortTypes = () => api('comfort_types', 'GET', {}, false);

export const updateOffices = data => api('update-office', 'PUT', data);

export const deleteOffices = data => api('remove-office', 'DELETE', {});

export const addOffices = data => api('add-office', 'POST', data);

export const getOffices = data => api('offices', 'GET', {}, false);
