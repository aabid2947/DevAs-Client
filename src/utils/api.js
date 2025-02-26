import axios from 'axios';

const API_URL = 'https://dev-as-server-b4okb1vux-aabid2947s-projects.vercel.app/api'; // Corrected API URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export const login = (email, password) => api.post('/auth/login', { email, password });
export const register = (username, email, password,interests) => api.post('/auth/register', { username, email, password,interests });
export const searchUsers = (query) => api.get(`/users/search?query=${query}`);
export const getFriendRecommendations = () => api.get('/users/recommendations');
export const sendFriendRequest = (recipientId) => api.post('/friends/request', { recipientId });
export const getFriendRequests = () => api.get('/friends/requests');
export const acceptFriendRequest = (requestId) => api.post('/friends/accept', { requestId });
export const rejectFriendRequest = (requestId) => api.post('/friends/reject', { requestId });
export const getFriendList = () => api.get('/friends/list');
export const getAlllUsers = () => api.get('/users/all-users');


export default api;

