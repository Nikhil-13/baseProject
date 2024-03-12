import axios from 'axios';
import Config from 'react-native-config';
import {getState, getStore} from '../redux';

const defaultOptions = () => {
  const authState = getState()?.auth || {};
  const token = authState?.data?.accessToken || '';
  return {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Type': 'application/json',
      Authorization: authState?.isLoggedIn ? `Bearer ${token}` : '',
    },
  };
};

export const APIClient = () => {
  const store = getStore();
  const apiClient = axios.create({
    baseURL: Config.API_URL,
    timeout: 4000,
    ...defaultOptions(),
  });

  apiClient.interceptors.request.use(async config => {
    return config;
  });
  apiClient.interceptors.response.use(
    response => {
      return response;
    },
    async function (error) {
      console.log({error: error});
      return Promise.reject(error);
    },
  );

  return apiClient;
};
