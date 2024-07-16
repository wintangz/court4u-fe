import { axiosGet, axiosPost } from './baseService';

const token = localStorage.getItem('accessToken');

export const getClubSubscriptions = () =>
  axiosGet('/dashboard/admin/subscriptionforclub', {
    headers: { Authorization: token },
  });
