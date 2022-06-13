/* eslint-disable import/no-anonymous-default-export */
import api from './api';

const serverUrl = process.env.REACT_APP_SERVER;

export const signIn = data => api(serverUrl + 'user/sign-in', data, false);

export const signUp = data => api(serverUrl + 'user/sign-up', data, false);

