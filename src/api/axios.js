import axios from 'axios';

let store;

export const injectStore = _store => {
  store = _store;
};

const axiosInstance = axios.create({
  baseURL: 'https://hunger-op.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(config => {
  const token = store?.getState()?.auth?.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
