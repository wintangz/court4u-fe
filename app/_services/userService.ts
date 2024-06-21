import { axiosPost } from './baseService';

export const register = (data: any) => axiosPost('/auth/signup', data, '');

export const login = (data: any) => axiosPost('/auth/login', data, '');
