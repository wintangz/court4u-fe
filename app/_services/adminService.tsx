import { axiosGet } from './baseService';

var token: string | null = '';

if (typeof window !== 'undefined') {
  token = localStorage?.getItem('accessToken');
}

export const getMembers = () =>
  axiosGet('/dashboard/admin/member', { headers: { Authorization: token } });

export const getClubs = () =>
  axiosGet('/dashboard/admin/club', { headers: { Authorization: token } });

export const getBills = () =>
  axiosGet('/dashboard/admin/bill', { headers: { Authorization: token } });
