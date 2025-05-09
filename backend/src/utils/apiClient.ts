import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();


const RAWG_API_KEY = process.env.RAWG_API_KEY;

if (!RAWG_API_KEY) {
  throw new Error('RAWG_API_KEY is not defined in .env');
}

export const rawgApi = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: RAWG_API_KEY
  },
});

