import { axiosGet } from './baseService';

export const getCourts = (id: string) => axiosGet(`/clubs?${id}`, {});
