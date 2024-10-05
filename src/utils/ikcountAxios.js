import axios from 'axios';

const baseURL = `${import.meta.env.VITE_APP_REST_API_URL}/iklab/ikcount/api/counting/command?atoken=${import.meta.env.VITE_APP_REST_API_ATOKEN}`;

const ikcount = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ikcount;
