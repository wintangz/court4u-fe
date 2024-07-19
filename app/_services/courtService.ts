import { axiosGet, axiosPost } from './baseService';

var token: string | null = '';
var apiKey: string | null = 'est';

if (typeof window !== 'undefined') {
  token = localStorage?.getItem('accessToken');
}

if (typeof window !== 'undefined') {
  apiKey = localStorage?.getItem('api-key');
}

export const getCourts = (id: string) => axiosGet(`/clubs?${id}`, {});

export const addCourt = (data: any) =>
  axiosPost(`/courts`, data, {
    headers: {
      Authorization: token,
      'api-key': apiKey as string,
    },
  });
