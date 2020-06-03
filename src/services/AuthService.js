
/**
 * Auth Service
 */
import axios from 'axios';
import { API_URL } from '../config';

const AuthService = {
  login: function(email, password) {
    return axios.post(API_URL + '/api/users/login', { email, password });
  },
  signup: function(firstName, lastName, email, password, phone, nationalId) {
    return axios.post(API_URL + '/api/users/signup', { firstName, lastName, email, password, phone, nationalId });
  },
  getProfile: function() {
    return axios.get(API_URL + '/profile', { headers: this.authHeader() });
  },
  logout: function () {
    localStorage.removeItem('token');
  },
  getToken: function() {
    return localStorage.getItem('token');
  },
  saveToken: function(token) {
    localStorage.setItem('token', token);
  },
  authHeader: function () {
    return { Authorization: this.getToken() }
  }
}

export default AuthService
