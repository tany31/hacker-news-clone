import { create } from 'axios';

const axiosInstance = create({ baseURL: 'https://hacker-news.firebaseio.com/v0/' });

const get = (url, config) => {
  return axiosInstance.get(url, config).then(response => response.data);
};

const client = {
  ...axiosInstance,
  get,
};

export default client;
