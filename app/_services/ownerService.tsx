import { axiosGet } from './baseService';

var token: string | null = '';
var apiKey: string | null = 'est';

if (typeof window !== 'undefined') {
  token = localStorage?.getItem('accessToken');
}

if (typeof window !== 'undefined') {
  apiKey = localStorage?.getItem('api-key');
}
export const getClubs = () =>
  axiosGet('/dashboard/owner/club', { headers: { Authorization: token } });

export const getClub = (id: string) =>
  axiosGet(`/dashboard/owner/club/${id}`, {
    headers: { Authorization: token },
  });

export const getBills = () =>
  axiosGet('/dashboard/owner/bill', { headers: { Authorization: token } });

export const getBookings = () =>
  axiosGet('/dashboard/owner/booking', { headers: { Authorization: token } });

export const selectClub = (id: string) =>
  axiosGet(`/dashboard/owner/club/select/${id}`, {
    headers: { Authorization: token },
  });

export const getSlotsOfClub = () =>
  axiosGet(`/dashboard/owner/slot`, {
    headers: {
      Authorization: token,
      'api-key': apiKey as string,
    },
  });
