import axios from 'axios';

export const BASE_URL = 'http://vash-vybir/back/api';

class AxiosConfig {
  constructor(url) {
    this.baseURL = url;
  }

  _create = () =>
    axios.create({
      baseURL: this.baseURL,
      // headers: {
      //   'Content-Type': 'application/json',
      //   accept: 'application/json',
      //   'Cache-Control': 'no-cache, no-store, must-revalidate',
      // },
    });
}

// API Facade Interface
export class Api {
  constructor(api) {
    this.http = api;
    this.api = api._create();
  }

  get = (url, config) => this.api.get(url, config);

  post = (url, data, config) => this.api.post(url, data, config);

  put = (url, data, config) => this.api.put(url, data, config);

  patch = (url, data, config) => this.api.patch(url, data, config);

  delete = (url, config) => this.api.delete(url, config);
}

const _config = new AxiosConfig(BASE_URL);
export const api = new Api(_config);
