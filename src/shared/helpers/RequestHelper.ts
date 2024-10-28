import axios, { AxiosRequestConfig } from 'axios';

export const fakeStoreApiInstance = () =>
  axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    timeout: 10000,
    // ...config,
  });
