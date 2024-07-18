import { axiosGet } from './baseService';

var token: string | null = '';

if (typeof window !== 'undefined') {
  token = localStorage?.getItem('accessToken');
}

export const getBills = () =>
  axiosGet('/dashboard/admin/bill', { headers: { Authorization: token } });

export const getBillsOwner = () =>
  axiosGet('/dashboard/owner/bills', { headers: { Authorization: token } });

export const getBillDetail = (id: string) =>
  axiosGet(`/dashboard/admin/bill/${id}`, {
    headers: { Authorization: token },
  });

export const getBillByClubId = (id: string) =>
  axiosGet(`/dashboard/admin/bill/club/${id}`, {
    headers: { Authorization: token },
  });
