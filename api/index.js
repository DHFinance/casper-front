import axios from 'axios';
export const API_HOST = process.env.NEXT_PUBLIC_API_HOST
class Api {
  constructor() {

    this.client = axios.create({
      baseURL: API_HOST || 'http://localhost:3001/api',
    });
  }

  post = async (url, data, params) => {
    return await this.client.post(url, data, params);
  };

  get = async (url, params = {}) => {
    return await this.client.get(url, params);
  };

  put = async (url, data, params) => {
    return this.client.put(url, data, params);
  };

  remove = async (url, params = {}) => {
    return await this.client.delete(url, params);
  };
}

const api = new Api();

export const {
  post,
  get,
  put,
  remove,
} = api;

export default api;
