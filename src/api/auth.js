import api from './api';


export const signIn = data => api('user/sign-in', 'POST', data, false);

export const signUp = data => api('user/sign-up', 'POST', data, false);

