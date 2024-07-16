import { axiosGet } from './baseService';

const token = localStorage.getItem('accessToken');

export const getMembers = () =>
  axiosGet('/dashboard/admin/member', { headers: { Authorization: token } });

export const getClubs = () =>
  axiosGet('/dashboard/admin/club', { headers: { Authorization: token } });

export const getBills = () =>
  axiosGet('/dashboard/admin/bill', { headers: { Authorization: token } });
