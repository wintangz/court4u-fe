import { axiosGet, axiosPost } from './baseService';

export const register = (data: any) => axiosPost('/auth/signup', data, '');

export const login = (data: any) => axiosPost('/auth/login', data, '');

export const loginFacebook = (data: any) => axiosGet('/auth/facebook', data);

export const loginGoogle = (data: any) => axiosGet('/auth/google', data);

export const getUsers = () => axiosGet('/users', {});
