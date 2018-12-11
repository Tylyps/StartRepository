import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.punkapi.com/v2',
  transformResponse: [
    data => JSON.parse(data),
  ],
});

export default API;
