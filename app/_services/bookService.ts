import { axiosGet, axiosPost } from './baseService';

const token = localStorage.getItem('accessToken');

export const bookSlots = (slots: any) =>
  axiosPost('/bookSlots/checkout', slots, {
    headers: { Authorization: token },
  });
