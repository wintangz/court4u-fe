import { axiosGet, axiosPost } from './baseService';

var token: string | null = '';

if (typeof window !== 'undefined') {
  token = localStorage?.getItem('accessToken');
}

export const getClubSubscriptions = () =>
  axiosGet('/dashboard/admin/subscriptionforclub', {
    headers: { Authorization: token },
  });
