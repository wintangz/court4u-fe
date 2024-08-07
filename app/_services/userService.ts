import { axiosGet, axiosPost } from './baseService';

var token: string | null = '';

if (typeof window !== 'undefined') {
  token = localStorage?.getItem('accessToken');
}

export const register = (data: any) => axiosPost('/auth/signup', data, '');

export const login = (data: any) => axiosPost('/auth/login', data, '');

export const logout = () =>
  axiosGet('/auth/logout', { headers: { Authorization: token } });

export const loginFacebook = (data: any) => axiosGet('/auth/facebook', data);

export const loginGoogle = (data: any) => axiosGet('/auth/google', data);

export const changePassword = (password: string) =>
  axiosPost(
    '/users/verify/changePassword',
    { password: password },
    { headers: { Authorization: token } }
  );

export const getUsers = () =>
  axiosGet('/users', { headers: { Authorization: token } });

export const getUser = (id: string) =>
  axiosGet(`/users/${id}`, { headers: { Authorization: token } });

export const updateUser = (data: any) =>
  axiosPost(`/update`, { headers: { Authorization: token } }, data);
