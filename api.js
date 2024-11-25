import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mockapi.com/api', // replace with mock API URL
});

export default api;
