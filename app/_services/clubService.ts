import { Dayjs } from 'dayjs';
import { axiosGet, axiosPost } from './baseService';

var token: string | null = '';
var apiKey: string | null = 'est';

if (typeof window !== 'undefined') {
  token = localStorage?.getItem('accessToken');
}

if (typeof window !== 'undefined') {
  apiKey = localStorage?.getItem('api-key');
}

export const getClubs = () => axiosGet('/clubs', {});

export const getClub = (id: string) => axiosGet(`/clubs/${id}`, {});

export const createClub = (data: any) => axiosPost('/clubs', data, '');

export const updateClub = (id: string, data: any) =>
  axiosPost(`/clubs/${id}`, data, '');

export const getClubRemainingCourt = (id: string, startDate: Dayjs) =>
  axiosGet(
    `/slots/slotInfo/${id}?startDate=${startDate.add(1, 'day').toISOString()}`,
    {}
  );

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
