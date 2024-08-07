import { Dayjs } from 'dayjs';
import { axiosGet, axiosPost } from './baseService';

var token: string | null = '';

if (typeof window !== 'undefined') {
  token = localStorage?.getItem('accessToken');
}
export const getClubs = () => axiosGet('/clubs', {});

export const getClubsOfOwner = () =>
  axiosGet('/dashboard/owner/clubs', {
    headers: { Authorization: token },
  });

export const getClub = (id: string) => axiosGet(`/clubs/${id}`, {});

export const createClub = (data: any) => axiosPost('/clubs', data, '');

export const updateClub = (id: string, data: any) =>
  axiosPost(`/clubs/${id}`, data, '');

export const getClubRemainingCourt = (id: string, startDate: Dayjs) =>
  axiosGet(
    `/slots/slotInfo/${id}?startDate=${startDate.add(1, 'day').toISOString()}`,
    {}
  );
