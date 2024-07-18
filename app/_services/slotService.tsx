import { Dayjs } from 'dayjs';
import { axiosDelete, axiosGet, axiosPost } from './baseService';

var token: string | null = '';
var apiKey: string | null = 'est';

if (typeof window !== 'undefined') {
  token = localStorage?.getItem('accessToken');
}

if (typeof window !== 'undefined') {
  apiKey = localStorage?.getItem('api-key');
}

export const addSlot = (data: any) =>
  axiosPost('/slots', data, {
    headers: {
      Authorization: token,
      'api-key': apiKey as string,
    },
  });

export const deleteSlot = (id: string) =>
  axiosDelete(`/slots/${id}`, {
    headers: {
      Authorization: token,
      'api-key': apiKey as string,
    },
  });
