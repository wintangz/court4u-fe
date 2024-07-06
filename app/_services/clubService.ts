import { axiosGet, axiosPost } from './baseService';

export const getClubs = () => axiosGet('/clubs', {});
export const getClub = (id: string) => axiosGet(`/clubs/${id}`, {});
export const getClubById = (id: string) => axiosGet(`/clubs/${id}`, {});
export const createdClub = (data: any) => axiosPost('/clubs', data, '');
export const updateClub = (id: string, data: any) =>
  axiosPost(`/clubs/${id}`, data, '');
