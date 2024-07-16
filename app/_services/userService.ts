import { axiosGet, axiosPost } from './baseService';

const token = localStorage.getItem('accessToken');

export const register = (data: any) => axiosPost('/auth/signup', data, '');

export const login = (data: any) => axiosPost('/auth/login', data, '');

export const loginFacebook = (data: any) => axiosGet('/auth/facebook', data);

export const loginGoogle = (data: any) => axiosGet('/auth/google', data);

export const getUsers = () =>
  axiosGet('/users', { headers: { Authorization: token } });

export const getUser = (id: string) =>
  axiosGet(`/users/${id}`, { headers: { Authorization: token } });
