import axios from 'axios';

const API = axios.create({
  baseURL: 'https://boco-backend-q5zy.onrender.com/api',
  
  // Change to Render URL when deployed
});

export default API;