import axios from 'axios';

const API_ENDPOINT =
  'https://s4u3vt9rd9.execute-api.ap-northeast-2.amazonaws.com/production/';
// const API_ENDPOINT = 'http://localhost:4001/';

export const api = axios.create({
  baseURL: API_ENDPOINT,
});
