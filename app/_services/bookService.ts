import { axiosGet, axiosPost } from './baseService';

var token: string | null = '';

if (typeof window !== 'undefined') {
  token = localStorage?.getItem('accessToken');
}

export const bookSlots = (slots: any) =>
  axiosPost('/bookSlots/checkout', slots, {
    headers: { Authorization: token },
  });
