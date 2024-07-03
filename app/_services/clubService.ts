import { axiosGet, axiosPost } from './baseService';

export const getClubs = () => axiosGet('/clubs', {});
