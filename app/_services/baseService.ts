import axios from 'axios';

export const baseUrl = 'https://court4u-application.ts.r.appspot.com/api';

export const axiosGet = (path: string, config: any) =>
  axios.get(baseUrl + path, config);

export const axiosPost = (path: string, data: any, config: any) =>
  axios.post(baseUrl + path, data, config);

export const axiosDelete = (path: string, config: any) =>
  axios.delete(baseUrl + path, config);
