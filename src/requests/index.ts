import axios from 'axios';

const API_ENDPOINT =
  'https://s4u3vt9rd9.execute-api.ap-northeast-2.amazonaws.com/production/';
// const API_ENDPOINT = 'http://localhost:4001/';

export const api = axios.create({
  baseURL: API_ENDPOINT,
});

export const kakaoApi = axios.create({
  baseURL: `https://kauth.kakao.com`,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
});

export const getLanldingStats = async (): Promise<{
  sellerCount: number;
  orderCount: number;
  customerCount: number;
}> => {
  const { data } = await api.get('/landing/stats');
  return data;
};
